
 //~#1.7까지 내용
    /* 
        alert('hello world!') 
        -> hello world! 와 같은 기능
    */
    let a = 221;
    let b = a - 7;
    const c = 300;
    a = 4;
    // c = 5; << const 때문에 실행 하면 오류 남. 
    console.log(b, a);
    console.log(c);


//#1.8 내용
    /*
        일반적으로 진짜 필요해서 let를 사용하는 경우를 제외하고,
        웬만하면 const로 변수를 선언한다.
    */ 

    // String = 문자열
        const what = "✈✈✈";
        console.log(what);

    //Boolean = 불대수(true or false)
        const wat = true; //true 는 1, false 는 0 을 의미하는데 텍스트는 아님.
        console.log(wat);
    //Number = 정수
        const num = 666;
        console.log(num);
    //Float = 실수
        const fl = 4.3;
        console.log(fl);
