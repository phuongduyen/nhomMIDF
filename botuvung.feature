Feature: Học từ mới theo bộ
  In order to học từ mới theo các bộ
  As 1 người dùng
  I want to nhớ cách phát âm, nghĩa và áp dụng từ trong câu

  Scenario: học từ
    Given người dùng đang truy cập bộ từ vựng
    When người dùng click một bộ từ
    Then từ mới hiện ra
    When người dùng click loa
    Then người dùng nghe thấy cách phát âm của từ
    When người dùng click next
    Then từ mới tiếp theo hiện ra


