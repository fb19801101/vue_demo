// CurveElement 相关接口
import axios from '@/utils/baseAxios'

export default {
  insertCurveElement: function (curveElement) {
    return axios.axiosPost('/curve-element/insertCurveElement', { curveElement: curveElement })
  },
  modifyCurveElement: function (curveElement) {
    return axios.axiosPost('/curve-element/modifyCurveElement', { curveElement: curveElement })
  },
  deleteCurveElement: function (ceQx, ceJD) {
    return axios.axiosPost('/curve-element/deleteCurveElement', {
      ceQx: ceQx,
      ceJD: ceJD
    })
  },
  selectCurveLine: function () {
    return axios.axiosGet('/curve-element/selectCurveLine')
  },
  selectCurveElement: function () {
    return axios.axiosGet('/curve-element/selectCurveElement')
  },
  countCurveElement: function () {
    return axios.axiosGet('/curve-element/countCurveElement')
  },
  searchCurveElement: function (field, value, page, limit) {
    return axios.axiosPost('/curve-element/searchCurveElement', {
      field: field,
      value: value,
      page: page,
      limit: limit
    })
  },
  clearCurveElement: function () {
    return axios.axiosGet('/curve-element/clearCurveElement')
  },
  initCurveElement: function (ceQx, dkBegin, dkEnd) {
    return axios.axiosPost('/curve-element/initCurveElement', {
      ceQx: ceQx,
      dk_begin: dkBegin,
      dk_end: dkEnd
    })
  },
  importExcelCurveElement: function (file) {
    return axios.axiosPost('/curve-element/importExcelCurveElement', { file: file })
  },
  exportExcelCurveElement: function () {
    return axios.axiosGet('/curve-element/exportExcelCurveElement')
  },
  calculateCoordinate: function (action, ceQx,
    dkBegin, dkEnd, dkGap, dkDist,
    dkBeginBreak, dkEndBreak, dkLabelBreak,
    xyTp, xyL0, xyH0) {
    return axios.axiosPost('/curve-element/calculateCoordinate', {
      action: action,
      ceQx: ceQx,
      dk_begin: dkBegin,
      dk_end: dkEnd,
      dk_gap: dkGap,
      dk_dist: dkDist,
      dk_begin_break: dkBeginBreak,
      dk_end_break: dkEndBreak,
      dk_label_break: dkLabelBreak,
      xy_Tp: xyTp,
      xy_L0: xyL0,
      xy_H0: xyH0
    })
  }
}
