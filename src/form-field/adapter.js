import pathSatisfies from 'ramda/es/pathSatisfies'
import isNil from 'ramda/es/isNil'
import { MDCFormField } from '@material/form-field'
import { SMCAdapter } from '../base'
import { log, isArr, isFn } from '../utils'

export default class FormFieldAdapter extends SMCAdapter {
  constructor ({ sel, elm, children }) {
    super(sel, new MDCFormField(elm))

    if (
      isArr(children) &&
      pathSatisfies(
        child => !isNil(child),
        ['data', 'material', 'component', 'ripple'],
        children[0]
      )
    ) {
      this.component.input = children[0].data.material.component
    }

    this.destroy_ = () => {
      if (pathSatisfies(isFn, ['input', 'destroy'], this.component)) {
        log(this.sel, '-> input.destroy()')

        this.component.input.destroy()
      }
    }
  }
}
