import wepy from 'wepy';


function canvasWorkBreak(maxWidth, fontSize, text) {
    const maxLength = maxWidth / fontSize;
    const textLength = text.length;
    let textRowArr = [];
    let tmp = 0;
    while (1) {
        textRowArr.push(text.substr(tmp, maxLength));
        tmp += maxLength;
        if (tmp >= textLength) {
            return textRowArr;
        }
    }
}

export default function(obj, cb) {
    let {
        headimgPath, mainimgPath, qrcodePath,
        sponsor, title, nickname, rules
    } = obj;

    let ctx = wx.createCanvasContext('shareCanvas');

    let windowWidth = 375;
    let half = windowWidth / 2;
    let conentWidth = windowWidth - 30;


    drawBackground();  //画背景
    drawCircle();  //头像
    drawTxt();  //名字

    drawRoundBox();   //内容区

    drawMainPic();  //主图
    drawQrcode(); //二维码


    drawSponsor();
    drawContent();  //奖品标题 时间
    drawLine();
    drawSologen();


    //画背景
    function drawBackground() {
        ctx.setFillStyle('#d6564d');
        ctx.fillRect(0, 0, 375, 657);
    }

    //绘制内容器
    function drawRoundBox() {
        ctx.setFillStyle('#ffffff');
        ctx.fillRect(15, 170, conentWidth, 467);
    }

    //画头像
    function drawCircle() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(half, 50, 30, 0, 2 * Math.PI);
        ctx.fill();
        ctx.clip();
        ctx.drawImage(headimgPath, half - (30), 50 - 30, 60, 60);
        ctx.restore();
    }

    //写顶部位子
    function drawTxt() {
        ctx.setFontSize(16);
        ctx.setFillStyle('#ffdebd');
        ctx.setTextAlign('center');
        ctx.fillText(nickname, half, 110);
        ctx.setFontSize(22);
        ctx.setFillStyle('#ffdebd');
        ctx.fillText('发起了一个抽奖活动', half, 150);
    }

    //主图
    function drawMainPic() {
        ctx.drawImage(mainimgPath, 30, 185, conentWidth - 30, 160);
    }

    //赞助
    function drawSponsor() {
        ctx.rect(245, 310, 90, 18);
        ctx.setFillStyle('rgba(0,0,0,.6)');
        ctx.fill();
        ctx.setFontSize(12);
        ctx.setFillStyle('#fff');
        ctx.fillText(sponsor + ' 赞助 ', 291, 323);
    }

    //奖品标题 时间
    function drawContent() {
        ctx.setFontSize(18);
        ctx.setFillStyle('#333333');
        ctx.setTextAlign('left');
        ctx.rect(10, 10, 150, 75);
        ctx.fillText(title, 30, 370);  //绘制文字
        ctx.setFontSize(14);
        ctx.setFillStyle('#999999');
        ctx.fillText(rules, 30, 400);
    }

    function drawLine() {
        ctx.setLineWidth(1);
        ctx.setStrokeStyle('#e9e9e9');
        ctx.moveTo(30, 420);
        ctx.lineTo(345, 420);
        ctx.stroke();
        ctx.moveTo(30, 423);
        ctx.lineTo(345, 423);
        ctx.stroke();
    }


    //二维码
    function drawQrcode() {
        ctx.drawImage(qrcodePath, half - 50, 440, 100, 100);
    }

    //底部文字
    function drawSologen() {
        ctx.setFontSize(16);
        ctx.setFillStyle('#999999');
        ctx.setTextAlign('center');
        ctx.fillText('长按小程序码,参与抽奖', half, 580);  //绘制文字
    }


    ctx.draw(false, function() {
        cb && cb();
    });
}
