document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');
  const contentHeader = document.getElementById('content-title');
  const contentFrame = document.getElementById('content-frame');

  const pathMap = {
    'トップ': '/top',
    'カレンダー': '/calendar',
    'Googleドライブ': '/life',
    'メッセージ': '/message',
    'カウンターシフト': '/shift',
    'カウンター業務記録': '/report',
    '申請': '/petition',
    'マニュアル': '/manual',
    '本を貸し出す': '/lending',
    '本を返却する': '/return',
  };

  // 初期表示で「トップ」を表示する
  const initialTitle = 'トップ';
  contentHeader.textContent = initialTitle;
  contentFrame.src = pathMap[initialTitle];

  // 各メニュークリックで表示を更新
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent.trim();
      contentHeader.textContent = text;
      contentFrame.src = pathMap[text] || '/top';
    });
  });
});
