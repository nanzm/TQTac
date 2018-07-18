import wepy from 'wepy';

export default class testMixin extends wepy.mixin {
    data = {
        mixin: 'This is mixin data.',
        toast: {
            show: false,
            msg: ''
        }
    };


    methods = {};

    showToast(msg) {
        this.toast.show = true;
        this.toast.msg = msg;
        setTimeout(() => {
            this.toast.show = false;
            this.$apply();
        }, 1000);
    }
}
