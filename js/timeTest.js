    function GetCurrentTimeStr() {//获取当前时间
        var currentDate = new Date();
        var currentTimeStr = null;
        var year = currentDate.getFullYear().toString();
        var month = (currentDate.getMonth() + 1).toString();
        var date = currentDate.getDate().toString();
        var hour = currentDate.getHours().toString();
        var minute = currentDate.getMinutes().toString();
        var second = currentDate.getSeconds().toString();
        //currentTimeStr = second + minute + hour + date + month + year;
        currentTimeStr = year+'年'+ month +'月'+ date +'日'+hour +'时'+ minute +'分'+ second + '秒';
        return currentTimeStr;
    }

   //alert(GetCurrentTimeStr()); 