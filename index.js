
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


//#1.8 Data Types on JS
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


//1.9 Organizing Data with Arrays (배열)

    const some = "something";
    const daysOfWeek = ["mon", "tue", "wed",3, 4.2, true, some];
    console.log(daysOfWeek);

//1.10 Organizing Data with Objects (구조체)

    const junnInfo = {
        name : "junn",
        age : 23,
        gender: "Female",
        isHandsome: true,
        favMovies: ["Avengers", "Lord Of The Ring", "God father"],
        favFood: [
            {
                name: "Kimchi",
                fatty: false
            },
            {
                name: "Bulgogi burger",
                fatty: true
            }
        ]
    }
    //구조체 안에 배열or구조체 삽입 가능, 배열[] 안에 구조체{} 삽입 가능 

    junnInfo.gender = "Male"; // 구조체 값 나중에 변경 가능
    /*
        구조체 안에 있는 값은 바꿀 수 있지만,
        구조체 자체(junnInfo)는 바꿀 수 없음.
        ex) junnInfo = true (x)
    */

    console.log(junnInfo.gender);
    console.log(junnInfo.favMovies[1]);
    console.log(junnInfo.favFood[0].name);
