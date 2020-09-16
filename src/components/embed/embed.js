import { NAME_EMBED } from '../../constants/components'
import Vue, { mergeData } from '../../utils/vue'
import { arrayIncludes } from '../../utils/array'

export const props = {
  type: {
    type: String,
    default: 'iframe',
    validator: str =>
      arrayIncludes(['iframe', 'embed', 'video', 'object', 'img', 'b-img', 'b-img-lazy'], str)
  },
  tag: {
    type: String,
    default: 'div'
  },
  aspect: {
    type: String,
    default: '16by9'
  }
}

// @vue/component
export const BEmbed = /*#__PURE__*/ Vue.extend({
  name: NAME_EMBED,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      {
        ref: data.ref,
        staticClass: 'embed-responsive',
        class: {
          [`embed-responsive-${props.aspect}`]: props.aspect
        }
      },
      [h(props.type, mergeData(data, { ref: '', staticClass: 'embed-responsive-item' }), children)]
    )
  }
})
