(function(){
var KEY='ledger-v1', LKEY='ledger-lang';
var I={
zh:{dPhone:'手机',dPc:'电脑',dPad:'iPad',hi:'来句好话',snd:'按钮声音（收入/支出）',thT:'主题与颜色',thMode:'外观',thAuto:'跟随系统',thLight:'浅色',thDark:'深色',thPre:'配色方案',thAc:'主色',thReset:'恢复默认',intT:'利息计算器',iP:'本金',iR:'利率（%）',iRM:'每月',iRY:'每年',iN:'存期',iDM:'个月',iDY:'年',iS:'单利',iC:'复利',iHint:'单利只按本金计息，复利的利息会继续产生利息。',iInt:'利息',iTot:'本息合计',iEq:'折合年利率',goalT:'储蓄目标',gName:'目标名称（例如：买车）',gTarget:'目标金额',gSet:'设定目标',gDep:'存入金额（负数表示取出）',gAdd:'存入',gDel:'删除目标',gDelQ:'删除这个储蓄目标？',gDone:'目标已达成！',gProg:function(s,t,p){return '已存 '+s+' / '+t+'（'+p+'%）';},cMgr:'管理分类',cNew:'新分类名称',cAdd:'添加',cDel:'删除这个分类？已有的记录会保留。',selAll:'全选',delSel:'删除所选',selN:function(n){return '已选 '+n+' 条';},confN:function(n){return '删除所选的 '+n+' 条记录？';},sel:'选择这一笔',yes:'确认删除',no:'取消',cur:'货币',ed:'修改',upd:'保存修改',cxl:'取消修改',q:'搜索备注或分类',all:'全部分类',bud:'每月预算',budHint:'给支出分类设置每月预算，留空表示不限。接近或超出时会在“支出去向”里提醒。',near:function(n,p){return '“'+n+'”已用掉预算的 '+p+'%，快超了。';},over:function(n,p){return '“'+n+'”已超出预算（'+p+'%）。';},tr:'收支趋势',trM:'按月',trY:'按年',rep:'每月自动重复（按所选日期的“号”）',rules:'固定账目',ruleD:function(d){return '每月 '+d+' 日';},bk:'数据备份',exJ:'导出备份',exC:'导出表格 (CSV)',imp:'导入备份',bBox:'备份文本',bkHint:'备份文件包含当前账号的全部记录。导入时只会添加新记录，不会覆盖或重复已有的。CSV 可用 Excel 打开，但不能导入。',bSaved:'已导出。',bBad:'这个文件不是有效的备份文件。',bNone:'还没有可导出的记录。',bCopy:'当前环境不能直接下载。请复制下面的文本并保存成文件（备份用 .json，表格用 .csv）。',bDone:function(a,s){return '已导入 '+a+' 条记录'+(s?'，跳过 '+s+' 条重复或无效的':'')+'。';},csvH:['日期','类型','分类','金额','备注'],login:'登录',register:'注册',user:'用户名',pass:'密码',pass2:'确认密码',logout:'退出',noteAuth:'账户只保存在这台设备的浏览器里，用来把不同人的记录分开。忘记密码无法找回。',eUser:'用户名需 2 到 20 个字符。',ePass:'密码至少 6 位。',eMatch:'两次输入的密码不一致。',eExists:'这个用户名已被使用。',eBad:'用户名或密码不正确。',eNoCrypto:'当前浏览器不支持加密功能，无法登录。',title:'TMC Ledger',lang:'语言',prev:'上个月',next:'下个月',bal:'本月结余',balPos:'收入减去支出',balNeg:'这个月花得比赚得多',inc:'收入',exp:'支出',bars:'支出去向',add:'记一笔',type:'类型',amt:'金额',cat:'分类',date:'日期',memo:'备注（可不填）',ph:'例如：午饭',save:'保存这一笔',list:'本月明细',foot:'数据只保存在你当前设备的浏览器里，清除浏览器数据会丢失记录。',eAmt:'请输入大于 0 的金额。',eDate:'请选择日期。',none:'这个月还没有记录，先记下第一笔吧。',noExp:'还没有支出记录。',noList:'这个月没有明细。',day:'当日',del:'删除这一笔',conf:'删除这一笔记录？',
sum:function(m,i,e,b,p){return m+'共收入 '+i+'，支出 '+e+'，'+(p?'结余 ':'超支 ')+b+'。';},top:function(n,p){return '花得最多的是“'+n+'”，占支出的 '+p+'%。';},avg:function(v){return '平均每天花 '+v+'。';},ratio:function(r){return '支出相当于收入的 '+r+'%。';},
c:{food:'餐饮',transport:'交通',shop:'购物',home:'住房',fun:'娱乐',health:'医疗',other:'其他',salary:'工资',bonus:'奖金',side:'兼职'}},
en:{dPhone:'Phone',dPc:'Computer',dPad:'iPad',hi:'Say something nice',snd:'Button sounds (income/spending)',thT:'Theme and colors',thMode:'Appearance',thAuto:'System',thLight:'Light',thDark:'Dark',thPre:'Color schemes',thAc:'Accent',thReset:'Reset to default',intT:'Interest calculator',iP:'Principal',iR:'Rate (%)',iRM:'per month',iRY:'per year',iN:'Term',iDM:'months',iDY:'years',iS:'Simple',iC:'Compound',iHint:'Simple interest is charged on the principal only; compound interest earns interest on interest.',iInt:'Interest',iTot:'Total',iEq:'Equivalent annual rate',goalT:'Savings goal',gName:'Goal name (e.g. new car)',gTarget:'Target amount',gSet:'Set goal',gDep:'Amount to add (negative to withdraw)',gAdd:'Add',gDel:'Delete goal',gDelQ:'Delete this savings goal?',gDone:'Goal reached!',gProg:function(s,t,p){return 'Saved '+s+' of '+t+' ('+p+'%)';},cMgr:'Manage categories',cNew:'New category name',cAdd:'Add',cDel:'Delete this category? Existing entries are kept.',selAll:'Select all',delSel:'Delete selected',selN:function(n){return n+' selected';},confN:function(n){return 'Delete '+n+' selected entries?';},sel:'Select this entry',yes:'Delete',no:'Cancel',cur:'Currency',ed:'Edit',upd:'Save changes',cxl:'Cancel editing',q:'Search notes or category',all:'All categories',bud:'Monthly budgets',budHint:'Set a monthly budget per spending category; leave blank for none. You’ll be warned under “Where the money went” when you get close or go over.',near:function(n,p){return '“'+n+'” has used '+p+'% of its budget.';},over:function(n,p){return '“'+n+'” is over budget ('+p+'%).';},tr:'Income and spending trend',trM:'Monthly',trY:'Yearly',rep:'Repeat every month (on the chosen date’s day)',rules:'Recurring entries',ruleD:function(d){return 'Every month on day '+d;},bk:'Backup',exJ:'Export backup',exC:'Export spreadsheet (CSV)',imp:'Import backup',bBox:'Backup text',bkHint:'A backup holds all entries of this account. Importing only adds new entries and never overwrites or duplicates existing ones. CSV opens in Excel but can’t be imported.',bSaved:'Exported.',bBad:'This isn’t a valid backup file.',bNone:'There are no entries to export yet.',bCopy:'Direct download isn’t available here. Copy the text below and save it as a file (.json for a backup, .csv for a spreadsheet).',bDone:function(a,s){return 'Imported '+a+' entries'+(s?', skipped '+s+' duplicate or invalid':'')+'.';},csvH:['Date','Type','Category','Amount','Note'],login:'Log in',register:'Sign up',user:'Username',pass:'Password',pass2:'Confirm password',logout:'Log out',noteAuth:'Accounts live only in this device’s browser and keep different people’s entries apart. A forgotten password can’t be recovered.',eUser:'Username must be 2 to 20 characters.',ePass:'Password must be at least 6 characters.',eMatch:'The passwords don’t match.',eExists:'That username is already taken.',eBad:'Wrong username or password.',eNoCrypto:'This browser doesn’t support encryption, so login is unavailable.',title:'TMC Ledger',lang:'Language',prev:'Previous month',next:'Next month',bal:'Balance this month',balPos:'Income minus spending',balNeg:'You spent more than you earned this month',inc:'Income',exp:'Spending',bars:'Where the money went',add:'Add an entry',type:'Type',amt:'Amount',cat:'Category',date:'Date',memo:'Note (optional)',ph:'e.g. lunch',save:'Save entry',list:'This month’s entries',foot:'Your data is stored only in this device’s browser. Clearing browser data erases the entries.',eAmt:'Enter an amount greater than 0.',eDate:'Choose a date.',none:'No entries this month yet. Add your first one.',noExp:'No spending recorded yet.',noList:'No entries this month.',day:'Day',del:'Delete this entry',conf:'Delete this entry?',
sum:function(m,i,e,b,p){return m+': income '+i+', spending '+e+', '+(p?'left over ':'overspent by ')+b+'.';},top:function(n,p){return 'Biggest category: “'+n+'”, '+p+'% of spending.';},avg:function(v){return 'Average spending per day: '+v+'.';},ratio:function(r){return 'Spending equals '+r+'% of income.';},
c:{food:'Food',transport:'Transport',shop:'Shopping',home:'Housing',fun:'Fun',health:'Health',other:'Other',salary:'Salary',bonus:'Bonus',side:'Side income'}},
ru:{dPhone:'Телефон',dPc:'Компьютер',dPad:'iPad',hi:'Доброе слово',snd:'Звук кнопок (доходы/расходы)',thT:'Тема и цвета',thMode:'Оформление',thAuto:'Системная',thLight:'Светлая',thDark:'Тёмная',thPre:'Цветовые схемы',thAc:'Основной цвет',thReset:'Сбросить',intT:'Калькулятор процентов',iP:'Сумма',iR:'Ставка (%)',iRM:'в месяц',iRY:'в год',iN:'Срок',iDM:'мес.',iDY:'лет',iS:'Простые',iC:'Сложные',iHint:'Простые проценты начисляются только на сумму вклада; сложные — ещё и на накопленные проценты.',iInt:'Проценты',iTot:'Итого',iEq:'Эквивалентная годовая ставка',goalT:'Цель накоплений',gName:'Название цели (например, машина)',gTarget:'Сумма цели',gSet:'Задать цель',gDep:'Сумма пополнения (минус — снять)',gAdd:'Пополнить',gDel:'Удалить цель',gDelQ:'Удалить эту цель накоплений?',gDone:'Цель достигнута!',gProg:function(s,t,p){return 'Накоплено '+s+' из '+t+' ('+p+'%)';},cMgr:'Управление категориями',cNew:'Название новой категории',cAdd:'Добавить',cDel:'Удалить эту категорию? Существующие записи сохранятся.',selAll:'Выбрать все',delSel:'Удалить выбранные',selN:function(n){return 'Выбрано: '+n;},confN:function(n){return 'Удалить выбранные записи ('+n+')?';},sel:'Выбрать запись',yes:'Удалить',no:'Отмена',cur:'Валюта',ed:'Изменить',upd:'Сохранить изменения',cxl:'Отменить изменение',q:'Поиск по заметке или категории',all:'Все категории',bud:'Месячные бюджеты',budHint:'Задайте месячный бюджет для категорий расходов; пустое поле — без лимита. Когда лимит близко или превышен, вы увидите предупреждение в блоке «Куда уходят деньги».',near:function(n,p){return '«'+n+'»: использовано '+p+'% бюджета.';},over:function(n,p){return '«'+n+'»: бюджет превышен ('+p+'%).';},tr:'Динамика доходов и расходов',trM:'По месяцам',trY:'По годам',rep:'Повторять каждый месяц (в выбранное число)',rules:'Регулярные записи',ruleD:function(d){return 'Каждый месяц, '+d+'-го числа';},bk:'Резервная копия',exJ:'Экспорт копии',exC:'Экспорт в таблицу (CSV)',imp:'Импорт копии',bBox:'Текст копии',bkHint:'Копия содержит все записи этого аккаунта. При импорте добавляются только новые записи, существующие не перезаписываются и не дублируются. CSV открывается в Excel, но импортировать его нельзя.',bSaved:'Экспортировано.',bBad:'Это не файл резервной копии.',bNone:'Пока нет записей для экспорта.',bCopy:'Прямое скачивание здесь недоступно. Скопируйте текст ниже и сохраните как файл (.json для копии, .csv для таблицы).',bDone:function(a,s){return 'Импортировано записей: '+a+(s?', пропущено дубликатов или неверных: '+s:'')+'.';},csvH:['Дата','Тип','Категория','Сумма','Заметка'],login:'Войти',register:'Регистрация',user:'Имя пользователя',pass:'Пароль',pass2:'Повторите пароль',logout:'Выйти',noteAuth:'Аккаунты хранятся только в браузере этого устройства и разделяют записи разных людей. Забытый пароль восстановить нельзя.',eUser:'Имя пользователя: от 2 до 20 символов.',ePass:'Пароль должен быть не короче 6 символов.',eMatch:'Пароли не совпадают.',eExists:'Это имя уже занято.',eBad:'Неверное имя пользователя или пароль.',eNoCrypto:'Браузер не поддерживает шифрование, вход недоступен.',title:'TMC Ledger',lang:'Язык',prev:'Предыдущий месяц',next:'Следующий месяц',bal:'Остаток за месяц',balPos:'Доходы минус расходы',balNeg:'В этом месяце расходы превысили доходы',inc:'Доходы',exp:'Расходы',bars:'Куда уходят деньги',add:'Добавить запись',type:'Тип',amt:'Сумма',cat:'Категория',date:'Дата',memo:'Заметка (необязательно)',ph:'например, обед',save:'Сохранить запись',list:'Записи за месяц',foot:'Данные хранятся только в браузере этого устройства. Если очистить данные браузера, записи пропадут.',eAmt:'Введите сумму больше 0.',eDate:'Выберите дату.',none:'В этом месяце записей ещё нет. Добавьте первую.',noExp:'Расходов пока нет.',noList:'В этом месяце нет записей.',day:'За день',del:'Удалить запись',conf:'Удалить эту запись?',
sum:function(m,i,e,b,p){return m+': доходы '+i+', расходы '+e+', '+(p?'остаток ':'перерасход ')+b+'.';},top:function(n,p){return 'Больше всего потрачено на «'+n+'» — '+p+'% расходов.';},avg:function(v){return 'В среднем в день: '+v+'.';},ratio:function(r){return 'Расходы составляют '+r+'% от доходов.';},
c:{food:'Еда',transport:'Транспорт',shop:'Покупки',home:'Жильё',fun:'Развлечения',health:'Здоровье',other:'Другое',salary:'Зарплата',bonus:'Премия',side:'Подработка'}},
kk:{dPhone:'Телефон',dPc:'Компьютер',dPad:'iPad',hi:'Жылы сөз',snd:'Түйме дыбыстары (кіріс/шығыс)',thT:'Тақырып және түстер',thMode:'Көрініс',thAuto:'Жүйе бойынша',thLight:'Ашық',thDark:'Қараңғы',thPre:'Түс схемалары',thAc:'Негізгі түс',thReset:'Әдепкіге қайтару',intT:'Пайыз калькуляторы',iP:'Негізгі сома',iR:'Мөлшерлеме (%)',iRM:'айына',iRY:'жылына',iN:'Мерзім',iDM:'ай',iDY:'жыл',iS:'Қарапайым',iC:'Күрделі',iHint:'Қарапайым пайыз тек негізгі сомаға есептеледі; күрделі пайыз жиналған пайызға да есептеледі.',iInt:'Пайыз',iTot:'Жиыны',iEq:'Жылдық баламалы мөлшерлеме',goalT:'Жинақ мақсаты',gName:'Мақсат атауы (мысалы, көлік)',gTarget:'Мақсатты сома',gSet:'Мақсат қою',gDep:'Қосылатын сома (минус — алу)',gAdd:'Қосу',gDel:'Мақсатты жою',gDelQ:'Бұл жинақ мақсатын жою керек пе?',gDone:'Мақсатқа жетілді!',gProg:function(s,t,p){return t+' ішінен '+s+' жиналды ('+p+'%)';},cMgr:'Санаттарды басқару',cNew:'Жаңа санат атауы',cAdd:'Қосу',cDel:'Бұл санатты жою керек пе? Бар жазбалар сақталады.',selAll:'Барлығын таңдау',delSel:'Таңдалғанды жою',selN:function(n){return 'Таңдалды: '+n;},confN:function(n){return 'Таңдалған '+n+' жазбаны жою керек пе?';},sel:'Жазбаны таңдау',yes:'Жою',no:'Бас тарту',cur:'Валюта',ed:'Өзгерту',upd:'Өзгерісті сақтау',cxl:'Өзгертуден бас тарту',q:'Ескертпе немесе санат бойынша іздеу',all:'Барлық санаттар',bud:'Айлық бюджет',budHint:'Шығыс санаттары үшін айлық бюджет қойыңыз; бос қалдырсаңыз, шектеу жоқ. Шектен асқанда немесе жақындағанда «Ақша қайда кетті» бөлімінде ескертеміз.',near:function(n,p){return '«'+n+'»: бюджеттің '+p+'%-ы жұмсалды.';},over:function(n,p){return '«'+n+'»: бюджеттен асты ('+p+'%).';},tr:'Кіріс пен шығыс динамикасы',trM:'Айлар бойынша',trY:'Жылдар бойынша',rep:'Әр ай қайталау (таңдалған күні)',rules:'Тұрақты жазбалар',ruleD:function(d){return 'Әр айдың '+d+'-күні';},bk:'Сақтық көшірме',exJ:'Көшірмені экспорттау',exC:'Кестеге экспорттау (CSV)',imp:'Көшірмені импорттау',bBox:'Көшірме мәтіні',bkHint:'Көшірмеде осы тіркелгінің барлық жазбалары болады. Импорт кезінде тек жаңа жазбалар қосылады, бар жазбалар үстінен жазылмайды және қайталанбайды. CSV файлын Excel ашады, бірақ оны импорттау мүмкін емес.',bSaved:'Экспортталды.',bBad:'Бұл жарамды сақтық көшірме файлы емес.',bNone:'Экспорттайтын жазба әлі жоқ.',bCopy:'Мұнда тікелей жүктеу қолжетімсіз. Төмендегі мәтінді көшіріп, файл ретінде сақтаңыз (көшірме үшін .json, кесте үшін .csv).',bDone:function(a,s){return a+' жазба импортталды'+(s?', '+s+' қайталанған немесе жарамсыз жазба өткізілді':'')+'.';},csvH:['Күні','Түрі','Санат','Сома','Ескертпе'],login:'Кіру',register:'Тіркелу',user:'Пайдаланушы аты',pass:'Құпиясөз',pass2:'Құпиясөзді қайталаңыз',logout:'Шығу',noteAuth:'Тіркелгілер тек осы құрылғының браузерінде сақталады және әр адамның жазбаларын бөлек ұстайды. Ұмытылған құпиясөзді қалпына келтіру мүмкін емес.',eUser:'Пайдаланушы аты 2–20 таңбадан тұруы керек.',ePass:'Құпиясөз кемінде 6 таңба болуы керек.',eMatch:'Құпиясөздер сәйкес келмейді.',eExists:'Бұл ат бос емес.',eBad:'Пайдаланушы аты немесе құпиясөз қате.',eNoCrypto:'Браузер шифрлауды қолдамайды, кіру мүмкін емес.',title:'TMC Ledger',lang:'Тіл',prev:'Алдыңғы ай',next:'Келесі ай',bal:'Айлық қалдық',balPos:'Кіріс минус шығыс',balNeg:'Бұл айда табыстан көп жұмсалды',inc:'Кіріс',exp:'Шығыс',bars:'Ақша қайда кетті',add:'Жазба қосу',type:'Түрі',amt:'Сома',cat:'Санат',date:'Күні',memo:'Ескертпе (міндетті емес)',ph:'мысалы, түскі ас',save:'Жазбаны сақтау',list:'Айлық жазбалар',foot:'Деректер тек осы құрылғының браузерінде сақталады. Браузер деректерін тазаласаңыз, жазбалар жоғалады.',eAmt:'0-ден үлкен сома енгізіңіз.',eDate:'Күнді таңдаңыз.',none:'Бұл айда жазба әлі жоқ. Алғашқысын қосыңыз.',noExp:'Шығыс жазбалары әлі жоқ.',noList:'Бұл айда жазба жоқ.',day:'Күн қорытындысы',del:'Жазбаны жою',conf:'Бұл жазбаны жою керек пе?',
sum:function(m,i,e,b,p){return m+': кіріс '+i+', шығыс '+e+', '+(p?'қалдық ':'артық шығын ')+b+'.';},top:function(n,p){return 'Ең көп «'+n+'» бойынша жұмсалды — шығыстың '+p+'%-ы.';},avg:function(v){return 'Күніне орта есеппен: '+v+'.';},ratio:function(r){return 'Шығыс кірістің '+r+'%-ын құрайды.';},
c:{food:'Тамақ',transport:'Көлік',shop:'Сатып алу',home:'Тұрғын үй',fun:'Көңіл көтеру',health:'Денсаулық',other:'Басқа',salary:'Жалақы',bonus:'Сыйақы',side:'Қосымша табыс'}}
};
var LOC={zh:'zh-CN',en:'en-US',ru:'ru-RU',kk:'kk-KZ'}, HTMLLANG={zh:'zh-CN',en:'en',ru:'ru',kk:'kk'};
var CATS={out:['food','transport','shop','home','fun','health','other'],in:['salary','bonus','side','other']};
var LEGACY={'餐饮':'food','交通':'transport','购物':'shop','住房':'home','娱乐':'fun','医疗':'health','其他':'other','工资':'salary','奖金':'bonus','兼职':'side'};
var lang='en';
try{lang=localStorage.getItem(LKEY);}catch(e){}
if(!I[lang]){var nl=(navigator.language||'en').slice(0,2).toLowerCase();lang=I[nl]?nl:'en';}
function T(k){return I[lang][k];}
function catName(c){return I[lang].c[LEGACY[c]||c]||c;}
var user=null, mode='login', records=[];
var budgets={}, rules=[], goal=null, cfg=null, DEF={out:CATS.out.slice(),in:CATS.in.slice()}, C0={};
['zh','en','ru','kk'].forEach(function(L){C0[L]=Object.assign({},I[L].c);});
function defCfg(){return {out:DEF.out.slice(),in:DEF.in.slice(),names:{}};}
function applyNames(){
  CATS.out=cfg.out.slice();CATS.in=cfg.in.slice();
  Object.keys(I).forEach(function(L){I[L].c=Object.assign({},C0[L],cfg.names);});
}
cfg=defCfg();
function load(){
  try{records=JSON.parse(localStorage.getItem(KEY+':'+user))||[];}catch(e){records=[];}
  try{budgets=JSON.parse(localStorage.getItem('ledger-bud:'+user))||{};}catch(e){budgets={};}
  try{rules=JSON.parse(localStorage.getItem('ledger-rules:'+user))||[];}catch(e){rules=[];}
  try{goal=JSON.parse(localStorage.getItem('ledger-goal:'+user))||null;}catch(e){goal=null;}
  try{cfg=JSON.parse(localStorage.getItem('ledger-cats:'+user))||null;}catch(e){cfg=null;}
  if(!cfg||!cfg.out||!cfg.in||!cfg.names)cfg=defCfg();
  applyNames();
}
function save(){if(!user)return;try{localStorage.setItem(KEY+':'+user,JSON.stringify(records));}catch(e){}}
function pad(n){return String(n).padStart(2,'0');}
function ymd(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());}
var sym='';try{sym=localStorage.getItem('ledger-cur')||'';}catch(e){}
function fmt(n){return sym+fmtN(n);}
function fmtN(n){
  var o={minimumFractionDigits:2,maximumFractionDigits:2};
  try{return n.toLocaleString(LOC[lang],o);}catch(e){return n.toFixed(2);}
}
function monthLabel(y,m){
  try{return new Date(y,m-1,1).toLocaleDateString(LOC[lang],{year:'numeric',month:'long'});}
  catch(e){return y+'-'+pad(m);}
}
var $=function(s){return document.querySelector(s);};
var today=new Date(), ym=ymd(today).slice(0,7), type='out';

function fillCats(){
  var s=$('#cat'), prev=s.value;s.innerHTML='';
  CATS[type].forEach(function(k){var o=document.createElement('option');o.value=k;o.textContent=I[lang].c[k];s.appendChild(o);});
  if(prev&&CATS[type].indexOf(prev)>-1)s.value=prev;
}
function setType(t){
  type=t;
  $('#tOut').setAttribute('aria-pressed',t==='out');
  $('#tIn').setAttribute('aria-pressed',t==='in');
  fillCats();
}
function applyLang(){
  document.documentElement.lang=HTMLLANG[lang];
  document.title=T('title');
  document.querySelectorAll('[data-i18n]').forEach(function(e){e.textContent=T(e.getAttribute('data-i18n'));});
  document.querySelectorAll('[data-i18n-aria]').forEach(function(e){e.setAttribute('aria-label',T(e.getAttribute('data-i18n-aria')));});
  document.querySelectorAll('[data-i18n-ph]').forEach(function(e){e.setAttribute('placeholder',T(e.getAttribute('data-i18n-ph')));});
  $('#lang').value=lang;
  $('#err').textContent='';
  fillCats();render();
}
function shift(d){
  var p=ym.split('-').map(Number), x=new Date(p[0],p[1]-1+d,1);
  ym=x.getFullYear()+'-'+pad(x.getMonth()+1);
  render();
}
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}
function render(){
  var p=ym.split('-').map(Number), ml=monthLabel(p[0],p[1]);
  $('#ym').textContent=ml;syncUI();renderTrend();renderRules();renderGoal();calcInt();
  var list=records.filter(function(r){return r.date.slice(0,7)===ym;});
  var inc=0,exp=0,byCat={};
  list.forEach(function(r){
    if(r.type==='in')inc+=r.amount;
    else{var k=LEGACY[r.cat]||r.cat;exp+=r.amount;byCat[k]=(byCat[k]||0)+r.amount;}
  });
  var bal=inc-exp;
  $('#inc').textContent=fmt(inc);
  $('#exp').textContent=fmt(exp);
  var b=$('#bal');b.textContent=(bal<0?'-':'')+fmt(Math.abs(bal));
  b.className='balance'+(bal<0?' neg':'');
  $('#balsub').textContent=bal<0?T('balNeg'):T('balPos');

  var note;
  if(!list.length){note=T('none');}
  else{
    var isNow=ym===ymd(today).slice(0,7);
    var days=isNow?today.getDate():new Date(p[0],p[1],0).getDate();
    var keys=Object.keys(byCat).sort(function(a,b){return byCat[b]-byCat[a];}), top=keys[0];
    note=T('sum')(ml,fmt(inc),fmt(exp),fmt(Math.abs(bal)),bal>=0);
    if(top)note+=' '+T('top')(I[lang].c[top]||top,Math.round(byCat[top]/exp*100));
    if(exp>0)note+=' '+T('avg')(fmt(exp/days));
    if(inc>0&&exp>0)note+=' '+T('ratio')(Math.round(exp/inc*100));
  }
  $('#note').textContent=note;

  var bars=$('#bars');bars.innerHTML='';
  var w=$('#warns');w.innerHTML='';
  Object.keys(byCat).forEach(function(k){var b=parseFloat(budgets[k]);if(!(b>0))return;var pc=Math.round(byCat[k]/b*100);if(pc>=100)w.appendChild(el('p','warn',T('over')(I[lang].c[k]||k,pc)));else if(pc>=80)w.appendChild(el('p','warn soft',T('near')(I[lang].c[k]||k,pc)));});
  var ks=Object.keys(byCat).sort(function(a,b){return byCat[b]-byCat[a];});
  drawPie(byCat,exp,ks);
  if(!ks.length)bars.appendChild(el('p','empty',T('noExp')));
  ks.forEach(function(k){
    var r=el('div','bar');
    var t=el('div','track'), f=el('div','fill');f.style.width=Math.max(2,byCat[k]/exp*100)+'%';t.appendChild(f);
    r.appendChild(el('span',null,I[lang].c[k]||k));r.appendChild(t);r.appendChild(el('span','v',fmt(byCat[k])));
    bars.appendChild(r);
  });

  var box=$('#list');box.innerHTML='';
  var qv=$('#q').value.trim().toLowerCase(), fc=$('#fcat').value;
  list=list.filter(function(r){var k=LEGACY[r.cat]||r.cat;return (!fc||k===fc)&&(!qv||(r.memo||'').toLowerCase().indexOf(qv)>-1||(I[lang].c[k]||k).toLowerCase().indexOf(qv)>-1);});
  var nsel={};list.forEach(function(r){if(sel[r.id])nsel[r.id]=1;});sel=nsel;vis=list.map(function(r){return r.id;});$('#selbar').hidden=!list.length;updSel();
  if(!list.length){box.appendChild(el('p','empty',T('noList')));return;}
  list.sort(function(a,b){return a.date<b.date?1:a.date>b.date?-1:b.id-a.id;});
  var cur='';
  list.forEach(function(r){
    if(r.date!==cur){
      cur=r.date;
      var ds=0;list.forEach(function(x){if(x.date===cur)ds+=(x.type==='in'?x.amount:-x.amount);});
      var h=el('div','day');
      h.appendChild(el('span',null,cur));
      h.appendChild(el('span',null,T('day')+' '+(ds<0?'-':'+')+fmt(Math.abs(ds))));
      box.appendChild(h);
    }
    var row=el('div','row'), l=el('div',null,catName(r.cat));
    if(r.memo)l.appendChild(el('small',null,r.memo));
    var m=el('b',r.type==='in'?'in':'out',(r.type==='in'?'+':'-')+fmt(r.amount));
    var d=el('button','del','×');d.setAttribute('aria-label',T('del'));
    d.onclick=function(){
      ask(T('conf'),function(){if(r.rid){rules.forEach(function(z){if(z.id===r.rid)(z.skip=z.skip||[]).push(r.rm);});saveR();}records=records.filter(function(x){return x.id!==r.id;});save();render();});
    };
    var ed=el('button','del','✎');ed.setAttribute('aria-label',T('ed'));ed.onclick=function(){startEdit(r);};
    var cb=document.createElement('input');cb.type='checkbox';cb.checked=!!sel[r.id];cb.setAttribute('aria-label',T('sel'));cb.onchange=function(){if(cb.checked)sel[r.id]=1;else delete sel[r.id];updSel();};
    row.appendChild(cb);row.appendChild(l);row.appendChild(m);row.appendChild(ed);row.appendChild(d);box.appendChild(row);
  });
}
$('#lang').onchange=function(){
  lang=this.value;
  try{localStorage.setItem(LKEY,lang);}catch(e){}
  applyLang();
};
$('#prev').onclick=function(){shift(-1);};
$('#next').onclick=function(){shift(1);};
$('#tOut').onclick=function(){setType('out');};
$('#tIn').onclick=function(){setType('in');};
$('#add').onclick=function(){
  var amt=parseFloat($('#amt').value), date=$('#date').value, err=$('#err');
  if(!(amt>0)){err.textContent=T('eAmt');return;}
  if(!date){err.textContent=T('eDate');return;}
  err.textContent='';
  var rec={id:Date.now(),type:type,amount:Math.round(amt*100)/100,cat:$('#cat').value,date:date,memo:$('#memo').value.trim()};
  if(editId){records.forEach(function(x){if(x.id===editId){x.type=rec.type;x.amount=rec.amount;x.cat=rec.cat;x.date=rec.date;x.memo=rec.memo;}});endEdit();}
  else if($('#rep').checked){rules.push({id:rec.id,type:rec.type,amount:rec.amount,cat:rec.cat,memo:rec.memo,day:parseInt(date.slice(8),10),start:date.slice(0,7),skip:[]});saveR();genRec();$('#rep').checked=false;}
  else records.push(rec);
  sfx(rec.type);
  save();
  $('#amt').value='';$('#memo').value='';
  ym=date.slice(0,7);
  render();
};
$('#date').value=ymd(today);

function accs(){try{return JSON.parse(localStorage.getItem('ledger-accounts'))||{};}catch(e){return {};}}
function hex(b){return Array.from(new Uint8Array(b)).map(function(x){return pad(x.toString(16));}).join('');}
function pad2(x){return x;}
async function derive(pw,saltHex){
  var salt=new Uint8Array(saltHex.match(/../g).map(function(h){return parseInt(h,16);}));
  var k=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveBits']);
  return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:salt,iterations:150000,hash:'SHA-256'},k,256));
}
function setMode(m){
  mode=m;
  $('#tLogin').setAttribute('aria-pressed',m==='login');
  $('#tReg').setAttribute('aria-pressed',m==='register');
  $('#pw2l').hidden=m==='login';
  $('#pw').setAttribute('autocomplete',m==='login'?'current-password':'new-password');
  var g=$('#go');g.setAttribute('data-i18n',m);g.textContent=T(m);
  $('#aerr').textContent='';
}
function enter(u){
  user=u;try{localStorage.setItem('ledger-session',u);}catch(e){}
  load();genRec();$('#auth').hidden=true;$('#app').hidden=false;$('#uname').textContent=u;render();
}
function leave(){
  user=null;records=[];budgets={};rules=[];goal=null;cfg=defCfg();applyNames();bk2='';endEdit();try{localStorage.removeItem('ledger-session');}catch(e){}
  $('#app').hidden=true;$('#auth').hidden=false;$('#un').value='';
  $('#bbox').value='';$('#bbox').hidden=true;$('#bmsg').textContent='';
}
async function submitAuth(){
  var err=$('#aerr'), name=$('#un').value.trim().toLowerCase(), pw=$('#pw').value;
  if(!(window.crypto&&crypto.subtle)){err.textContent=T('eNoCrypto');return;}
  var a=accs(), key='u:'+name;
  if(mode==='register'){
    if(name.length<2||name.length>20){err.textContent=T('eUser');return;}
    if(pw.length<6){err.textContent=T('ePass');return;}
    if(pw!==$('#pw2').value){err.textContent=T('eMatch');return;}
    if(a[key]){err.textContent=T('eExists');return;}
    var first=!Object.keys(a).length;
    var s=hex(crypto.getRandomValues(new Uint8Array(16)));
    a[key]={salt:s,hash:await derive(pw,s)};
    try{localStorage.setItem('ledger-accounts',JSON.stringify(a));}catch(e){}
    if(first){try{var old=localStorage.getItem(KEY);if(old){localStorage.setItem(KEY+':'+name,old);localStorage.removeItem(KEY);}}catch(e){}}
  }else{
    var acc=a[key];
    if(!acc||(await derive(pw,acc.salt))!==acc.hash){err.textContent=T('eBad');return;}
  }
  err.textContent='';$('#pw').value='';$('#pw2').value='';
  enter(name);
}
$('#tLogin').onclick=function(){setMode('login');};
$('#tReg').onclick=function(){setMode('register');};
$('#go').onclick=submitAuth;

var editId=null, tmode='m', bk2='';
function saveB(){try{localStorage.setItem('ledger-bud:'+user,JSON.stringify(budgets));}catch(e){}}
function saveR(){try{localStorage.setItem('ledger-rules:'+user,JSON.stringify(rules));}catch(e){}}
function genRec(){
  var now=ymd(new Date()), cm=now.slice(0,7), changed=false;
  rules.forEach(function(ru){
    var p=ru.start.split('-').map(Number), y=p[0], m=p[1];
    while((y+'-'+pad(m))<=cm){
      var k=y+'-'+pad(m), d=Math.min(ru.day,new Date(y,m,0).getDate()), date=k+'-'+pad(d);
      if(date<=now&&(ru.skip||[]).indexOf(k)<0&&!records.some(function(r){return r.rid===ru.id&&r.rm===k;})){
        records.push({id:Date.now()+Math.floor(Math.random()*1000000),type:ru.type,amount:ru.amount,cat:ru.cat,date:date,memo:ru.memo,rid:ru.id,rm:k});changed=true;
      }
      m++;if(m>12){m=1;y++;}
    }
  });
  if(changed)save();
}
function syncUI(){
  var key=lang+'|'+user;
  if(bk2===key)return;
  bk2=key;
  var g=$('#budgrid');g.innerHTML='';
  CATS.out.forEach(function(c){
    var l=el('label');l.appendChild(el('span',null,I[lang].c[c]));
    var i=document.createElement('input');i.type='number';i.min='0';i.step='1';i.value=budgets[c]||'';
    i.onchange=function(){var v=parseFloat(i.value);if(v>0)budgets[c]=v;else delete budgets[c];saveB();render();};
    l.appendChild(i);g.appendChild(l);
  });
  var s=$('#fcat'), pv=s.value;s.innerHTML='';
  var o0=el('option',null,T('all'));o0.value='';s.appendChild(o0);
  CATS.out.concat(CATS.in.filter(function(c){return CATS.out.indexOf(c)<0;})).forEach(function(c){var o=el('option',null,I[lang].c[c]);o.value=c;s.appendChild(o);});
  s.value=pv;
  var cs=$('#cur');cs.innerHTML='';
  ['','₸','¥','$','€','₽','£'].forEach(function(c){var o=el('option',null,c||'—');o.value=c;cs.appendChild(o);});
  cs.value=sym;
  renderCats();fillCats();renderSw();
}
function renderTrend(){
  var box=$('#trend');box.innerHTML='';
  var agg={};
  records.forEach(function(r){var k=tmode==='m'?r.date.slice(0,7):r.date.slice(0,4);var a=agg[k]||(agg[k]={i:0,e:0});if(r.type==='in')a.i+=r.amount;else a.e+=r.amount;});
  var keys=[];
  if(tmode==='m'){var p=ym.split('-').map(Number);for(var n=11;n>=0;n--){var x=new Date(p[0],p[1]-1-n,1);keys.push(x.getFullYear()+'-'+pad(x.getMonth()+1));}}
  else{keys=Object.keys(agg).sort();if(!keys.length)keys=[String(today.getFullYear())];}
  var mx=0;keys.forEach(function(k){var a=agg[k];if(a)mx=Math.max(mx,a.i,a.e);});
  keys.forEach(function(k){
    var a=agg[k]||{i:0,e:0}, c=el('div','tc'), b=el('div','tb');
    [['a',a.i],['b',a.e]].forEach(function(t){var s=el('i',t[0]);s.style.height=(mx?Math.max(1,t[1]/mx*100):1)+'px';s.title=(t[0]==='a'?T('inc'):T('exp'))+' '+fmt(t[1]);b.appendChild(s);});
    c.title=k;c.appendChild(b);c.appendChild(el('span',null,tmode==='m'?String(parseInt(k.slice(5),10)):k));box.appendChild(c);
  });
}
function setTm(m){tmode=m;$('#trM').setAttribute('aria-pressed',m==='m');$('#trY').setAttribute('aria-pressed',m==='y');renderTrend();}
function renderRules(){
  var b=$('#rules');b.innerHTML='';
  $('#rulesBox').hidden=!rules.length;
  rules.forEach(function(ru){
    var d=el('div','rl');
    d.appendChild(el('span',null,T('ruleD')(ru.day)+' · '+catName(ru.cat)+' · '+(ru.type==='in'?'+':'-')+fmt(ru.amount)+(ru.memo?' · '+ru.memo:'')));
    var x=el('button',null,'×');x.setAttribute('aria-label',T('del'));
    x.onclick=function(){rules=rules.filter(function(z){return z.id!==ru.id;});saveR();render();};
    d.appendChild(x);b.appendChild(d);
  });
}
function startEdit(r){
  editId=r.id;setType(r.type);
  $('#cat').value=LEGACY[r.cat]||r.cat;$('#amt').value=r.amount;$('#date').value=r.date;$('#memo').value=r.memo||'';
  var g=$('#add');g.setAttribute('data-i18n','upd');g.textContent=T('upd');
  $('#cxl').hidden=false;$('#rep').checked=false;$('#rep').disabled=true;
  $('#amt').scrollIntoView({behavior:'smooth',block:'center'});$('#amt').focus();
}
function endEdit(){
  editId=null;
  var g=$('#add');g.setAttribute('data-i18n','save');g.textContent=T('save');
  $('#cxl').hidden=true;$('#rep').disabled=false;$('#amt').value='';$('#memo').value='';
}
$('#cur').onchange=function(){sym=this.value;try{localStorage.setItem('ledger-cur',sym);}catch(e){}render();};
$('#q').oninput=function(){render();};
$('#fcat').onchange=function(){render();};
$('#cxl').onclick=endEdit;
function closeDlg(){$('#dlg').hidden=true;}
var MSG={
zh:'今天怎么样？|天天开心！|欢迎回来！|你今天真棒！|记账的你超有毅力！|愿你今天一切顺利。|笑一笑，好运自然来。|每一笔都是向目标靠近的一步。|保持好心情哦！|你已经做得很好了。|今天也要元气满满！|辛苦了，休息一下吧。|好习惯需要坚持，你正在做！|祝你财源滚滚！|愿你的钱包越来越鼓。|你的努力，一定会有回报。|深呼吸，今天会是美好的一天。|记得喝杯水哦。|小目标，大收获！|今天也是闪闪发光的一天。|感谢你认真对待每一笔账。|有计划的生活真酷！|你比昨天更会理财了。|好运正在路上！|记得给自己一点奖励。|慢慢来，一切都会好的。|愿你今天遇到好事。|你的坚持让人佩服！|今天适合做点开心的事。|理财高手就是你！|愿你笑口常开。|每一天都是新的开始。|吃好睡好，万事顺利。|加油，你正在变得更好！|今天有什么好消息吗？|保持节奏，稳稳前进。|你值得拥有美好的生活。|点一点，好心情就来了！|你真是个细心的人。|愿你的每一天都很甜。|存钱的你很有魅力！|今天的你，状态不错！|别忘了伸个懒腰哦。|好好生活，慢慢变富。|祝你心想事成！|有你在，账本都变可爱了。|一切都在变好，相信我。|今天也请多多关照自己。|你的未来一定很精彩。|谢谢你来记账，真好！|平安喜乐，万事胜意。|再点一次，还有更多好话哦！'.split('|'),
en:'How’s your day going?|Be happy every day!|Welcome back!|You’re doing great today!|Tracking every entry takes real discipline.|Wishing you a smooth day.|Smile, and good luck will follow.|Every entry is a step toward your goal.|Keep that good mood going!|You’ve already done well.|Have an energetic day!|Take a break, you’ve earned it.|Good habits take time, and you’re building one!|May your wallet keep growing.|Your effort will pay off.|Take a deep breath. It’s going to be a good day.|Remember to drink some water.|Small goals, big results!|Today is a shining day.|Thanks for caring about every entry.|A planned life looks good on you!|You’re better with money than yesterday.|Good luck is on its way!|Treat yourself a little.|Take it slow, it will all work out.|Hope something good happens to you today.|Your persistence is admirable!|Today is a good day to do something fun.|You’re a money-management pro!|May you laugh often.|Every day is a fresh start.|Eat well, sleep well, and all will go well.|Keep going, you’re getting better!|Any good news today?|Keep your rhythm and move steadily.|You deserve a good life.|One tap and the good mood arrives!|You’re such a careful person.|May every day be sweet.|Saving money looks great on you!|You’re in good form today!|Don’t forget to stretch.|Live well and grow richer slowly.|Wishing you all the best!|With you here, even the ledger feels friendly.|Things are getting better, trust me.|Please take good care of yourself today.|Your future is going to be wonderful.|Thanks for keeping your books, that’s great!|Peace and joy to you.|Tap again, there are more kind words!|Stay curious about where your money goes.'.split('|'),
ru:'Как дела сегодня?|Счастья каждый день!|С возвращением!|У тебя сегодня всё получится!|Вести учёт каждый день — это сила воли.|Желаю лёгкого дня.|Улыбнись — и удача придёт.|Каждая запись — шаг к цели.|Хорошего настроения!|Ты уже отлично справляешься.|Бодрого дня!|Отдохни немного, это заслуженно.|Хорошие привычки требуют времени, и ты их растишь!|Пусть кошелёк становится толще.|Твои усилия окупятся.|Вдохни глубоко — день будет хорошим.|Не забудь выпить воды.|Маленькие цели — большие результаты!|Сегодня сияющий день.|Спасибо, что внимательно ведёшь учёт.|Жизнь по плану — это круто!|С деньгами у тебя получается лучше, чем вчера.|Удача уже в пути!|Побалуй себя немного.|Не спеши, всё получится.|Пусть сегодня случится что-то хорошее.|Твоей настойчивости можно позавидовать!|Сегодня хороший день для чего-то приятного.|Финансы — это твоя сильная сторона!|Пусть улыбка не сходит с лица.|Каждый день — новое начало.|Ешь вкусно, спи крепко — всё будет хорошо.|Так держать, ты становишься лучше!|Есть хорошие новости?|Держи темп и иди вперёд уверенно.|Тебе положена хорошая жизнь.|Одно нажатие — и настроение лучше!|Какая внимательность к мелочам!|Пусть каждый день будет сладким.|Тебе идёт копить деньги!|Сегодня ты в отличной форме!|Не забудь потянуться.|Живи хорошо и богатей понемногу.|Желаю всего самого лучшего!|С тобой даже учётная книга выглядит дружелюбно.|Всё налаживается, поверь.|Позаботься о себе сегодня.|Твоё будущее будет прекрасным.|Спасибо, что ведёшь записи, это здорово!|Мира и радости тебе.|Нажми ещё раз — есть и другие добрые слова!|Будь любопытен: куда уходят твои деньги?'.split('|'),
kk:'Бүгін күніңіз қалай?|Күнде қуанышты болыңыз!|Қош келдіңіз!|Бүгін өте жақсысыз!|Күн сайын есеп жүргізу — үлкен табандылық.|Бүгін бәрі сәтті өтсін.|Күліңіз, сәттілік өзі келеді.|Әр жазба — мақсатқа бір қадам.|Көңіл-күйіңіз әрқашан жақсы болсын!|Сіз қазірдің өзінде жақсы істеп жатырсыз.|Бүгін қуатты күн болсын!|Сәл демалыңыз, лайықсыз.|Жақсы әдет уақыт алады, сіз оны қалыптастырып жатырсыз!|Әмияныңыз толыға берсін.|Еңбегіңіз міндетті түрде жемісін береді.|Терең дем алыңыз, бүгін жақсы күн болады.|Су ішуді ұмытпаңыз.|Шағын мақсат — үлкен нәтиже!|Бүгін жарқын күн.|Әр жазбаға мұқият болғаныңызға рахмет.|Жоспармен өмір сүру — керемет!|Ақшаны кешегіден жақсы басқарасыз.|Сәттілік жолда келе жатыр!|Өзіңізді аздап қуантыңыз.|Асықпаңыз, бәрі жақсы болады.|Бүгін сізге бір жақсылық кездессін.|Табандылығыңызға тәнтімін!|Бүгін көңілді іспен айналысуға жақсы күн.|Қаржы — сіздің мықты жағыңыз!|Әрдайым күлімдеп жүріңіз.|Әр күн — жаңа бастама.|Жақсы ішіп-жеп, жақсы ұйықтаңыз.|Алға, сіз күннен-күнге жақсарып барасыз!|Бүгін жақсы жаңалық бар ма?|Қарқыныңызды сақтаңыз, сенімді алға жылжыңыз.|Сіз жақсы өмірге лайықсыз.|Бір басыңыз — көңіл-күй көтеріледі!|Сіз өте ұқыпты адамсыз.|Күндеріңіз тәтті болсын.|Ақша жинағаныңыз өзіңізге жарасады!|Бүгін көңіл-күйіңіз өте жақсы!|Керіліп алуды ұмытпаңыз.|Жақсы өмір сүріңіз, байи беріңіз.|Бар тілегім — тек жақсылық!|Сізбен бірге есеп дәптері де жылы көрінеді.|Бәрі жақсарып келеді, сеніңіз.|Бүгін өзіңізге жақсы қарап жүріңіз.|Болашағыңыз тамаша болады.|Есеп жүргізгеніңізге рахмет, бұл керемет!|Бейбітшілік пен қуаныш тілеймін.|Тағы басыңыз — жылы сөз әлі көп!|Ақшаңыздың қайда кетіп жатқанына қызықушылық танытыңыз.'.split('|')
};
var lastMsg=-1;
var DEV={phone:[480,1],pad:[640,1.25],pc:[960,1.1]}, dev=null;
try{dev=localStorage.getItem('ledger-dev');}catch(e){}
if(!DEV[dev])dev=window.innerWidth<600?'phone':window.innerWidth<1024?'pad':'pc';
function applyDev(){
  var m=document.querySelector('main');m.style.maxWidth=DEV[dev][0]+'px';m.style.zoom=DEV[dev][1];
  document.querySelectorAll('[data-dev]').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-dev')===dev);});
}
document.querySelectorAll('[data-dev]').forEach(function(b){b.onclick=function(){dev=b.getAttribute('data-dev');try{localStorage.setItem('ledger-dev',dev);}catch(e){}applyDev();};});
applyDev();
$('#hi').onclick=function(){
  var a=MSG[lang]||MSG.en, i;
  do{i=Math.floor(Math.random()*a.length);}while(i===lastMsg&&a.length>1);
  lastMsg=i;$('#hmsg').textContent=a[i];
};
var AC=null, sndOn=true;
try{sndOn=localStorage.getItem('ledger-snd')!=='0';}catch(e){}
$('#snd').checked=sndOn;
$('#snd').onchange=function(){sndOn=this.checked;try{localStorage.setItem('ledger-snd',sndOn?'1':'0');}catch(e){}};
function tone(f,t0,d,type,v){
  var o=AC.createOscillator(), g=AC.createGain();
  o.type=type;o.frequency.value=f;
  g.gain.setValueAtTime(0.0001,t0);g.gain.exponentialRampToValueAtTime(v,t0+0.01);g.gain.exponentialRampToValueAtTime(0.0001,t0+d);
  o.connect(g);g.connect(AC.destination);o.start(t0);o.stop(t0+d+0.02);
}
function sfx(kind){
  if(!sndOn)return;
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    if(AC.state==='suspended')AC.resume();
    var t=AC.currentTime;
    if(kind==='in'){tone(988,t,0.12,'sine',0.25);tone(1319,t+0.09,0.24,'sine',0.25);tone(1976,t+0.09,0.24,'sine',0.07);}
    else tone(440,t,0.3,'square',0.08);
  }catch(e){}
}


var TH={mode:'auto',ac:'',in:'',out:''};
try{TH=Object.assign(TH,JSON.parse(localStorage.getItem('ledger-theme'))||{});}catch(e){}
var PRE=[['','',''],['#1F6FEB','#0E9F8E','#E5484D'],['#2F7D4F','#2F9E5B','#C2542D'],['#D9692A','#3A9B6E','#C93A52'],['#7A4FD6','#2D9C8A','#D1457A']];
function lum(h){return (0.299*parseInt(h.slice(1,3),16)+0.587*parseInt(h.slice(3,5),16)+0.114*parseInt(h.slice(5,7),16))/255;}
function saveTh(){try{localStorage.setItem('ledger-theme',JSON.stringify(TH));}catch(e){}}
function applyTheme(){
  var rs=document.documentElement;
  if(TH.mode==='auto')rs.removeAttribute('data-theme');else rs.setAttribute('data-theme',TH.mode);
  [['--ac',TH.ac],['--in',TH.in],['--out',TH.out]].forEach(function(p){if(p[1])rs.style.setProperty(p[0],p[1]);else rs.style.removeProperty(p[0]);});
  if(TH.ac)rs.style.setProperty('--acx',lum(TH.ac)>0.6?'#18262A':'#ffffff');else rs.style.removeProperty('--acx');
  document.querySelectorAll('[data-tm]').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-tm')===TH.mode);});
  $('#cAc').value=TH.ac||'#18262A';$('#cIn').value=TH.in||'#17714f';$('#cOut').value=TH.out||'#b4432a';
}
function renderSw(){
  var b=$('#sw');b.innerHTML='';
  PRE.forEach(function(p,i){
    var c=p[0]?p:['#18262A','#17714F','#B4432A'], x=el('button');x.type='button';
    x.style.background='linear-gradient(90deg,'+c[0]+' 33%,'+c[1]+' 33% 66%,'+c[2]+' 66%)';
    x.setAttribute('aria-label',T('thPre')+' '+(i+1));
    x.onclick=function(){TH.ac=p[0];TH.in=p[1];TH.out=p[2];saveTh();applyTheme();};
    b.appendChild(x);
  });
}
document.querySelectorAll('[data-tm]').forEach(function(b){b.onclick=function(){TH.mode=b.getAttribute('data-tm');saveTh();applyTheme();};});
$('#cAc').oninput=function(){TH.ac=this.value;saveTh();applyTheme();};
$('#cIn').oninput=function(){TH.in=this.value;saveTh();applyTheme();};
$('#cOut').oninput=function(){TH.out=this.value;saveTh();applyTheme();};
$('#thReset').onclick=function(){TH={mode:'auto',ac:'',in:'',out:''};saveTh();applyTheme();};
applyTheme();
function calcInt(){
  var P=parseFloat($('#iP').value), r=parseFloat($('#iR').value)/100, n=parseFloat($('#iN').value), o=$('#iOut');
  o.innerHTML='';
  if(!(P>=0)||!(r>=0)||!(n>=0))return;
  var rm=$('#iRp').value==='y'?12:1, dm=$('#iU').value==='y'?n*12:n, per=dm/rm;
  var comp=$('#iCc').getAttribute('aria-pressed')==='true';
  var it=comp?P*(Math.pow(1+r,per)-1):P*r*per;
  var eq=comp?(Math.pow(1+r,12/rm)-1):r*12/rm;
  [[T('iInt'),fmt(it)],[T('iTot'),fmt(P+it)],[T('iEq'),(Math.round(eq*10000)/100)+'%']].forEach(function(x){var d=el('div','rl');d.appendChild(el('span',null,x[0]));d.appendChild(el('b',null,x[1]));o.appendChild(d);});
}
['#iP','#iR','#iN'].forEach(function(s){$(s).oninput=calcInt;});
['#iRp','#iU'].forEach(function(s){$(s).onchange=calcInt;});
$('#iCs').onclick=function(){$('#iCs').setAttribute('aria-pressed','true');$('#iCc').setAttribute('aria-pressed','false');calcInt();};
$('#iCc').onclick=function(){$('#iCc').setAttribute('aria-pressed','true');$('#iCs').setAttribute('aria-pressed','false');calcInt();};
function saveC(){try{localStorage.setItem('ledger-cats:'+user,JSON.stringify(cfg));}catch(e){}}
function saveG(){try{if(goal)localStorage.setItem('ledger-goal:'+user,JSON.stringify(goal));else localStorage.removeItem('ledger-goal:'+user);}catch(e){}}
var PAL=['#2E8B6E','#C2542D','#D9A21B','#4A78B5','#8E5BA8','#C9577F','#5E9D3A','#6B7C85','#B5651D','#3A9BA8'];
function drawPie(byCat,total,ks){
  var box=$('#pie');box.innerHTML='';
  if(!ks.length)return;
  var NS='http://www.w3.org/2000/svg', svg=document.createElementNS(NS,'svg'), a0=0;
  svg.setAttribute('viewBox','-1 -1 2 2');svg.setAttribute('width','160');svg.setAttribute('height','160');svg.setAttribute('role','img');
  ks.forEach(function(k,i){
    var f=byCat[k]/total, node;
    if(f>=0.9999){node=document.createElementNS(NS,'circle');node.setAttribute('r','1');}
    else{
      var a1=a0+f*2*Math.PI;
      node=document.createElementNS(NS,'path');
      node.setAttribute('d','M0 0 L'+Math.sin(a0)+' '+(-Math.cos(a0))+' A1 1 0 '+(f>0.5?1:0)+' 1 '+Math.sin(a1)+' '+(-Math.cos(a1))+' Z');
      a0=a1;
    }
    node.setAttribute('fill',PAL[i%PAL.length]);node.style.stroke='var(--surface)';node.setAttribute('stroke-width','0.02');
    svg.appendChild(node);
  });
  var h=document.createElementNS(NS,'circle');h.setAttribute('r','0.55');h.style.fill='var(--surface)';svg.appendChild(h);
  var wrap=el('div','pw'), lg=el('div','lg');
  wrap.appendChild(svg);
  ks.forEach(function(k,i){var r=el('div','li'), s=el('i');s.style.background=PAL[i%PAL.length];r.appendChild(s);r.appendChild(el('span',null,(I[lang].c[k]||k)+' '+Math.round(byCat[k]/total*100)+'%'));lg.appendChild(r);});
  wrap.appendChild(lg);box.appendChild(wrap);
}
function renderGoal(){
  $('#goalNew').hidden=!!goal;$('#goalView').hidden=!goal;
  if(!goal)return;
  var p=goal.target>0?Math.round(goal.saved/goal.target*100):0;
  $('#gtitle').textContent=goal.name;
  $('#gfill').style.width=Math.max(0,Math.min(100,p))+'%';
  $('#gprog').textContent=T('gProg')(fmt(goal.saved),fmt(goal.target),p);
  $('#gdone').textContent=p>=100?T('gDone'):'';
}
$('#gset').onclick=function(){var t=parseFloat($('#gt').value), n=$('#gn').value.trim();if(!(t>0)||!n)return;goal={name:n,target:t,saved:0};saveG();$('#gn').value='';$('#gt').value='';renderGoal();};
$('#gadd').onclick=function(){var v=parseFloat($('#gdep').value);if(!goal||!isFinite(v)||!v)return;goal.saved=Math.max(0,Math.round((goal.saved+v)*100)/100);saveG();$('#gdep').value='';renderGoal();};
$('#gdel').onclick=function(){ask(T('gDelQ'),function(){goal=null;saveG();renderGoal();});};
function renderCats(){
  var box=$('#catbox');box.innerHTML='';
  ['out','in'].forEach(function(t){
    box.appendChild(el('p','sub',T(t==='out'?'exp':'inc')));
    CATS[t].forEach(function(id){
      var r=el('div','cr'), i=document.createElement('input');
      i.value=I[lang].c[id]||id;i.maxLength=20;
      i.onchange=function(){var v=i.value.trim();if(v){cfg.names[id]=v;saveC();applyNames();bk2='';render();}};
      var x=el('button',null,'×');x.setAttribute('aria-label',T('del'));
      x.onclick=function(){if(CATS[t].length<2)return;ask(T('cDel'),function(){cfg[t]=cfg[t].filter(function(z){return z!==id;});saveC();applyNames();bk2='';render();});};
      r.appendChild(i);r.appendChild(x);box.appendChild(r);
    });
    var a=el('div','cr'), n=document.createElement('input');
    n.maxLength=20;n.setAttribute('placeholder',T('cNew'));
    var b=el('button',null,T('cAdd'));
    b.onclick=function(){var v=n.value.trim();if(!v)return;var id='x'+Date.now();cfg.names[id]=v;cfg[t].push(id);saveC();applyNames();bk2='';render();};
    a.appendChild(n);a.appendChild(b);box.appendChild(a);
  });
}
document.querySelectorAll('[data-go]').forEach(function(b){b.onclick=function(){var t=document.getElementById(b.getAttribute('data-go')), s=t&&(t.closest('section')||t);if(s)s.scrollIntoView({behavior:'smooth',block:'start'});};});
var sel={}, vis=[];
function updSel(){
  var n=vis.filter(function(id){return sel[id];}).length, a=$('#selall');
  a.checked=vis.length>0&&n===vis.length;a.indeterminate=n>0&&n<vis.length;
  $('#selN').textContent=n?T('selN')(n):'';$('#delSel').disabled=!n;
}
$('#selall').onchange=function(){var on=this.checked;vis.forEach(function(id){if(on)sel[id]=1;else delete sel[id];});render();};
$('#delSel').onclick=function(){
  var ids=vis.filter(function(id){return sel[id];});if(!ids.length)return;
  ask(T('confN')(ids.length),function(){
    records.forEach(function(r){if(ids.indexOf(r.id)>-1&&r.rid){rules.forEach(function(z){if(z.id===r.rid)(z.skip=z.skip||[]).push(r.rm);});}});
    saveR();
    records=records.filter(function(r){return ids.indexOf(r.id)<0;});sel={};save();render();
  });
};
function ask(msg,cb){
  $('#dmsg').textContent=msg;$('#dlg').hidden=false;
  $('#dyes').onclick=function(){closeDlg();cb();};
  $('#dno').onclick=closeDlg;
  $('#dno').focus();
}
$('#dlg').addEventListener('click',function(e){if(e.target===this)closeDlg();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeDlg();});
$('#trM').onclick=function(){setTm('m');};
$('#trY').onclick=function(){setTm('y');};

var dl=null;
try{if(window.claude&&claude.use)claude.use('downloads').then(function(d){dl=d;}).catch(function(){});}catch(e){}
function bmsg(t,k){var m=$('#bmsg');m.textContent=t;m.className='msg '+(k||'');}
function stamp(){return ymd(new Date());}
async function offer(name,text){
  $('#bbox').hidden=true;
  if(dl){
    try{await dl.save({filename:name,data:text});bmsg(T('bSaved'),'in');return;}
    catch(e){if(e&&e.code==='declined'){bmsg('');return;}}
  }
  $('#bbox').value=text;$('#bbox').hidden=false;bmsg(T('bCopy'));
}
function cell(v){
  v=String(v);var c=v.charAt(0);
  if('=+-@'.indexOf(c)>-1||c===String.fromCharCode(9))v="'"+v;
  var q=v.indexOf('"')>-1||v.indexOf(',')>-1||v.indexOf(String.fromCharCode(10))>-1||v.indexOf(String.fromCharCode(13))>-1;
  return q?'"'+v.split('"').join('""')+'"':v;
}
$('#exJ').onclick=function(){
  if(!records.length){bmsg(T('bNone'),'out');return;}
  offer('ledger-backup-'+stamp()+'.json',JSON.stringify({app:'ledger',version:1,exported:stamp(),records:records},null,1));
};
$('#exC').onclick=function(){
  if(!records.length){bmsg(T('bNone'),'out');return;}
  var rows=[T('csvH')];
  records.slice().sort(function(a,b){return a.date<b.date?-1:a.date>b.date?1:a.id-b.id;}).forEach(function(r){
    rows.push([r.date,r.type==='in'?T('inc'):T('exp'),catName(r.cat),r.amount.toFixed(2),r.memo||'']);
  });
  var nl=String.fromCharCode(13,10);
  offer('ledger-'+stamp()+'.csv',String.fromCharCode(0xFEFF)+rows.map(function(r){return r.map(cell).join(',');}).join(nl));
};
$('#imp').onclick=function(){$('#file').value='';$('#file').click();};
$('#file').onchange=function(){
  var f=this.files&&this.files[0];if(!f)return;
  var rd=new FileReader();
  rd.onload=function(){
    var data;try{data=JSON.parse(rd.result);}catch(e){bmsg(T('bBad'),'out');return;}
    var list=data&&data.app==='ledger'&&Array.isArray(data.records)?data.records:null;
    if(!list){bmsg(T('bBad'),'out');return;}
    var have={};records.forEach(function(r){have[r.id]=1;});
    var added=0,skipped=0;
    list.forEach(function(r){
      var ok=r&&(r.type==='in'||r.type==='out')&&typeof r.amount==='number'&&isFinite(r.amount)&&r.amount>0&&typeof r.date==='string'&&r.date.length===10&&r.date.charAt(4)==='-'&&r.date.charAt(7)==='-'&&!isNaN(new Date(r.date).getTime())&&typeof r.cat==='string'&&typeof r.id==='number'&&!have[r.id];
      if(!ok){skipped++;return;}
      have[r.id]=1;
      var k=LEGACY[r.cat]||r.cat;if(!I.en.c[k])k='other';
      records.push({id:r.id,type:r.type,amount:Math.round(r.amount*100)/100,cat:k,date:r.date,memo:typeof r.memo==='string'?r.memo.slice(0,40):''});
      added++;
    });
    if(added){save();render();}
    bmsg(T('bDone')(added,skipped),added?'in':'');
  };
  rd.onerror=function(){bmsg(T('bBad'),'out');};
  rd.readAsText(f);
};
$('#logout').onclick=leave;
['#un','#pw','#pw2'].forEach(function(s){$(s).addEventListener('keydown',function(e){if(e.key==='Enter')submitAuth();});});
applyLang();
setMode('login');
var sess=null;try{sess=localStorage.getItem('ledger-session');}catch(e){}
if(sess&&accs()['u:'+sess])enter(sess);
})();
