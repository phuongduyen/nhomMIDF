Feature: Kiểm tra dạng bài "Chọn từ mô tả tranh"
	In order to kiểm tra từ vựng đã học
	As 1 người dùng
	I want to làm bài kiểm tra

	Background:
		Given Tôi đang ở "Chọn từ mô tả tranh"
		And Màn hình hiển thị <tranh bánh mì>
		And Màn hình hiển thị 4 đáp án lựa chọn "egg, meat, milk, bread"
		
	Scenario: Tôi điền đúng
		When Tôi chọn đáp án "bread"
		Then Màn hình hiện thông báo "Đúng rồi!"
		And Tôi được cộng 1 điểm
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

	Scenario: Tôi điền sai
		When Tôi chọn 1 trong 3 đáp án "egg, meat, milk"
		Then Màn hình thông báo" Sai rồi! Đáp án đúng là bread"
		And điểm của tôi sẽ không được cộng
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo


