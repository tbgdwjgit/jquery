//split
// var str="jpg|bmp|gif|ico|png";
// var arr=str.split("|"); 
// alert(arr);

// var str="jpg|bmp|gif|ico|png";
// var arr=str.slice(0,3); 
// alert(arr);

//Join
// var str="jpg|bmp|gif|ico|png";
// var arr=str.split("|"); 
// var delimitedString=arr.join("~"); 
// alert(delimitedString);

// var myList=new Array("jpg","bmp","gif","ico","png"); 
// var portableList=myList.join("|"); 
// alert(portableList);//结果是jpg|bmp|gif|ico|png 

//substring 或 slice
// var str="jpg|bmp|gif|ico|png";
// alert(str.substring(0,3));

//indexOf
// var str="jpg|bmp|gif|ico|png";
// alert(str.indexOf("|"));

//substring substr
// var str="jpg|bmp|gif|ico|png";
// alert(str.substring(4));
// alert(str.substr(4));
// str =str.substr(4);
// alert(str.substring(0,3));
// alert(str.substr(0,3));

//var str=" q w 334 88 bb ";
// var str="jpg|bmp|gif|ico|png";
// Sting.prototype.gettrim = function(){//删除空格
//     var arr=str.split("|"); 
//     var arrstr="";
//     for (var i = 0; i < arr.length; i++) {
//     	arrstr = arrstr + arr[i];
//     }
//     return "afadf";
// }
// alert(str.gettrim());
//alert("123");

var str=" q w 334 88 bb ";
// String.prototype.TrimSpace = function () {
//     return this.replace(/(^\s*)|(\s*$)/g, "");
// }

// alert(str.Trim());


  //字符串转换成数组  
  String.prototype.stringtoarr=function(){  
             var arr=[];  
             for(x=0;x<this.length;x++){      
                  arr[x]=this.charAt(x);              
             }  
      return arr;      
  }  

  //将字符串倒序  
  String.prototype.reverseto=function(){  
           var rr=this.stringtoarr();  
           for(var x=0,y=rr.length-1;x<y;x++,y--){  
               var temp=rr[x];  
               rr[x]=rr[y];  
               rr[y]=temp;       
      }  
      return rr.join("");  
        
  } 

  //去除字符串前后空格  
  String.prototype.stringtoTrim=function(){  
        var arr=[];              
        arr=this.replace(/(^\s*)|(\s*$)/g, "");

      return arr;      
  }    

  // var arr = str.stringtoTrim();
  // //alert(arr);
  // document.write("<h1>"+arr+"</h1>");

 // var arr1 =  str.reverseto();
 // // for (var i = 0; i < arr1.length; i++) {
 // //  	alert(arr1[i]);
 // // }
 // alert(arr1);


  // var ss='abcdef';
  // var ss2=ss.stringtoarr();
  // alert(ss2);
  // alert(ss.reverseto());







