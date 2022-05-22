//khi an nut thì cac gia trị se hien thi tren "hienthi"
//lay gia tri tren "hienthi" đe dung ham eval để tinh toan
//hien kqua tren "hienthi"
//reset
function inputValue(value){
    let giatrihienthi=document.getElementById('manhinhkq').value //giatrihienthi=null
    giatrihienthi+=value;//giatrihienthi=null+giatrinhapvao
    //cong chuoi
    document.getElementById("manhinhkq").value=giatrihienthi;//Gan  tro lai giatrihienthi bang gia tri tren 'manhinhkq'
    //
}
//Y(x)=x+1
function tinhtoan(){
    let kqTinhtoan=document.getElementById("manhinhkq").value;
    kqTinhtoan=eval(kqTinhtoan);
    document.getElementById("manhinhkq").value=kqTinhtoan;
}
function xoamanhinh(){
    document.getElementById("manhinhkq").value="" ;
}
