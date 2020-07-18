<template>
  <!-- 对话框的遮罩 -->
  <transition name="dialog-fade">
    <div class="yf-dialog__wrapper" v-show="visible" @click.self="handleClose">
    <div class="yf-dialog">
      <!-- 对话框的头部 -->
    <div class="yf-dialog__header">
      <slot name="title">
        <span class="yf-dialog__title">{{title}}</span>
      </slot>
      <button class="yf-dialog__headerbtn" @click="handleClose">
        <i class="yf-icon-close"></i>
      </button>
    </div>
    <!-- 对话框的身体 -->
    <div class="yf-dialog__body">
      <span>这是一段信息</span>
    </div>
    <!-- 对话框的尾部 -->
    <div class="yf-dialog__footer">
      <yf-button>取消</yf-button>
      <yf-button type="primary">确定</yf-button>
    </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'YfDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.yf-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto; //auto： 在需要时剪切内容并添加滚动条，此为body对象和textarea的默认值。
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .yf-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .yf-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .yf-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      // 深度选择器 scss ::v-deep  less /deep/  css >>>
      ::v-deep .yf-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade .3s;
}

.dialog-fade-leave-active {
  animation: fade .3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>