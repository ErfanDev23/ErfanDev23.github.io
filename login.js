document.getElementById('loginForm').addEventListener('submit', function(event) {
                              event.preventDefault(); // جلوگیری از ارسال فرم
                          
                              const username = document.getElementById('username').value;
                              const password = document.getElementById('password').value;
                              const errorMessage = document.getElementById('errorMessage');
                          
                              // بررسی نام کاربری و رمز عبور
                              if (username === 'admin' && password === 'admin') {
                                  // انتقال به صفحه داشبورد
                                  window.location.href = 'dashboard.html';
                              } else {
                                  // نمایش پیام خطا
                                  errorMessage.textContent = 'نام کاربری یا رمز عبور اشتباه است.';
                              }
                          });
                          