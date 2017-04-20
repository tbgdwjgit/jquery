// var arr =[12,32,"eew"];
// alert(arr[2]);
// document.write(arr[0]);
// document.write(arr[3]);

var arr =[13,11,33,57,62,34,55,23];

function getMax(arr){//最大值
	var swap=0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]>swap) {
           swap = arr[i];
		}
	}
	return swap;
}

// arr.prototype.getMax = getMax(arr);
//arr.getMax();

// arr.sort();//排序
// for (var i = 0; i < arr.length; i++) {
// 	alert(arr[i]);
// }

alert(getMax(arr));

