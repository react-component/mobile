import * as React from 'react';
import { render, mount } from 'enzyme';
import { html } from 'cheerio';
import TouchFeedback from '../src';

describe('basic', () => {
  it('base.', () => {
    const wrapper = render(
      <TouchFeedback
        activeClassName="active"
        activeStyle={{ color: 'red' }}
        disabled
      >
        <div style={{ color: '#000' }} className="normal">
          click to active
        </div>
      </TouchFeedback>,
    );
    expect(html(wrapper)).toMatchSnapshot();
  });

  it('works ok', async () => {
    const instance = mount(
      <TouchFeedback activeClassName="active" activeStyle={{ color: 'red' }}>
        <div style={{ color: '#000' }} className="normal">
          click to active
        </div>
      </TouchFeedback>,
    );

    const d = instance.find(TouchFeedback);
    const n = d.find('div').getDOMNode();

    d.simulate('touchstart');
    expect(d.state()).toHaveProperty('active', true);
    expect(n.className).toBe('normal active');
    expect(n.getAttribute('style')).toBe('color: red;');

    d.simulate('touchend');
    expect(d.state()).toHaveProperty('active', false);
    expect(n.className).toBe('normal');
    expect(n.getAttribute('style')).toBe('color: rgb(0, 0, 0);');
  });

  it('activeStyle false', async () => {
    const instance = mount(
      <TouchFeedback activeClassName="active" activeStyle={false}>
        <div style={{ color: '#000' }} className="normal">
          click to active
        </div>
      </TouchFeedback>,
    );

    const d = instance.find(TouchFeedback);
    const n = d.find('div').getDOMNode();

    d.simulate('touchstart');
    expect(n.className).toBe('normal');
  });

  it('disabled', async () => {
    const instance = mount(
      <TouchFeedback
        activeClassName="active"
        activeStyle={{ color: 'red' }}
        disabled
      >
        <div style={{ color: '#000' }} className="normal">
          click to active
        </div>
      </TouchFeedback>,
    );

    const d = instance.find(TouchFeedback);
    const n = d.find('div').getDOMNode();

    d.simulate('touchstart');
    expect(n.className).toBe('normal');
    expect(n.getAttribute('style')).toBe('color: rgb(0, 0, 0);');
  });
});
