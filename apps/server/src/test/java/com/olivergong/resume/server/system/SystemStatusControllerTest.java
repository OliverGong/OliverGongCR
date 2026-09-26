package com.olivergong.resume.server.system;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class SystemStatusControllerTest {
  @Test
  void reportsUp() {
    assertThat(new SystemStatusController().status()).containsEntry("status", "UP");
  }
}
