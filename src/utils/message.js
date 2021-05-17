import Vue from "vue";

/**
 *
 * @param type {string} 消息类型
 * @param content {string=} 详细说明
 * @param duration {string=} 延时时间
 * @returns {TypeError}
 */
export default (type, content, duration) => {
  const messageElement = Vue.prototype.$Message[type];
  if (messageElement) {
    messageElement({
      content,
      duration
    })
  } else {
    return new TypeError(`${type}不存在`);
  }
}