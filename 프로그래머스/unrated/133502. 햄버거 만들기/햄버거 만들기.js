function solution(ingredient) {
  let answer = 0;
  const ingredientStack = [];

  ingredient.forEach((el) => {
    ingredientStack.push(el);
    let endIndex = ingredientStack.length - 1;
    if (ingredientStack[endIndex] === 1 && ingredientStack[endIndex - 1] === 3 && ingredientStack[endIndex - 2] === 2 && ingredientStack[endIndex - 3] === 1) {
      ingredientStack.pop();
      ingredientStack.pop();
      ingredientStack.pop();
      ingredientStack.pop();
      answer++;
    }
  });
  return answer;
}
