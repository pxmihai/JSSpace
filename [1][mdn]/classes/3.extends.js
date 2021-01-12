if (0) {
    class DateFormatter extends Date {

        getFormattedDate() {
            const months = ['Janx', 'Febx', 'Marx', 'Aprx', 'Mayx', 'Junx', 'Julx', 'Augx', 'Sepx', 'Octx', 'Novx', 'Decx'];
            return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
        }

    }

    console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// expected output: "19-Aug-1975"
}
if (1) {
    class myDate extends Date {

        getFormattedDate() {
            let months = ['J a n', 'F e b', 'M a r', 'A p r', 'M a y', 'J u n', 'J u l', 'A u g', 'S e p', 'O c t', 'N o v', 'D e c'];
            let days =['001','002','003','004','005','006','007','008','009','010','011','012','013','014','015','016','017','018','019','020','021','022','023','024','025','026','027','028','029','030','031']
             return days[this.getDate()-1] + ' - ' + months[this.getMonth()] + ' - ' + this.getFullYear();
        }
    }
    console.log(new myDate('August 19, 1975 23:15:30').getFormattedDate());

}