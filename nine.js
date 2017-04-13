document.write("<table>");
for (var i = 1; i <= 9; i++) {
	document.write("<tr>");
	for (var j = 1; j <= i; j++) {
         document.write("<td>"+i+"*"+j+"="+i*j+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");