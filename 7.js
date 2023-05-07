function createPuzzle() {
  const puzzleForm = document.getElementById('puzzle-form');
  const resultBox = document.getElementById('result-box');
  let wrongAttempts = 0; // 错误答案的计数器

  puzzleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const answer = num1 * num2;

    if (answer === 42) {
      resultBox.innerHTML = '恭喜你，你解决了这个谜题！';
    } else {
      wrongAttempts++;
      if (wrongAttempts >= 2) {
        resultBox.innerHTML = '抱歉，这不是正确答案。试试乘法！';
      } else {
        resultBox.innerHTML = '抱歉，这不是正确答案。请再试一次。';
      }
    }
  });
}
