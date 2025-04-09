# Hàm Xử Lý Số Với Độ Trễ (processWithDelay)

Đây là một hàm được viết bằng TypeScript để xử lý từng số trong một mảng với độ trễ nhất định, in ra số đó sau mỗi lần chờ, và trả về một Promise được resolve khi tất cả các số đã được xử lý.

## Đặc điểm của hàm

- **Xử lý tuần tự:** Mỗi số trong mảng được xử lý theo thứ tự.
- **Độ trễ động:** Hàm áp dụng độ trễ cho mỗi số trước khi in ra; trong đoạn code mẫu, độ trễ được tính theo `number * 1000` mili giây (tức số 1 sẽ có độ trễ 1 giây, số 2 có độ trễ 2 giây, …). Bạn có thể tùy chỉnh logic này nếu chỉ muốn 1 giây giữa các số.
- **In ra Console:** Mỗi số được in ra console sau khi đã hoàn tất độ trễ.
- **Promise:** Hàm trả về một Promise, được resolve khi tất cả các số đã được xử lý.
- **Xử lý mảng rỗng:** Nếu mảng truyền vào là rỗng, hàm sẽ trả về một Promise đã resolve ngay lập tức.

## Hướng Dẫn Chạy

clone: https://github.com/PhuocVO94/LogicTest_1.git

- npm install

### Cách 1

- ts-node processWithDelay.ts

### Cách 2

- Biên dịch qua js " tsc FrontendDeveloper.ts "
- Chạy lệnh " node FrontendDeveloper.js"
