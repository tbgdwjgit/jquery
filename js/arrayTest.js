// var arr =[12,32,"eew"];
// alert(arr[2]);
// document.write(arr[0]);
// document.write(arr[3]);

var arr =[13,11,33,57,62,33,55,23];

function getMax(arr){//最大值
	var swap=0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]>swap) {
           swap = arr[i];
		}
	}
	return swap;
}

//原型法设计模式




//Array.prototype.Max = getMax();
Array.prototype.getMax =function(){//增加数组方法
	var swap=0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]>swap) {
           swap = arr[i];
		}
	}
	return swap;	
}
alert(arr.getMax());

    Array.prototype.getSum =function(){//求和
    	 var swap=0;
         for (var i = 0; i < arr.length; i++) {
             swap=swap + arr[i];
        }
        return swap;	
	};
    alert(arr.getSum());


// Array.prototype.getDistinctData =function(){ //删去数组中重复的数据
//   for(var j=0;j<arr.length;j++){  
//      for(var f=j+1;f<arr.length;f++){  
//          if(arr[j]==arr[f]){  
//             arr.splice(j,1);  
//             j--;  
//             break;  
//          }  
//     }  
//   } 
//   return arr; 
// }


// arr.sort();//排序
// for (var i = 0; i < arr.length; i++) {
// 	alert(arr[i]);
// }

//alert(getMax(arr));

// alert(arr.getDistinctData());
// alert(arr.getSum());


Array.prototype.getDistinctData =function(){ //删去数组中重复的数据
  for(var j=0;j<self.length;j++){  
     for(var f=j+1;f<self.length;f++){  
         if(self[j]==self[f]){  
            self.splice(j,1);  
            j--;  
            break;  
         }  
    }  
  } 
  return arr; 
}

var arrq=["wwe","dwde","wwe"];
alert(arrq.getDistinctData());