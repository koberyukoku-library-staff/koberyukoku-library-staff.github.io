document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');
  const contentHeader = document.getElementById('content-title');
  const contentFrame = document.getElementById('content-frame');

  const pathMap = {
    'トップ': '/top',
    'カレンダー': '/calendar',
    'Googleドライブ': 'https://drive.google.com/drive/folders/1sqY8VGma4CLHXCtI-3WQh-g5qVOdiT9l',
    'メッセージ': '/message',
    'カウンターシフト': '/shift',
    'カウンター業務記録': '/report',
    '申請': '/petition',
    'マニュアル': '/manual',
    '本を貸し出す': '/lending',
    '本を返却する': '/return'
  };

  // 初期表示で「トップ」を表示する
  const initialTitle = 'トップ';
  contentHeader.textContent = initialTitle;
  contentFrame.src = pathMap[initialTitle];

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent.trim();

      if (text === 'Googleドライブ') {
        // タイトルと iframe は変更しない
        window.open(pathMap[text], '_blank');
      } else {
        // 通常処理：タイトルと iframe を更新
        contentHeader.textContent = text;
        contentFrame.src = pathMap[text] || '/top';
      }
    });
  });
});
