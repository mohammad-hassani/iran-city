import { cityById, searchByName } from '../index';
test('city by ID', () => {
  expect(cityById(766)).toStrictEqual({
    id: 766,
    name: 'رفسنجان',
    province_id: 21,
    province_name: 'کرمان',
    slug: 'رفسنجان',
  });
});
test('search by name (not found)', () => {
  expect(searchByName('رفسنجان')).toStrictEqual(['استان یافت نشد']);
});
test('search by name', () => {
  expect(searchByName('کرمان')).toStrictEqual([
    { id: 740, name: 'اختیارآباد', slug: 'اختیارآباد', province_id: 21 },
    { id: 741, name: 'ارزوئیه', slug: 'ارزوئیه', province_id: 21 },
    { id: 742, name: 'امین شهر', slug: 'امین-شهر', province_id: 21 },
    { id: 743, name: 'انار', slug: 'انار', province_id: 21 },
    { id: 744, name: 'اندوهجرد', slug: 'اندوهجرد', province_id: 21 },
    { id: 745, name: 'باغین', slug: 'باغین', province_id: 21 },
    { id: 746, name: 'بافت', slug: 'بافت', province_id: 21 },
    { id: 747, name: 'بردسیر', slug: 'بردسیر', province_id: 21 },
    { id: 748, name: 'بروات', slug: 'بروات', province_id: 21 },
    { id: 749, name: 'بزنجان', slug: 'بزنجان', province_id: 21 },
    { id: 750, name: 'بم', slug: 'بم', province_id: 21 },
    { id: 751, name: 'بهرمان', slug: 'بهرمان', province_id: 21 },
    { id: 752, name: 'پاریز', slug: 'پاریز', province_id: 21 },
    { id: 753, name: 'جبالبارز', slug: 'جبالبارز', province_id: 21 },
    { id: 754, name: 'جوپار', slug: 'جوپار', province_id: 21 },
    { id: 755, name: 'جوزم', slug: 'جوزم', province_id: 21 },
    { id: 756, name: 'جیرفت', slug: 'جیرفت', province_id: 21 },
    { id: 757, name: 'چترود', slug: 'چترود', province_id: 21 },
    { id: 758, name: 'خاتون آباد', slug: 'خاتون-آباد', province_id: 21 },
    { id: 759, name: 'خانوک', slug: 'خانوک', province_id: 21 },
    { id: 760, name: 'خورسند', slug: 'خورسند', province_id: 21 },
    { id: 761, name: 'درب بهشت', slug: 'درب-بهشت', province_id: 21 },
    { id: 762, name: 'دهج', slug: 'دهج', province_id: 21 },
    { id: 763, name: 'رابر', slug: 'رابر', province_id: 21 },
    { id: 764, name: 'راور', slug: 'راور', province_id: 21 },
    { id: 765, name: 'راین', slug: 'راین', province_id: 21 },
    { id: 766, name: 'رفسنجان', slug: 'رفسنجان', province_name: 'کرمان', province_id: 21 },
    { id: 767, name: 'رودبار', slug: 'کرمان-رودبار', province_id: 21 },
    { id: 768, name: 'ریحان شهر', slug: 'ریحان-شهر', province_id: 21 },
    { id: 769, name: 'زرند', slug: 'زرند', province_id: 21 },
    { id: 770, name: 'زنگی آباد', slug: 'زنگی-آباد', province_id: 21 },
    { id: 771, name: 'زیدآباد', slug: 'زیدآباد', province_id: 21 },
    { id: 772, name: 'سیرجان', slug: 'سیرجان', province_id: 21 },
    { id: 773, name: 'شهداد', slug: 'شهداد', province_id: 21 },
    { id: 774, name: 'شهربابک', slug: 'شهربابک', province_id: 21 },
    { id: 775, name: 'صفائیه', slug: 'صفائیه', province_id: 21 },
    { id: 776, name: 'عنبرآباد', slug: 'عنبرآباد', province_id: 21 },
    { id: 777, name: 'فاریاب', slug: 'فاریاب', province_id: 21 },
    { id: 778, name: 'فهرج', slug: 'فهرج', province_id: 21 },
    { id: 779, name: 'قلعه گنج', slug: 'قلعه-گنج', province_id: 21 },
    { id: 780, name: 'کاظم آباد', slug: 'کاظم-آباد', province_id: 21 },
    { id: 781, name: 'کرمان', slug: 'کرمان', province_id: 21 },
    { id: 782, name: 'کشکوئیه', slug: 'کشکوئیه', province_id: 21 },
    { id: 783, name: 'کهنوج', slug: 'کهنوج', province_id: 21 },
    { id: 784, name: 'کوهبنان', slug: 'کوهبنان', province_id: 21 },
    { id: 785, name: 'کیانشهر', slug: 'کیانشهر', province_id: 21 },
    { id: 786, name: 'گلباف', slug: 'گلباف', province_id: 21 },
    { id: 787, name: 'گلزار', slug: 'گلزار', province_id: 21 },
    { id: 788, name: 'لاله زار', slug: 'لاله-زار', province_id: 21 },
    { id: 789, name: 'ماهان', slug: 'ماهان', province_id: 21 },
    { id: 790, name: 'محمدآباد', slug: 'کرمان-محمدآباد', province_id: 21 },
    { id: 791, name: 'محی آباد', slug: 'محی-آباد', province_id: 21 },
    { id: 792, name: 'مردهک', slug: 'مردهک', province_id: 21 },
    { id: 793, name: 'مس سرچشمه', slug: 'مس-سرچشمه', province_id: 21 },
    { id: 794, name: 'منوجان', slug: 'منوجان', province_id: 21 },
    { id: 795, name: 'نجف شهر', slug: 'نجف-شهر', province_id: 21 },
    { id: 796, name: 'نرماشیر', slug: 'نرماشیر', province_id: 21 },
    { id: 797, name: 'نظام شهر', slug: 'نظام-شهر', province_id: 21 },
    { id: 798, name: 'نگار', slug: 'نگار', province_id: 21 },
    { id: 799, name: 'نودژ', slug: 'نودژ', province_id: 21 },
    { id: 800, name: 'هجدک', slug: 'هجدک', province_id: 21 },
    { id: 801, name: 'یزدان شهر', slug: 'یزدان-شهر', province_id: 21 },
  ]);
});