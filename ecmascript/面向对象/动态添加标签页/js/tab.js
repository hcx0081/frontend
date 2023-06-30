var that;
var num = 3;
var text;

class Tab {
    constructor(id) {
        that = this;// 保存this
        this.main = document.getElementById(id);
        this.liList = this.main.getElementsByTagName('li');
        this.sectionList = this.main.getElementsByTagName('section');

        this.ul = document.querySelector('ul');
        this.add = document.querySelector('.tabadd');
        this.tabscon = document.querySelector('.tabscon');


        this.inconList = document.getElementsByClassName('icon-guanbi');


        this.init();
    }

    // 初始化操作，创建对象后就给相关元素绑定事件
    init() {
        for (let i = 0; i < this.liList.length; i++) {
            this.liList[i].index = i;// 保存索引
            this.liList[i].onclick = this.toggleTab;
        }

        this.add.onclick = this.addTab;

        for (let i = 0; i < this.inconList.length; i++) {
            this.inconList[i].index = i;// 保存索引
            this.inconList[i].onclick = this.removeTab;
        }


        document.querySelector('.liactive span:first-child').ondblclick = this.editTab;
        document.querySelector('.conactive').ondblclick = this.editTab;
    }

    toggleTab() {
        for (let i = 0; i < that.liList.length; i++) {
            that.liList[i].className = '';
        }
        this.className = 'liactive';

        for (let i = 0; i < that.sectionList.length; i++) {
            that.sectionList[i].className = '';
        }
        if (that.sectionList.length > 0) {
            that.sectionList[this.index].className = 'conactive';
        }

        that.init();
    }

    addTab() {
        // 创建li标签
        that.ul.innerHTML += ` <li><span>测试${++num}</span><span class="iconfont icon-guanbi"></span></li>`;

        // 创建section标签
        that.tabscon.innerHTML += `<section>测试${num}</section>`;


        /* 重新进行初始化操作，因为使用innerHTML添加子元素会将父元素的内容全部清空再创建，原来绑定的事件会全部消失 */
        that.init();
    }

    removeTab(event) {
        // 禁止冒泡
        event.cancelBubble = true;
        // 删除li
        this.parentNode.remove();


        that.sectionList[this.index].remove();

        // 方式一
        // that.showFirst();


        /* 重新进行初始化操作，重新获取当前元素的索引 */
        that.init();

        if (that.liList.length > 0) {
            // 方式二：模拟鼠标点击事件，触发切换标签功能
            that.liList[0].click();
        }
    }

    editTab() {
        // 解决第二次点击出现html标签bug
        if (!/^<input/.test(this.innerHTML)) {
            text = this.innerHTML;
        }

        this.innerHTML = `<input type="text" value="${text}"/>`;

        // 全选输入框文本
        this.firstElementChild.select();

        // 当输入框失去焦点
        this.firstElementChild.onblur = function () {
            /* 注意this指向 */
            this.parentNode.innerHTML = this.value;
        };
        // 当按下回车
        this.firstElementChild.onkeydown = function (event) {
            if (event.key == 'Enter') {
                /* 注意this指向 */
                // 方式一：让当前输入框的内容成为父元素的内容
                // this.parentNode.innerHTML = this.value;

                // 方式二：让当前输入框失去焦点，即调用上面定义的事件
                this.blur();
            }
        };
    }


    // 显示第一个
    showFirst() {
        for (let i = 0; i < that.liList.length; i++) {
            that.liList[i].className = '';
        }
        if (that.liList.length > 0) {
            that.liList[0].className = 'liactive';
        }


        for (let i = 0; i < that.sectionList.length; i++) {
            that.sectionList[i].className = '';
        }
        if (that.sectionList.length > 0) {
            that.sectionList[0].className = 'conactive';
        }
    }
}

// 创建实例对象，才会自动调用构造方法
new Tab('tab');
