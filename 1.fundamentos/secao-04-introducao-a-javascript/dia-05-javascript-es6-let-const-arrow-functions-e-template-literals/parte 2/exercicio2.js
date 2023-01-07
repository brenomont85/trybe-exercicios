//Crie uma função que calcule a área de um círculo.

const circleArea = (radius) => {
    const PI = 3.14;

    let area = PI * radius * radius;

    console.log(`Essa é a área do círculo: ${area}`);
};

circleArea(3); // Essa é a área do círculo: 28.259999999999998
circleArea(5); // Essa é a área do círculo: 78.5
