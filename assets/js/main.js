// BTN Change
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const button = document.querySelector('.del_btn');

    checkbox.addEventListener('change', function () {
        // تعديل خاصية disabled بناءً على حالة الصندوق
        button.disabled = !checkbox.checked;
        
        // تغيير لون خلفية الزر
        if (checkbox.checked) {
            button.style.backgroundColor = "#fa321c"; // لون واضح عند التحديد
            button.style.color = "#ffffff"; // لون نص الزر ليكون واضحا
        } else {
            button.style.backgroundColor = "#FFDAD6"; // لون أكثر قتامة عند عدم التحديد
            button.style.color = "#FFF"; // لون نص الزر عند عدم التحديد
        }
    });
});

