Feature: Kiểm tra trắc nghiệm
	In order to kiểm tra từ vựng đã học
	As 1 người dùng
	I want to nhận kết quả kiểm tra từ
	
	Scenario: chọn đáp án đúng
		Given Tôi đang truy cập kiểm tra trắc nghiệm thông minh
		When Tôi click vào đáp án b 
		Then Tôi nhận kết quả sai
		And Tôi nhận được đáp án đúng
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

	Scenario: chọn đáp án sai
		Given Tôi đang truy cập kiểm tra trắc nghiệm thông minh
		When Tôi click vào đáp án a
		Then Tôi nhận kết quả đúng
		And điểm của tôi sẽ tăng 1 đv
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

	Scenario Outline: chọn từ mô tả tranh
		Given Tôi đang truy cập kiểm tra trắc nghiệm thông minh
		When Tôi click <answer>
		Then Tôi nhận <result>
		And Tôi sẽ tăng điểm lên 1 đv nếu <answer> đúng
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

		Examples:
		<tranh bánh mì>
		| answer | result |
		|a. bread|   đúng |
		|b. beef |    sai |
		|c. meat |    sai |
		|d. egg  |    sai |

