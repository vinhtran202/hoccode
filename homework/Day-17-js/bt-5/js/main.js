function triangle(N) {
    let number = 1;

    for (let i = 1; i <= N; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += number + " ";
            number++;
        }

        console.log(row);
    }
}

triangle(5);