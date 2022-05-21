// position for image
interface Position {
  x: number
  y: number
}
// size for image
interface Size {
  w: number
  h: number
}

// global module for type
declare module 'cloud-web-api' {
  interface Response {
    errcode: '0' | '-1'
    errmsg: 'ok' | string
  }

  /** bank card response */
  interface BankCardRes extends Response {
    /** 银行卡号编号 */
    id: string
  }

  /**
   * business license response body
   */
  interface BusinessLicenseRes extends Response {
    /** 注册号 */
    reg_num: string
    /** 编号 */
    serial: string
    /** 法定代表人姓名 */
    legal_representative: string
    /** 企业名称 */
    enterprise_name: string
    /** 组成形式 */
    type_of_organization: string
    /** 经营场所/企业住所 */
    address: string
    /** 公司类型 */
    type_of_enterprise: string
    /** 经营范围 */
    business_scope: string
    /** 注册资本 */
    registered_capital: string
    /** 实收资本 */
    paid_in_capital: string
    /** 营业期限 */
    valid_period: string
    /** 注册日期/成立日期 */
    registered_date: string
    /** 营业执照位置 */
    cert_position: {
      pos: {
        left_top: Position
        right_top: Position
        right_bottom: Position
        left_bottom: Position
      }
    }
    /** 照片尺寸 */
    img_size: Size
  }

  /**
   * driver license response body
   */
  interface DriverLicenseRes extends Response {}
}
