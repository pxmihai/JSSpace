{
    let a = [1, 2, 3, 4, 5];
    a.push(5);
    a.push(5);

    let del = 5;
    let result = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== del) result.push(a[i])
    }
    console.log(result);
}

//  splice( index, remove_count, item_list )
{
    // splice is an in place method

    const a=[1,2,3,4,5,6,7,8,9,10];
    console.log(a.splice(2,6,9,9,9));/* displays the numbers that are removed */
    console.log(a); /*start at position 2, delete the next 6 numbers, replace with 3 numbers, 9 9 9*/

}

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); /*pushes February between jan and march, starting at position 1, deleting nothing from there and adding in place 'Feb*/
// inserts at index 1
console.log(months);
