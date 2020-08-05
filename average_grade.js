//#dnn_ctr479_ViewSVKQHocPhan_rptKQHocPhan_trDaDanhGia_0 > td:nth-child(12)
//#dnn_ctr479_ViewSVKQHocPhan_rptKQHocPhan_trDaDanhGia_0 > td:nth-child(4)
let list_grade = []
let tin_chi = []
let pending = true
for (let i = 0; pending == true; i++) {
    let select_name = '#dnn_ctr479_ViewSVKQHocPhan_rptKQHocPhan_trDaDanhGia_' + i + ' > td:nth-child(12)';
    let elem = $(select_name)
    let select_tinchi = '#dnn_ctr479_ViewSVKQHocPhan_rptKQHocPhan_trDaDanhGia_' + i + ' > td:nth-child(4)';
    let elem_tinchi = $(select_tinchi)

    if (elem.length > 0) {
        list_grade.push(parseFloat(elem[0].innerText));
        tin_chi.push(parseFloat(elem_tinchi[0].innerText));
        console.log(parseFloat(elem[0].innerText))
    } else {
        pending = false
    }
}
let sum = 0
list_grade[14] = 7
list_grade[16] = 8
let tong_tin_chi = 0.0
for (let i = 0; i < list_grade.length; i++) {
    sum += list_grade[i] * tin_chi[i]
    tong_tin_chi += tin_chi[i]
}
console.log(list_grade);
console.log('sum :' + sum);
console.log('avg :' + sum / tong_tin_chi);
