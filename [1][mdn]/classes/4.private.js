if (0){
    class ClassWithPrivateField {
        #privateField
    }

    // class ClassWithPrivateMethod {
    //     #privateMethod() {
    //         return 'hello world';
    //     }
    // }
    // private fields are not currently supported
    class ClassWithPrivateStaticField {
        static #PRIVATE_STATIC_FIELD
    }

}
if (0){
    class ClassWithPrivateStaticField {
        static #PRIVATE_STATIC_FIELD

        static publicStaticMethod() {
            ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
            return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
        }
    }

    console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42)
} // it just gets weird
if (0){
    class BaseClassWithPrivateStaticField {
        static #PRIVATE_STATIC_FIELD

        static basePublicStaticMethod() {
            this.#PRIVATE_STATIC_FIELD = 42
            return this.#PRIVATE_STATIC_FIELD
        }
    }

    class SubClass extends BaseClassWithPrivateStaticField { }

    let error = null

    try {
        SubClass.basePublicStaticMethod()
    } catch(e) { error = e}

    console.assert(error instanceof TypeError)

}// ok but why
if (1){

}// todo come back when private methods are allowed
