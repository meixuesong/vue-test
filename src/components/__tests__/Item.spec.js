import {shallowMount} from "@vue/test-utils";
import Item from '../Item.vue';

describe('', () => {
    test('test', () => {
        const item = {
            title: 'hello',
            url: 'http://localhost/hello'
        }

        const wrapper = shallowMount(Item, {propsData: {item}});

        expect(wrapper.text()).toContain('hello');
    });

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
        let vueWrapper = wrapper.find('a');
        expect(vueWrapper.text()).toContain('hello');
        expect(vueWrapper.attributes().href).toBe(item.url);
    })

})
