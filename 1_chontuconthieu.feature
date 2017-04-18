Feature: Kiểm tra dạng bài "Chọn từ còn thiếu"
	In order to kiểm tra từ vựng đã học
	As 1 người dùng
	I want to làm bài kiểm tra

	Background:
		Given Tôi đang ở "Chọn từ còn thiếu"
		And Màn hình hiển thị câu hỏi "She__rice and meat"
		And Màn hình hiển thị 4 đáp án lựa chọn "drink, drinks, eat, eats"
		
	Scenario: Tôi chọn đúng
		When Tôi click vào đáp án "eats"
		Then Màn hình hiện thông báo "Đúng rồi!"
		And Tôi được cộng 1 điểm
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

	Scenario: Tôi chọn sai
		When Tôi click vào 1 trong 3 đáp án"drink, drinks, eat"
		Then Màn hình thông báo" Sai rồi! Đáp án đúng là eats"
		And điểm của tôi sẽ không được cộng
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

