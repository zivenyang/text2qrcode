<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <h2>file2qrcode</h2>
        <v-file-input
          v-model="file"
          label="选择文件"
          outlined
          :max-size="10240"
          show-size
          :clearable="false"
          @change="handleFileChange"
        ></v-file-input>

        <v-textarea
          v-model="base64Text"
          label="Base64 编码结果"
          rows="7"
          counter
          outlined
          readonly
        ></v-textarea>

        <v-text-field v-model.number="segmentSize" label="分段大小" type="number" min="1" outlined
         required :rules="[v => !!v || '请输入分段大小']"></v-text-field>

        <v-btn @click="generateQRCode" :disabled="!base64Text" color="primary">生成二维码</v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-row v-if="qrCodes.length > 0">
          <v-col v-for="(qrCode, index) in qrCodes" :key="index" cols="4" @click="openQRCodeDialog(index)">
            <v-img :src="qrCode" :alt="'QR Code ' + (index + 1)" class="qr-code-image" contain tile></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Dialog for QR Code Image -->
    <v-dialog v-model="dialogQRCode" max-width="800">
      <v-carousel v-model="selectedQRIndex" hide-delimiters progress="primary">
        <v-carousel-item v-for="(qrCode, index) in qrCodes" :key="index">
          <v-row justify="center">
            <v-col cols="12" sm="6" md="6">
              <v-img :src="qrCode" :alt="'QR Code ' + (selectedQRIndex + 1)"></v-img>
            </v-col>
          </v-row>
          <v-card>
            <v-card-text>第 {{ index + 1 }} 段</v-card-text>
            <v-divider></v-divider>
            <v-card-text>{{ qrText[index] }}</v-card-text>
            <v-card-actions class="qr-code-actions">
              <v-btn color="primary" @click="downloadQRCode(index)">下载二维码</v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-dialog>

  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import QRCode from 'qrcode';
import saveAs from 'file-saver';

const MAX_FILE_SIZE = 10240; // 10KB 的最大值

const segmentSize = ref<number>(256);

const file = ref<File | null>(null);
const base64Text = ref<string>('');
const qrCodes = ref<string[]>([]);
const qrText = ref<string[]>([]);
const selectedQRIndex = ref<number>(0);
const dialogQRCode = ref<boolean>(false);

const handleFileChange = () => {
  if (file.value) {
    if (file.value.size > MAX_FILE_SIZE) {
      alert('文件大小不能超过 10KB');
      file.value = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        const base64Result = reader.result.toString();
        const base64Match = base64Result.match(/(?<=base64,).*/);
        if (base64Match && base64Match.length > 0) {
          base64Text.value = base64Match[0];
        } else {
          alert('无法解析文件中的 Base64 编码文本');
        }
      }
    };
    reader.readAsDataURL(file.value);
  }
};

const generateQRCode = async () => {
  if (base64Text.value) {
    qrCodes.value = []; // 清空之前的二维码
    qrText.value = []; // 清空之前的文本
    const textChunks = chunkText(base64Text.value, segmentSize.value); // 将文本按照 512 字符进行分段
    for (const text of textChunks) {
      const qrCode = await QRCode.toDataURL(text);
      qrCodes.value.push(qrCode);
      qrText.value.push(text);
    }
  }
};

const chunkText = (text: string, chunkSize: number): string[] => {
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.substring(i, i + chunkSize));
  }
  return chunks;
};

const openQRCodeDialog = (index: number) => {
  selectedQRIndex.value = index;
  dialogQRCode.value = true;
};

const downloadQRCode = (index: number) => {
  saveAs(qrCodes.value[index], `QR_Code_${index + 1}.png`);
};

watch(file, () => {
  base64Text.value = ''; // 清除文本
  qrCodes.value = []; // 清空二维码
  qrText.value = []; // 清空文本
});
</script>

<style scoped>
.qr-code-image {
  cursor: pointer;
}

.qr-code-image-dialog {
  max-width: 100%;
  max-height: 80vh;
  cursor: zoom-in;
}

.qr-code-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0, 0.9);
  z-index: 1000;
  /* Ensure the info card appears above the QR code */
}

.qr-code-actions {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
