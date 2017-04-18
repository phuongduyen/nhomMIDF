Feature: Kiểm tra dạng bài "Điền từ hợp nghĩa"
	In order to kiểm tra từ vựng đã học
	As 1 người dùng
	I want to làm bài kiểm tra

	Background:
		Given Tôi đang ở "Điền từ hợp nghĩa"
		And Màn hình hiển thị câu hỏi "Con cá"
		And Màn hình hiển thị ô trống để tôi điền câu trả lời
		
	Scenario: Tôi điền đúng
		When Tôi điền đáp án vào ô trống là "fish"
		Then Màn hình hiện thông báo "Đúng rồi!"
		And Tôi được cộng 1 điểm
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

	Scenario: Tôi điền sai
		When Tôi điền đáp án vào ô trống là "meat"
		Then Màn hình thông báo" Sai rồi! Đáp án đúng là fish"
		And điểm của tôi sẽ không được cộng
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo


