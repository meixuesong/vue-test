import Item from '@/components/Item.vue'
import {shallowMount} from "@vue/test-utils";

describe('Item.vue', function () {
  it('renders props.msg when passed', () => {
    const item = {
      title: 'hello',
      url: 'http://localhost/hello'
    }
    const wrapper = shallowMount(Item, {
      propsData : {
        item
      }
    })
    // expect(wrapper.text()).toMatch(item.url)
    let vueWrapper = wrapper.find('a');
    expect(vueWrapper.text()).toContain('hello');
    expect(vueWrapper.attributes().href).toBe(item.url);
  })
});
