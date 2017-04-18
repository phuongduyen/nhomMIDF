Feature: Học từ theo bộ
	In order to nhớ cách phát âm, nghĩa và áp dụng từ mới trong câu
	As 1 người dùng
	I want to học từ mới theo các bộ

	Background:
		Given Tôi đang ở "Học từ theo bộ"
		And Màn hình hiển thị từ Noodle
		And Màn hình hiển thị "<tranh mì sợi>; cách phát âm ['nu:dl']; nghĩa : mì sợi; ví dụ: "I had breakfast with instance noodle."
		
	Scenario: Học từ
		When người dùng click next
		Then từ mới tiếp theo hiện ra
