// var arr =[12,32,"eew"];
// alert(arr[2]);
// document.write(arr[0]);
// document.write(arr[3]);

var arr =[63,21,57,2,34];

function getMax(arr){
	var swap=0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length-1; j++) {
			if (arr[i]>arr[j]) {				
				swap = arr[i];
			}else
			{
				swap = arr[j];
			}
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

