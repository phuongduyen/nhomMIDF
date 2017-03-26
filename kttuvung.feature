Feature: Làm bài kiểm tra trắc nghiệm
  In order to kiểm tra từ vựng đã học
  As 1 người dùng
  I want to nhận kết quả kiểm tra từ

  Scenario: chọn từ còn thiếu
    Given người dùng đang truy cập kiểm tra trắc nghiệm thông minh
    When người dùng click đáp án
    Then người dùng nhận kết quả
    When người dùng click Next
    Then người dùng sẽ nhìn thấy câu hỏi tiếp theo

  Scenario: chọn từ hợp nghĩa
    Given người dùng đang truy cập kiểm tra trắc nghiệm thông minh
    When người dùng click đáp án
    Then người dùng nhận kết quả
    When người dùng click Next
    Then người dùng sẽ nhìn thấy câu hỏi tiếp theo

  Scenario: chọn từ mô tả tranh
    Given người dùng đang truy cập kiểm tra trắc nghiệm thông minh
    When người dùng click đáp án
    Then người dùng nhận kết quả
    When người dùng click Next
    Then người dùng sẽ nhìn thấy câu hỏi tiếp theo
