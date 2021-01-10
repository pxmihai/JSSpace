// https://nodejs.org/dist/latest-v14.x/docs/api/packages.html#packages_determining_module_system

let counter=0;

 function increase(){

    counter++;
    return counter+'------------------';
}

export {increase};
// module.exports=increase;