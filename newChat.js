	(() => {
  'use strict';
  var e =
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.796 9.99924L7.0835 6.28674L8.144 5.22624L12.917 9.99924L8.144 14.7722L7.0835 13.7117L10.796 9.99924Z" fill="#99A0AE"/></svg>',
    n =
      '\n          <div class="retell-callback-header">\n            <div class="retell-callback-title">\n              <span class="retell-callback-title-icon">📞</span>\n              <span class="retell-callback-title-text">Get a call from us</span>\n            </div>\n            <div class="retell-callback-subtitle">Leave your details below and we will call you!</div>\n            <div class="retell-callback-note">(The call is free)</div>\n          </div>\n          <div class="retell-callback-form-content">\n            <div class="retell-callback-name-group">\n              <div class="retell-callback-input-group">\n                <input class="retell-input" id="retell-firstname-input" type="text" placeholder="First Name" required />\n              </div>\n              <div class="retell-callback-input-group">\n                <input class="retell-input" id="retell-lastname-input" type="text" placeholder="Last Name" required />\n              </div>\n            </div>\n            <div class="retell-callback-input-group">\n              <div class="retell-callback-phone-group">\n                <div class="retell-callback-country-dropdown" id="retell-country-dropdown" tabindex="0" role="button" aria-haspopup="listbox" aria-expanded="false">\n                  <span class="retell-callback-country-flag" id="retell-country-flag">🇺🇸</span>\n                  <span class="retell-callback-country-code" id="retell-country-code">+1</span>\n                  <span class="retell-callback-dropdown-arrow">'.concat(
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0001 10.879L13.7126 7.1665L14.7731 8.227L10.0001 13L5.22705 8.227L6.28755 7.1665L10.0001 10.879Z" fill="#525866"/></svg>',
        '</span>\n                </div>\n                <input class="retell-input" id="retell-phone-input" type="tel" placeholder="(555) 000-0000" required />\n                <div class="retell-country-dropdown-list" id="retell-country-dropdown-list" style="display: none;">\n                  <div class="retell-country-search">\n                    <input type="text" id="retell-country-search" placeholder="Search country name" />\n                  </div>\n                  <div class="retell-country-options" id="retell-country-options">\n                    \x3c!-- Countries will be populated here --\x3e\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="retell-callback-checkbox-group">\n              <input class="retell-callback-checkbox" id="retell-privacy-checkbox" type="checkbox" required />\n              <label class="retell-callback-checkbox-label" for="retell-privacy-checkbox">\n                I agree to the <a href="#" id="retell-privacy-policy-link" class="retell-privacy-policy-link">privacy policy</a>\n              </label>\n            </div>\n          </div>\n          <div class="retell-callback-actions">\n            <button class="retell-send-btn" id="retell-callback-submit" type="button">Submit Request</button>\n            <div class="retell-maybe-later" id="retell-maybe-later">Maybe later</div>\n          </div>'
      ),
    t = [
      { name: 'Afghanistan', code: 'AF', emoji: '🇦🇫', dial_code: '+93' },
      { name: 'Albania', code: 'AL', emoji: '🇦🇱', dial_code: '+355' },
      { name: 'Andorra', code: 'AD', emoji: '🇦🇩', dial_code: '+376' },
      { name: 'Angola', code: 'AO', emoji: '🇦🇴', dial_code: '+244' },
      { name: 'Anguilla', code: 'AI', emoji: '🇦🇮', dial_code: '+1264' },
      { name: 'Antarctica', code: 'AQ', emoji: '🇦🇶', dial_code: '+672' },
      {
        name: 'Antigua & Barbuda',
        code: 'AG',
        emoji: '🇦🇬',
        dial_code: '+1268'
      },
      { name: 'Argentina', code: 'AR', emoji: '🇦🇷', dial_code: '+54' },
      { name: 'Armenia', code: 'AM', emoji: '🇦🇲', dial_code: '+374' },
      { name: 'Aruba', code: 'AW', emoji: '🇦🇼', dial_code: '+297' },
      { name: 'Ascension Island', code: 'AC', emoji: '🇦🇨', dial_code: '+247' },
      { name: 'Australia', code: 'AU', emoji: '🇦🇺', dial_code: '+61' },
      { name: 'Austria', code: 'AT', emoji: '🇦🇹', dial_code: '+43' },
      { name: 'Azerbaijan', code: 'AZ', emoji: '🇦🇿', dial_code: '+994' },
      { name: 'Bahamas', code: 'BS', emoji: '🇧🇸', dial_code: '+1242' },
      { name: 'Bahrain', code: 'BH', emoji: '🇧🇭', dial_code: '+973' },
      { name: 'Bangladesh', code: 'BD', emoji: '🇧🇩', dial_code: '+880' },
      { name: 'Barbados', code: 'BB', emoji: '🇧🇧', dial_code: '+1246' },
      { name: 'Belarus', code: 'BY', emoji: '🇧🇾', dial_code: '+375' },
      { name: 'Belgium', code: 'BE', emoji: '🇧🇪', dial_code: '+32' },
      { name: 'Belize', code: 'BZ', emoji: '🇧🇿', dial_code: '+501' },
      { name: 'Benin', code: 'BJ', emoji: '🇧🇯', dial_code: '+229' },
      { name: 'Bermuda', code: 'BM', emoji: '🇧🇲', dial_code: '+1441' },
      { name: 'Bhutan', code: 'BT', emoji: '🇧🇹', dial_code: '+975' },
      { name: 'Bolivia', code: 'BO', emoji: '🇧🇴', dial_code: '+591' },
      {
        name: 'Bosnia & Herzegovina',
        code: 'BA',
        emoji: '🇧🇦',
        dial_code: '+387'
      },
      { name: 'Botswana', code: 'BW', emoji: '🇧🇼', dial_code: '+267' },
      { name: 'Brazil', code: 'BR', emoji: '🇧🇷', dial_code: '+55' },
      {
        name: 'British Indian Ocean Territory',
        code: 'IO',
        emoji: '🇮🇴',
        dial_code: '+246'
      },
      { name: 'Brunei', code: 'BN', emoji: '🇧🇳', dial_code: '+673' },
      { name: 'Bulgaria', code: 'BG', emoji: '🇧🇬', dial_code: '+359' },
      { name: 'Burkina Faso', code: 'BF', emoji: '🇧🇫', dial_code: '+226' },
      { name: 'Burundi', code: 'BI', emoji: '🇧🇮', dial_code: '+257' },
      { name: 'Cabo Verde', code: 'CV', emoji: '🇨🇻', dial_code: '+238' },
      { name: 'Cambodia', code: 'KH', emoji: '🇰🇭', dial_code: '+855' },
      { name: 'Cameroon', code: 'CM', emoji: '🇨🇲', dial_code: '+237' },
      { name: 'Canada', code: 'CA', emoji: '🇨🇦', dial_code: '+1' },
      { name: 'Cayman Islands', code: 'KY', emoji: '🇰🇾', dial_code: '+1345' },
      {
        name: 'Central African Republic',
        code: 'CF',
        emoji: '🇨🇫',
        dial_code: '+236'
      },
      { name: 'Chad', code: 'TD', emoji: '🇹🇩', dial_code: '+235' },
      { name: 'Chile', code: 'CL', emoji: '🇨🇱', dial_code: '+56' },
      { name: 'China', code: 'CN', emoji: '🇨🇳', dial_code: '+86' },
      { name: 'Christmas Island', code: 'CX', emoji: '🇨🇽', dial_code: '+61' },
      {
        name: 'Cocos (Keeling) Islands',
        code: 'CC',
        emoji: '🇨🇨',
        dial_code: '+61'
      },
      { name: 'Colombia', code: 'CO', emoji: '🇨🇴', dial_code: '+57' },
      { name: 'Comoros', code: 'KM', emoji: '🇰🇲', dial_code: '+269' },
      {
        name: 'Congo - Brazzaville',
        code: 'CG',
        emoji: '🇨🇬',
        dial_code: '+242'
      },
      { name: 'Congo - Kinshasa', code: 'CD', emoji: '🇨🇩', dial_code: '+243' },
      { name: 'Cook Islands', code: 'CK', emoji: '🇨🇰', dial_code: '+682' },
      { name: 'Costa Rica', code: 'CR', emoji: '🇨🇷', dial_code: '+506' },
      { name: 'Croatia', code: 'HR', emoji: '🇭🇷', dial_code: '+385' },
      { name: 'Cuba', code: 'CU', emoji: '🇨🇺', dial_code: '+53' },
      { name: 'Curaçao', code: 'CW', emoji: '🇨🇼', dial_code: '+599' },
      { name: 'Cyprus', code: 'CY', emoji: '🇨🇾', dial_code: '+357' },
      { name: 'Czechia', code: 'CZ', emoji: '🇨🇿', dial_code: '+420' },
      { name: 'Côte d’Ivoire', code: 'CI', emoji: '🇨🇮', dial_code: '+225' },
      { name: 'Denmark', code: 'DK', emoji: '🇩🇰', dial_code: '+45' },
      { name: 'Djibouti', code: 'DJ', emoji: '🇩🇯', dial_code: '+253' },
      { name: 'Dominica', code: 'DM', emoji: '🇩🇲', dial_code: '+1767' },
      {
        name: 'Dominican Republic',
        code: 'DO',
        emoji: '🇩🇴',
        dial_code: '+1809'
      },
      { name: 'Ecuador', code: 'EC', emoji: '🇪🇨', dial_code: '+593' },
      { name: 'Egypt', code: 'EG', emoji: '🇪🇬', dial_code: '+20' },
      { name: 'El Salvador', code: 'SV', emoji: '🇸🇻', dial_code: '+503' },
      { name: 'Equatorial Guinea', code: 'GQ', emoji: '🇬🇶', dial_code: '+240' },
      { name: 'Eritrea', code: 'ER', emoji: '🇪🇷', dial_code: '+291' },
      { name: 'Estonia', code: 'EE', emoji: '🇪🇪', dial_code: '+372' },
      { name: 'Eswatini', code: 'SZ', emoji: '🇸🇿', dial_code: '+268' },
      { name: 'Ethiopia', code: 'ET', emoji: '🇪🇹', dial_code: '+251' },
      { name: 'Falkland Islands', code: 'FK', emoji: '🇫🇰', dial_code: '+500' },
      { name: 'Faroe Islands', code: 'FO', emoji: '🇫🇴', dial_code: '+298' },
      { name: 'Fiji', code: 'FJ', emoji: '🇫🇯', dial_code: '+679' },
      { name: 'Finland', code: 'FI', emoji: '🇫🇮', dial_code: '+358' },
      { name: 'France', code: 'FR', emoji: '🇫🇷', dial_code: '+33' },
      { name: 'French Guiana', code: 'GF', emoji: '🇬🇫', dial_code: '+594' },
      { name: 'French Polynesia', code: 'PF', emoji: '🇵🇫', dial_code: '+689' },
      {
        name: 'French Southern Territories',
        code: 'TF',
        emoji: '🇹🇫',
        dial_code: '+262'
      },
      { name: 'Gabon', code: 'GA', emoji: '🇬🇦', dial_code: '+241' },
      { name: 'Gambia', code: 'GM', emoji: '🇬🇲', dial_code: '+220' },
      { name: 'Georgia', code: 'GE', emoji: '🇬🇪', dial_code: '+995' },
      { name: 'Germany', code: 'DE', emoji: '🇩🇪', dial_code: '+49' },
      { name: 'Ghana', code: 'GH', emoji: '🇬🇭', dial_code: '+233' },
      { name: 'Gibraltar', code: 'GI', emoji: '🇬🇮', dial_code: '+350' },
      { name: 'Greece', code: 'GR', emoji: '🇬🇷', dial_code: '+30' },
      { name: 'Greenland', code: 'GL', emoji: '🇬🇱', dial_code: '+299' },
      { name: 'Grenada', code: 'GD', emoji: '🇬🇩', dial_code: '+1473' },
      { name: 'Guadeloupe', code: 'GP', emoji: '🇬🇵', dial_code: '+590' },
      { name: 'Guam', code: 'GU', emoji: '🇬🇺', dial_code: '+1671' },
      { name: 'Guatemala', code: 'GT', emoji: '🇬🇹', dial_code: '+502' },
      { name: 'Guernsey', code: 'GG', emoji: '🇬🇬', dial_code: '+44' },
      { name: 'Guinea', code: 'GN', emoji: '🇬🇳', dial_code: '+224' },
      { name: 'Guinea-Bissau', code: 'GW', emoji: '🇬🇼', dial_code: '+245' },
      { name: 'Guyana', code: 'GY', emoji: '🇬🇾', dial_code: '+592' },
      { name: 'Haiti', code: 'HT', emoji: '🇭🇹', dial_code: '+509' },
      {
        name: 'Heard & McDonald Islands',
        code: 'HM',
        emoji: '🇭🇲',
        dial_code: '+672'
      },
      { name: 'Honduras', code: 'HN', emoji: '🇭🇳', dial_code: '+504' },
      {
        name: 'Hong Kong SAR China',
        code: 'HK',
        emoji: '🇭🇰',
        dial_code: '+852'
      },
      { name: 'Hungary', code: 'HU', emoji: '🇭🇺', dial_code: '+36' },
      { name: 'Iceland', code: 'IS', emoji: '🇮🇸', dial_code: '+354' },
      { name: 'India', code: 'IN', emoji: '🇮🇳', dial_code: '+91' },
      { name: 'Indonesia', code: 'ID', emoji: '🇮🇩', dial_code: '+62' },
      { name: 'Iran', code: 'IR', emoji: '🇮🇷', dial_code: '+98' },
      { name: 'Iraq', code: 'IQ', emoji: '🇮🇶', dial_code: '+964' },
      { name: 'Ireland', code: 'IE', emoji: '🇮🇪', dial_code: '+353' },
      { name: 'Isle of Man', code: 'IM', emoji: '🇮🇲', dial_code: '+44' },
      { name: 'Israel', code: 'IL', emoji: '🇮🇱', dial_code: '+972' },
      { name: 'Italy', code: 'IT', emoji: '🇮🇹', dial_code: '+39' },
      { name: 'Jamaica', code: 'JM', emoji: '🇯🇲', dial_code: '+1 876' },
      { name: 'Japan', code: 'JP', emoji: '🇯🇵', dial_code: '+81' },
      { name: 'Jersey', code: 'JE', emoji: '🇯🇪', dial_code: '+44' },
      { name: 'Jordan', code: 'JO', emoji: '🇯🇴', dial_code: '+962' },
      { name: 'Kazakhstan', code: 'KZ', emoji: '🇰🇿', dial_code: '+7' },
      { name: 'Kenya', code: 'KE', emoji: '🇰🇪', dial_code: '+254' },
      { name: 'Kiribati', code: 'KI', emoji: '🇰🇮', dial_code: '+686' },
      { name: 'Kosovo', code: 'XK', emoji: '🇽🇰', dial_code: '+383' },
      { name: 'Kuwait', code: 'KW', emoji: '🇰🇼', dial_code: '+965' },
      { name: 'Kyrgyzstan', code: 'KG', emoji: '🇰🇬', dial_code: '+996' },
      { name: 'Laos', code: 'LA', emoji: '🇱🇦', dial_code: '+856' },
      { name: 'Latvia', code: 'LV', emoji: '🇱🇻', dial_code: '+371' },
      { name: 'Lebanon', code: 'LB', emoji: '🇱🇧', dial_code: '+961' },
      { name: 'Lesotho', code: 'LS', emoji: '🇱🇸', dial_code: '+266' },
      { name: 'Liberia', code: 'LR', emoji: '🇱🇷', dial_code: '+231' },
      { name: 'Libya', code: 'LY', emoji: '🇱🇾', dial_code: '+218' },
      { name: 'Liechtenstein', code: 'LI', emoji: '🇱🇮', dial_code: '+423' },
      { name: 'Lithuania', code: 'LT', emoji: '🇱🇹', dial_code: '+370' },
      { name: 'Luxembourg', code: 'LU', emoji: '🇱🇺', dial_code: '+352' },
      { name: 'Macao SAR China', code: 'MO', emoji: '🇲🇴', dial_code: '+853' },
      { name: 'Madagascar', code: 'MG', emoji: '🇲🇬', dial_code: '+261' },
      { name: 'Malawi', code: 'MW', emoji: '🇲🇼', dial_code: '+265' },
      { name: 'Malaysia', code: 'MY', emoji: '🇲🇾', dial_code: '+60' },
      { name: 'Maldives', code: 'MV', emoji: '🇲🇻', dial_code: '+960' },
      { name: 'Mali', code: 'ML', emoji: '🇲🇱', dial_code: '+223' },
      { name: 'Malta', code: 'MT', emoji: '🇲🇹', dial_code: '+356' },
      { name: 'Marshall Islands', code: 'MH', emoji: '🇲🇭', dial_code: '+692' },
      { name: 'Martinique', code: 'MQ', emoji: '🇲🇶', dial_code: '+596' },
      { name: 'Mauritania', code: 'MR', emoji: '🇲🇷', dial_code: '+222' },
      { name: 'Mauritius', code: 'MU', emoji: '🇲🇺', dial_code: '+230' },
      { name: 'Mayotte', code: 'YT', emoji: '🇾🇹', dial_code: '+262' },
      { name: 'Mexico', code: 'MX', emoji: '🇲🇽', dial_code: '+52' },
      { name: 'Micronesia', code: 'FM', emoji: '🇫🇲', dial_code: '+691' },
      { name: 'Moldova', code: 'MD', emoji: '🇲🇩', dial_code: '+373' },
      { name: 'Monaco', code: 'MC', emoji: '🇲🇨', dial_code: '+377' },
      { name: 'Mongolia', code: 'MN', emoji: '🇲🇳', dial_code: '+976' },
      { name: 'Montenegro', code: 'ME', emoji: '🇲🇪', dial_code: '+382' },
      { name: 'Montserrat', code: 'MS', emoji: '🇲🇸', dial_code: '+1 664' },
      { name: 'Morocco', code: 'MA', emoji: '🇲🇦', dial_code: '+212' },
      { name: 'Mozambique', code: 'MZ', emoji: '🇲🇿', dial_code: '+258' },
      { name: 'Myanmar (Burma)', code: 'MM', emoji: '🇲🇲', dial_code: '+95' },
      { name: 'Namibia', code: 'NA', emoji: '🇳🇦', dial_code: '+264' },
      { name: 'Nauru', code: 'NR', emoji: '🇳🇷', dial_code: '+674' },
      { name: 'Nepal', code: 'NP', emoji: '🇳🇵', dial_code: '+977' },
      { name: 'Netherlands', code: 'NL', emoji: '🇳🇱', dial_code: '+31' },
      { name: 'New Caledonia', code: 'NC', emoji: '🇳🇨', dial_code: '+687' },
      { name: 'New Zealand', code: 'NZ', emoji: '🇳🇿', dial_code: '+64' },
      { name: 'Nicaragua', code: 'NI', emoji: '🇳🇮', dial_code: '+505' },
      { name: 'Niger', code: 'NE', emoji: '🇳🇪', dial_code: '+227' },
      { name: 'Nigeria', code: 'NG', emoji: '🇳🇬', dial_code: '+234' },
      { name: 'Niue', code: 'NU', emoji: '🇳🇺', dial_code: '+683' },
      { name: 'Norfolk Island', code: 'NF', emoji: '🇳🇫', dial_code: '+672' },
      { name: 'North Korea', code: 'KP', emoji: '🇰🇵', dial_code: '+850' },
      {
        name: 'Northern Mariana Islands',
        code: 'MP',
        emoji: '🇲🇵',
        dial_code: '+1 670'
      },
      { name: 'Norway', code: 'NO', emoji: '🇳🇴', dial_code: '+47' },
      { name: 'Oman', code: 'OM', emoji: '🇴🇲', dial_code: '+968' },
      { name: 'Pakistan', code: 'PK', emoji: '🇵🇰', dial_code: '+92' },
      { name: 'Palau', code: 'PW', emoji: '🇵🇼', dial_code: '+680' },
      {
        name: 'Palestinian Territories',
        code: 'PS',
        emoji: '🇵🇸',
        dial_code: '+970'
      },
      { name: 'Panama', code: 'PA', emoji: '🇵🇦', dial_code: '+507' },
      { name: 'Papua New Guinea', code: 'PG', emoji: '🇵🇬', dial_code: '+675' },
      { name: 'Paraguay', code: 'PY', emoji: '🇵🇾', dial_code: '+595' },
      { name: 'Peru', code: 'PE', emoji: '🇵🇪', dial_code: '+51' },
      { name: 'Philippines', code: 'PH', emoji: '🇵🇭', dial_code: '+63' },
      { name: 'Pitcairn Islands', code: 'PN', emoji: '🇵🇳', dial_code: '+64' },
      { name: 'Poland', code: 'PL', emoji: '🇵🇱', dial_code: '+48' },
      { name: 'Portugal', code: 'PT', emoji: '🇵🇹', dial_code: '+351' },
      { name: 'Puerto Rico', code: 'PR', emoji: '🇵🇷', dial_code: '+1 787' },
      { name: 'Qatar', code: 'QA', emoji: '🇶🇦', dial_code: '+974' },
      { name: 'Réunion', code: 'RE', emoji: '🇷🇪', dial_code: '+262' },
      { name: 'Romania', code: 'RO', emoji: '🇷🇴', dial_code: '+40' },
      { name: 'Russia', code: 'RU', emoji: '🇷🇺', dial_code: '+7' },
      { name: 'Rwanda', code: 'RW', emoji: '🇷🇼', dial_code: '+250' },
      { name: 'Saint Barthélemy', code: 'BL', emoji: '🇧🇱', dial_code: '+590' },
      { name: 'Saint Helena', code: 'SH', emoji: '🇸🇭', dial_code: '+290' },
      {
        name: 'Saint Kitts & Nevis',
        code: 'KN',
        emoji: '🇰🇳',
        dial_code: '+1 869'
      },
      { name: 'Saint Lucia', code: 'LC', emoji: '🇱🇨', dial_code: '+1 758' },
      { name: 'Saint Martin', code: 'MF', emoji: '🇲🇫', dial_code: '+590' },
      {
        name: 'Saint Pierre & Miquelon',
        code: 'PM',
        emoji: '🇵🇲',
        dial_code: '+508'
      },
      { name: 'Samoa', code: 'WS', emoji: '🇼🇸', dial_code: '+685' },
      { name: 'San Marino', code: 'SM', emoji: '🇸🇲', dial_code: '+378' },
      {
        name: 'Sao Tome & Principe',
        code: 'ST',
        emoji: '🇸🇹',
        dial_code: '+239'
      },
      { name: 'Saudi Arabia', code: 'SA', emoji: '🇸🇦', dial_code: '+966' },
      { name: 'Senegal', code: 'SN', emoji: '🇸🇳', dial_code: '+221' },
      { name: 'Serbia', code: 'RS', emoji: '🇷🇸', dial_code: '+381' },
      { name: 'Seychelles', code: 'SC', emoji: '🇸🇨', dial_code: '+248' },
      { name: 'Sierra Leone', code: 'SL', emoji: '🇸🇱', dial_code: '+232' },
      { name: 'Singapore', code: 'SG', emoji: '🇸🇬', dial_code: '+65' },
      { name: 'Sint Maarten', code: 'SX', emoji: '🇸🇽', dial_code: '+1 721' },
      { name: 'Slovakia', code: 'SK', emoji: '🇸🇰', dial_code: '+421' },
      { name: 'Slovenia', code: 'SI', emoji: '🇸🇮', dial_code: '+386' },
      { name: 'Solomon Islands', code: 'SB', emoji: '🇸🇧', dial_code: '+677' },
      { name: 'Somalia', code: 'SO', emoji: '🇸🇴', dial_code: '+252' },
      { name: 'South Africa', code: 'ZA', emoji: '🇿🇦', dial_code: '+27' },
      {
        name: 'South Georgia & South Sandwich Islands',
        code: 'GS',
        emoji: '🇬🇸',
        dial_code: '+500'
      },
      { name: 'South Korea', code: 'KR', emoji: '🇰🇷', dial_code: '+82' },
      { name: 'South Sudan', code: 'SS', emoji: '🇸🇸', dial_code: '+211' },
      { name: 'Spain', code: 'ES', emoji: '🇪🇸', dial_code: '+34' },
      { name: 'Sri Lanka', code: 'LK', emoji: '🇱🇰', dial_code: '+94' },
      { name: 'Sudan', code: 'SD', emoji: '🇸🇩', dial_code: '+249' },
      { name: 'Suriname', code: 'SR', emoji: '🇸🇷', dial_code: '+597' },
      {
        name: 'Svalbard & Jan Mayen',
        code: 'SJ',
        emoji: '🇸🇯',
        dial_code: '+47'
      },
      { name: 'Sweden', code: 'SE', emoji: '🇸🇪', dial_code: '+46' },
      { name: 'Switzerland', code: 'CH', emoji: '🇨🇭', dial_code: '+41' },
      { name: 'Syria', code: 'SY', emoji: '🇸🇾', dial_code: '+963' },
      { name: 'Taiwan', code: 'TW', emoji: '🇹🇼', dial_code: '+886' },
      { name: 'Tajikistan', code: 'TJ', emoji: '🇹🇯', dial_code: '+992' },
      { name: 'Tanzania', code: 'TZ', emoji: '🇹🇿', dial_code: '+255' },
      { name: 'Thailand', code: 'TH', emoji: '🇹🇭', dial_code: '+66' },
      { name: 'Timor-Leste', code: 'TL', emoji: '🇹🇱', dial_code: '+670' },
      { name: 'Togo', code: 'TG', emoji: '🇹🇬', dial_code: '+228' },
      { name: 'Tokelau', code: 'TK', emoji: '🇹🇰', dial_code: '+690' },
      { name: 'Tonga', code: 'TO', emoji: '🇹🇴', dial_code: '+676' },
      {
        name: 'Trinidad & Tobago',
        code: 'TT',
        emoji: '🇹🇹',
        dial_code: '+1 868'
      },
      { name: 'Tunisia', code: 'TN', emoji: '🇹🇳', dial_code: '+216' },
      { name: 'Turkey', code: 'TR', emoji: '🇹🇷', dial_code: '+90' },
      { name: 'Turkmenistan', code: 'TM', emoji: '🇹🇲', dial_code: '+993' },
      {
        name: 'Turks & Caicos Islands',
        code: 'TC',
        emoji: '🇹🇨',
        dial_code: '+1 649'
      },
      { name: 'Tuvalu', code: 'TV', emoji: '🇹🇻', dial_code: '+688' },
      { name: 'Uganda', code: 'UG', emoji: '🇺🇬', dial_code: '+256' },
      { name: 'Ukraine', code: 'UA', emoji: '🇺🇦', dial_code: '+380' },
      {
        name: 'United Arab Emirates',
        code: 'AE',
        emoji: '🇦🇪',
        dial_code: '+971'
      },
      { name: 'United Kingdom', code: 'GB', emoji: '🇬🇧', dial_code: '+44' },
      { name: 'United States', code: 'US', emoji: '🇺🇸', dial_code: '+1' },
      { name: 'Uruguay', code: 'UY', emoji: '🇺🇾', dial_code: '+598' },
      { name: 'Uzbekistan', code: 'UZ', emoji: '🇺🇿', dial_code: '+998' },
      { name: 'Vanuatu', code: 'VU', emoji: '🇻🇺', dial_code: '+678' },
      { name: 'Vatican City', code: 'VA', emoji: '🇻🇦', dial_code: '+379' },
      { name: 'Venezuela', code: 'VE', emoji: '🇻🇪', dial_code: '+58' },
      { name: 'Vietnam', code: 'VN', emoji: '🇻🇳', dial_code: '+84' },
      { name: 'Wallis & Futuna', code: 'WF', emoji: '🇼🇫', dial_code: '+681' }
    ];
  function o(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return a(e);
      })(e) ||
      (function (e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      })(e) ||
      (function (e, n) {
        if (e) {
          if ('string' == typeof e) return a(e, n);
          var t = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === t && e.constructor && (t = e.constructor.name),
            'Map' === t || 'Set' === t
              ? Array.from(e)
              : 'Arguments' === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? a(e, n)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function a(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
    return o;
  }
  function i(e, a, i, l, r) {
    var c = e.getElementById('retell-callback-form');
    if (c) c.innerHTML = n;
    else {
      var d = e.getElementById('retell-chat');
      d && ((d.innerHTML = n), (c = e.getElementById('retell-callback-form')));
    }
    if (!c)
      return (
        console.error('Could not find or create callback form element'), null
      );
    var s = e.getElementById('retell-firstname-input'),
      m = e.getElementById('retell-lastname-input'),
      u = e.getElementById('retell-phone-input'),
      p = e.getElementById('retell-privacy-checkbox'),
      f = e.getElementById('retell-callback-submit'),
      g = e.getElementById('retell-maybe-later');
    f && ((f.disabled = !0), (f.onclick = a)),
      g && (g.onclick = i),
      p &&
        f &&
        (p.onchange = function () {
          f.disabled = !p.checked;
        });
    var b = e.getElementById('retell-privacy-policy-link');
    return (
      b &&
        l &&
        (b.onclick = function (e) {
          e.preventDefault(), window.open(l, '_blank');
        }),
      (function (e, n) {
        var a = e.getElementById('retell-country-dropdown'),
          i = e.getElementById('retell-country-flag'),
          l = e.getElementById('retell-country-code'),
          r = e.getElementById('retell-country-dropdown-list'),
          c = e.getElementById('retell-country-search'),
          d = e.getElementById('retell-country-options');
        if (!(a && i && l && r && c && d)) return;
        var s = o(t);
        if (n) {
          var m = n.split(',').map(function (e) {
            return e.trim().toUpperCase();
          });
          s = t.filter(function (e) {
            return m.includes(e.code);
          });
        }
        var u =
          s.find(function (e) {
            return 'US' === e.code;
          }) || s[0];
        o(s);
        function p(e) {
          (d.innerHTML = ''),
            e.forEach(function (e) {
              var n = document.createElement('div');
              (n.className = 'retell-country-option'),
                n.setAttribute('tabindex', '0'),
                n.setAttribute('role', 'option'),
                (n.innerHTML =
                  '\n        <div class="retell-country-option-left">\n          <span class="retell-country-flag">'
                    .concat(
                      e.emoji || '🏳️',
                      '</span>\n          <span class="retell-country-name">'
                    )
                    .concat(
                      e.name,
                      '</span>\n        </div>\n        <strong class="retell-country-phone">'
                    )
                    .concat(e.dial_code || '', '</strong>\n      ')),
                (n.onclick = function () {
                  return f(e);
                }),
                (n.onkeydown = function (n) {
                  ('Enter' !== n.key && ' ' !== n.key) ||
                    (n.preventDefault(), f(e));
                }),
                d.appendChild(n);
            });
        }
        function f(e) {
          (u = e),
            (i.textContent = e.emoji || '🏳️'),
            (l.textContent = e.dial_code || ''),
            a.classList.remove('open'),
            (r.style.display = 'none'),
            a.setAttribute('aria-expanded', 'false');
        }
        (a.onclick = function (e) {
          if ((e.stopPropagation(), a.classList.contains('open')))
            a.classList.remove('open'),
              (r.style.display = 'none'),
              a.setAttribute('aria-expanded', 'false');
          else {
            a.classList.add('open'),
              (r.style.display = 'block'),
              a.setAttribute('aria-expanded', 'true');
            var n = a.getBoundingClientRect();
            (r.style.position = 'fixed'),
              (r.style.top = n.top - 304 + 'px'),
              (r.style.left = n.left + 'px'),
              (r.style.width = '280px'),
              c.focus();
          }
        }),
          (a.onkeydown = function (e) {
            ('Enter' !== e.key && ' ' !== e.key && 'ArrowDown' !== e.key) ||
              (e.preventDefault(), a.click());
          });
        var g = a.querySelector('.retell-callback-dropdown-arrow');
        g &&
          (g.onclick = function (e) {
            e.stopPropagation(), a.click();
          });
        (c.oninput = function (e) {
          var n = e.target.value.toLowerCase();
          p(
            s.filter(function (e) {
              return (
                e.name.toLowerCase().includes(n) ||
                e.code.toLowerCase().includes(n) ||
                (e.dial_code && e.dial_code.toLowerCase().includes(n))
              );
            })
          );
        }),
          r.addEventListener('click', function (e) {
            e.stopPropagation();
          }),
          c.addEventListener('click', function (e) {
            e.stopPropagation();
          }),
          document.addEventListener('click', function () {
            a.classList.remove('open'),
              (r.style.display = 'none'),
              a.setAttribute('aria-expanded', 'false');
          }),
          p(s),
          f(u);
      })(e, r),
      {
        callbackForm: c,
        firstNameInput: s,
        lastNameInput: m,
        phoneInput: u,
        privacyCheckbox: p,
        callbackSubmit: f,
        maybeLaterBtn: g
      }
    );
  }
  function l(e, n) {
    e.style.display = n ? 'flex' : 'none';
  }
  function r() {
    var e,
      n,
      t = 'function' == typeof Symbol ? Symbol : {},
      o = t.iterator || '@@iterator',
      a = t.toStringTag || '@@toStringTag';
    function i(t, o, a, i) {
      var r = o && o.prototype instanceof d ? o : d,
        s = Object.create(r.prototype);
      return (
        c(
          s,
          '_invoke',
          (function (t, o, a) {
            var i,
              r,
              c,
              d = 0,
              s = a || [],
              m = !1,
              u = {
                p: 0,
                n: 0,
                v: e,
                a: p,
                f: p.bind(e, 4),
                d: function (n, t) {
                  return (i = n), (r = 0), (c = e), (u.n = t), l;
                }
              };
            function p(t, o) {
              for (r = t, c = o, n = 0; !m && d && !a && n < s.length; n++) {
                var a,
                  i = s[n],
                  p = u.p,
                  f = i[2];
                t > 3
                  ? (a = f === o) &&
                    ((c = i[(r = i[4]) ? 5 : ((r = 3), 3)]), (i[4] = i[5] = e))
                  : i[0] <= p &&
                    ((a = t < 2 && p < i[1])
                      ? ((r = 0), (u.v = o), (u.n = i[1]))
                      : p < f &&
                        (a = t < 3 || i[0] > o || o > f) &&
                        ((i[4] = t), (i[5] = o), (u.n = f), (r = 0)));
              }
              if (a || t > 1) return l;
              throw ((m = !0), o);
            }
            return function (a, s, f) {
              if (d > 1) throw TypeError('Generator is already running');
              for (
                m && 1 === s && p(s, f), r = s, c = f;
                (n = r < 2 ? e : c) || !m;

              ) {
                i ||
                  (r
                    ? r < 3
                      ? (r > 1 && (u.n = -1), p(r, c))
                      : (u.n = c)
                    : (u.v = c));
                try {
                  if (((d = 2), i)) {
                    if ((r || (a = 'next'), (n = i[a]))) {
                      if (!(n = n.call(i, c)))
                        throw TypeError('iterator result is not an object');
                      if (!n.done) return n;
                      (c = n.value), r < 2 && (r = 0);
                    } else
                      1 === r && (n = i.return) && n.call(i),
                        r < 2 &&
                          ((c = TypeError(
                            "The iterator does not provide a '" + a + "' method"
                          )),
                          (r = 1));
                    i = e;
                  } else if ((n = (m = u.n < 0) ? c : t.call(o, u)) !== l)
                    break;
                } catch (n) {
                  (i = e), (r = 1), (c = n);
                } finally {
                  d = 1;
                }
              }
              return { value: n, done: m };
            };
          })(t, a, i),
          !0
        ),
        s
      );
    }
    var l = {};
    function d() {}
    function s() {}
    function m() {}
    n = Object.getPrototypeOf;
    var u = [][o]
        ? n(n([][o]()))
        : (c((n = {}), o, function () {
            return this;
          }),
          n),
      p = (m.prototype = d.prototype = Object.create(u));
    function f(e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, m)
          : ((e.__proto__ = m), c(e, a, 'GeneratorFunction')),
        (e.prototype = Object.create(p)),
        e
      );
    }
    return (
      (s.prototype = m),
      c(p, 'constructor', m),
      c(m, 'constructor', s),
      (s.displayName = 'GeneratorFunction'),
      c(m, a, 'GeneratorFunction'),
      c(p),
      c(p, a, 'Generator'),
      c(p, o, function () {
        return this;
      }),
      c(p, 'toString', function () {
        return '[object Generator]';
      }),
      (r = function () {
        return { w: i, m: f };
      })()
    );
  }
  function c(e, n, t, o) {
    var a = Object.defineProperty;
    try {
      a({}, '', {});
    } catch (e) {
      a = 0;
    }
    (c = function (e, n, t, o) {
      if (n)
        a
          ? a(e, n, {
              value: t,
              enumerable: !o,
              configurable: !o,
              writable: !o
            })
          : (e[n] = t);
      else {
        var i = function (n, t) {
          c(e, n, function (e) {
            return this._invoke(n, t, e);
          });
        };
        i('next', 0), i('throw', 1), i('return', 2);
      }
    }),
      c(e, n, t, o);
  }
  function d(e, n, t, o, a, i, l) {
    try {
      var r = e[i](l),
        c = r.value;
    } catch (e) {
      return void t(e);
    }
    r.done ? n(c) : Promise.resolve(c).then(o, a);
  }
  function s(e) {
    return function () {
      var n = this,
        t = arguments;
      return new Promise(function (o, a) {
        var i = e.apply(n, t);
        function l(e) {
          d(i, o, a, l, r, 'next', e);
        }
        function r(e) {
          d(i, o, a, l, r, 'throw', e);
        }
        l(void 0);
      });
    };
  }
  var m = 'https://api.retellai.com';
  function u(e, n, t, o) {
    return p.apply(this, arguments);
  }
  function p() {
    return (
      (p = s(
        r().m(function e(n, t, o, a) {
          var i,
            l,
            c,
            d,
            s,
            u,
            p = arguments;
          return r().w(
            function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return (
                      (i = p.length > 4 && void 0 !== p[4] ? p[4] : null),
                      (l = { agent_id: n }),
                      'number' != typeof o || isNaN(o) || (l.agent_version = o),
                      a &&
                        Object.keys(a).length > 0 &&
                        (l.retell_llm_dynamic_variables = a),
                      (c = {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer '.concat(t)
                      }),
                      i && (c['g-recaptcha-response'] = i),
                      (e.n = 1),
                      fetch(''.concat(m, '/create-chat'), {
                        method: 'POST',
                        headers: c,
                        body: JSON.stringify(l)
                      })
                    );
                  case 1:
                    if ((d = e.v).ok) {
                      e.n = 6;
                      break;
                    }
                    return (
                      (s = 'Unknown error'), (e.p = 2), (e.n = 3), d.json()
                    );
                  case 3:
                    (u = e.v), (s = u.message || s), (e.n = 5);
                    break;
                  case 4:
                    (e.p = 4), e.v;
                  case 5:
                    return e.a(2, { status: 'error', message: s });
                  case 6:
                    return (e.n = 7), d.json();
                  case 7:
                    return e.a(2, e.v);
                }
            },
            e,
            null,
            [[2, 4]]
          );
        })
      )),
      p.apply(this, arguments)
    );
  }
  function f(e, n) {
    return g.apply(this, arguments);
  }
  function g() {
    return (g = s(
      r().m(function e(n, t) {
        var o;
        return r().w(function (e) {
          for (;;)
            switch (e.n) {
              case 0:
                return (
                  (e.n = 1),
                  fetch(''.concat(m, '/get-chat/').concat(n), {
                    headers: { Authorization: 'Bearer '.concat(t) }
                  })
                );
              case 1:
                return (o = e.v), (e.n = 2), o.json();
              case 2:
                return e.a(2, e.v);
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function b(e, n, t) {
    return h.apply(this, arguments);
  }
  function h() {
    return (h = s(
      r().m(function e(n, t, o) {
        var a;
        return r().w(function (e) {
          for (;;)
            switch (e.n) {
              case 0:
                return (
                  (e.n = 1),
                  fetch(''.concat(m, '/create-chat-completion'), {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: 'Bearer '.concat(o)
                    },
                    body: JSON.stringify({ chat_id: n, content: t })
                  })
                );
              case 1:
                return (a = e.v), (e.n = 2), a.json();
              case 2:
                return e.a(2, e.v);
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function y(e, n) {
    return x.apply(this, arguments);
  }
  function x() {
    return (x = s(
      r().m(function e(n, t) {
        var o, a;
        return r().w(
          function (e) {
            for (;;)
              switch (e.n) {
                case 0:
                  return (
                    (e.n = 1),
                    fetch(''.concat(m, '/end-chat/').concat(n), {
                      method: 'PATCH',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer '.concat(t)
                      }
                    })
                  );
                case 1:
                  if (204 !== (o = e.v).status) {
                    e.n = 2;
                    break;
                  }
                  return e.a(2, { success: !0 });
                case 2:
                  return (e.n = 3), o.text();
                case 3:
                  return (a = e.v), (e.p = 4), e.a(2, JSON.parse(a));
                case 5:
                  if (((e.p = 5), e.v, !o.ok)) {
                    e.n = 6;
                    break;
                  }
                  return e.a(2, { success: !0 });
                case 6:
                  throw new Error('Invalid response from endChat API: ' + a);
                case 7:
                  return e.a(2);
              }
          },
          e,
          null,
          [[4, 5]]
        );
      })
    )).apply(this, arguments);
  }
  function v(e, n, t) {
    return w.apply(this, arguments);
  }
  function w() {
    return (
      (w = s(
        r().m(function e(n, t, o) {
          var a,
            i,
            l,
            c,
            d,
            s,
            u,
            p,
            f,
            g,
            b = arguments;
          return r().w(
            function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return (
                      (i = b.length > 4 && void 0 !== b[4] ? b[4] : null),
                      (l = b.length > 5 && void 0 !== b[5] ? b[5] : null),
                      (c = b.length > 6 && void 0 !== b[6] ? b[6] : null),
                      (d = b.length > 7 && void 0 !== b[7] ? b[7] : null),
                      (s = { from_number: n, to_number: t }),
                      (a = b.length > 3 && void 0 !== b[3] ? b[3] : null) &&
                        (s.override_agent_id = a),
                      i && (s.override_agent_version = i),
                      l && (s.metadata = l),
                      c &&
                        Object.keys(c).length > 0 &&
                        (s.retell_llm_dynamic_variables = c),
                      (u = {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer '.concat(o)
                      }),
                      d && (u['g-recaptcha-response'] = d),
                      (e.n = 1),
                      fetch(''.concat(m, '/v2/create-phone-call'), {
                        method: 'POST',
                        headers: u,
                        body: JSON.stringify(s)
                      })
                    );
                  case 1:
                    if ((p = e.v).ok) {
                      e.n = 6;
                      break;
                    }
                    return (
                      (f = 'Unknown error'), (e.p = 2), (e.n = 3), p.json()
                    );
                  case 3:
                    (g = e.v), (f = g.message || f), (e.n = 5);
                    break;
                  case 4:
                    (e.p = 4), e.v;
                  case 5:
                    return e.a(2, { status: 'error', message: f });
                  case 6:
                    return (e.n = 7), p.json();
                  case 7:
                    return e.a(2, e.v);
                }
            },
            e,
            null,
            [[2, 4]]
          );
        })
      )),
      w.apply(this, arguments)
    );
  }
  function j(e) {
    localStorage.setItem('LS_CHAT_HISTORY', JSON.stringify(e));
  }
  function k(e) {
    localStorage.setItem('LS_CHAT_LIST', JSON.stringify(e));
  }
  function _(e) {
    localStorage.setItem('LS_CHAT_ID', e);
  }
  function C(e) {
    if (!e) return '';
    var n = new Date(),
      t = new Date(e),
      o = n - t,
      a = Math.floor(o / 1e3),
      i = Math.floor(a / 60),
      l = Math.floor(i / 60);
    return Math.floor(l / 24) >= 1
      ? t.toISOString().slice(0, 10)
      : l >= 1
      ? ''.concat(l, 'h ago')
      : i >= 1
      ? ''.concat(i, ' minutes ago')
      : 'just now';
  }
  function S(e) {
    return (
      (S =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      S(e)
    );
  }
  function I(e, n) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, n) {
        var t =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != t) {
          var o,
            a,
            i,
            l,
            r = [],
            c = !0,
            d = !1;
          try {
            if (((i = (t = t.call(e)).next), 0 === n)) {
              if (Object(t) !== t) return;
              c = !1;
            } else
              for (
                ;
                !(c = (o = i.call(t)).done) &&
                (r.push(o.value), r.length !== n);
                c = !0
              );
          } catch (e) {
            (d = !0), (a = e);
          } finally {
            try {
              if (!c && null != t.return && ((l = t.return()), Object(l) !== l))
                return;
            } finally {
              if (d) throw a;
            }
          }
          return r;
        }
      })(e, n) ||
      (function (e, n) {
        if (e) {
          if ('string' == typeof e) return M(e, n);
          var t = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === t && e.constructor && (t = e.constructor.name),
            'Map' === t || 'Set' === t
              ? Array.from(e)
              : 'Arguments' === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? M(e, n)
              : void 0
          );
        }
      })(e, n) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function M(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
    return o;
  }
  function B() {
    var e,
      n,
      t = 'function' == typeof Symbol ? Symbol : {},
      o = t.iterator || '@@iterator',
      a = t.toStringTag || '@@toStringTag';
    function i(t, o, a, i) {
      var c = o && o.prototype instanceof r ? o : r,
        d = Object.create(c.prototype);
      return (
        A(
          d,
          '_invoke',
          (function (t, o, a) {
            var i,
              r,
              c,
              d = 0,
              s = a || [],
              m = !1,
              u = {
                p: 0,
                n: 0,
                v: e,
                a: p,
                f: p.bind(e, 4),
                d: function (n, t) {
                  return (i = n), (r = 0), (c = e), (u.n = t), l;
                }
              };
            function p(t, o) {
              for (r = t, c = o, n = 0; !m && d && !a && n < s.length; n++) {
                var a,
                  i = s[n],
                  p = u.p,
                  f = i[2];
                t > 3
                  ? (a = f === o) &&
                    ((c = i[(r = i[4]) ? 5 : ((r = 3), 3)]), (i[4] = i[5] = e))
                  : i[0] <= p &&
                    ((a = t < 2 && p < i[1])
                      ? ((r = 0), (u.v = o), (u.n = i[1]))
                      : p < f &&
                        (a = t < 3 || i[0] > o || o > f) &&
                        ((i[4] = t), (i[5] = o), (u.n = f), (r = 0)));
              }
              if (a || t > 1) return l;
              throw ((m = !0), o);
            }
            return function (a, s, f) {
              if (d > 1) throw TypeError('Generator is already running');
              for (
                m && 1 === s && p(s, f), r = s, c = f;
                (n = r < 2 ? e : c) || !m;

              ) {
                i ||
                  (r
                    ? r < 3
                      ? (r > 1 && (u.n = -1), p(r, c))
                      : (u.n = c)
                    : (u.v = c));
                try {
                  if (((d = 2), i)) {
                    if ((r || (a = 'next'), (n = i[a]))) {
                      if (!(n = n.call(i, c)))
                        throw TypeError('iterator result is not an object');
                      if (!n.done) return n;
                      (c = n.value), r < 2 && (r = 0);
                    } else
                      1 === r && (n = i.return) && n.call(i),
                        r < 2 &&
                          ((c = TypeError(
                            "The iterator does not provide a '" + a + "' method"
                          )),
                          (r = 1));
                    i = e;
                  } else if ((n = (m = u.n < 0) ? c : t.call(o, u)) !== l)
                    break;
                } catch (n) {
                  (i = e), (r = 1), (c = n);
                } finally {
                  d = 1;
                }
              }
              return { value: n, done: m };
            };
          })(t, a, i),
          !0
        ),
        d
      );
    }
    var l = {};
    function r() {}
    function c() {}
    function d() {}
    n = Object.getPrototypeOf;
    var s = [][o]
        ? n(n([][o]()))
        : (A((n = {}), o, function () {
            return this;
          }),
          n),
      m = (d.prototype = r.prototype = Object.create(s));
    function u(e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, d)
          : ((e.__proto__ = d), A(e, a, 'GeneratorFunction')),
        (e.prototype = Object.create(m)),
        e
      );
    }
    return (
      (c.prototype = d),
      A(m, 'constructor', d),
      A(d, 'constructor', c),
      (c.displayName = 'GeneratorFunction'),
      A(d, a, 'GeneratorFunction'),
      A(m),
      A(m, a, 'Generator'),
      A(m, o, function () {
        return this;
      }),
      A(m, 'toString', function () {
        return '[object Generator]';
      }),
      (B = function () {
        return { w: i, m: u };
      })()
    );
  }
  function A(e, n, t, o) {
    var a = Object.defineProperty;
    try {
      a({}, '', {});
    } catch (e) {
      a = 0;
    }
    (A = function (e, n, t, o) {
      if (n)
        a
          ? a(e, n, {
              value: t,
              enumerable: !o,
              configurable: !o,
              writable: !o
            })
          : (e[n] = t);
      else {
        var i = function (n, t) {
          A(e, n, function (e) {
            return this._invoke(n, t, e);
          });
        };
        i('next', 0), i('throw', 1), i('return', 2);
      }
    }),
      A(e, n, t, o);
  }
  function L(e, n, t, o, a, i, l) {
    try {
      var r = e[i](l),
        c = r.value;
    } catch (e) {
      return void t(e);
    }
    r.done ? n(c) : Promise.resolve(c).then(o, a);
  }
  function E(e) {
    return function () {
      var n = this,
        t = arguments;
      return new Promise(function (o, a) {
        var i = e.apply(n, t);
        function l(e) {
          L(i, o, a, l, r, 'next', e);
        }
        function r(e) {
          L(i, o, a, l, r, 'throw', e);
        }
        l(void 0);
      });
    };
  }
  function T(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n &&
        (o = o.filter(function (n) {
          return Object.getOwnPropertyDescriptor(e, n).enumerable;
        })),
        t.push.apply(t, o);
    }
    return t;
  }
  function N(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? T(Object(t), !0).forEach(function (n) {
            z(e, n, t[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : T(Object(t)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
  }
  function z(e, n, t) {
    return (
      (n = (function (e) {
        var n = (function (e, n) {
          if ('object' != S(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, n || 'default');
            if ('object' != S(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === n ? String : Number)(e);
        })(e, 'string');
        return 'symbol' == S(n) ? n : n + '';
      })(n)) in e
        ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[n] = t),
      e
    );
  }
  !(function () {
    function t() {
      var t = document.getElementById('syntalia-widget');
      if (t) {
        var o = t.getAttribute('data-public-key');
        if (o) {
          var a = t.getAttribute('data-agent-id'),
            r = t.getAttribute('data-title') || 'Title',
            c = t.getAttribute('data-widget') || 'chat',
            d = t.getAttribute('data-phone-number');
          if ('callback' !== c || d) {
            var s = t.getAttribute('data-agent-version'),
              m = s ? parseInt(s, 10) : void 0,
              p = t.getAttribute('data-color') || '#0d1123',
              g = t.getAttribute('data-logo-url'),
              h = t.getAttribute('data-tc'),
              x = t.getAttribute('data-countries'),
              w = t.getAttribute('data-recaptcha-key'),
              S =
                '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="27" height="27" rx="5.5" fill="white"/><rect x="0.5" y="0.5" width="27" height="27" rx="5.5" stroke="#E1E4EA"/><path d="M11.2979 20.7568C12.1931 20.7571 12.9188 21.4826 12.9189 22.3779C12.9189 23.2734 12.1932 23.9998 11.2979 24C10.4023 24 9.67578 23.2735 9.67578 22.3779C9.67597 21.4825 10.4024 20.7568 11.2979 20.7568ZM16.7021 21.2969C17.2991 21.2969 17.783 21.781 17.7832 22.3779C17.7832 22.975 17.2992 23.459 16.7021 23.459C16.1052 23.4588 15.6211 22.9749 15.6211 22.3779C15.6213 21.7811 16.1054 21.2971 16.7021 21.2969ZM5.62109 21.5674C6.06875 21.5674 6.43142 21.9303 6.43164 22.3779C6.43164 22.8257 6.06889 23.1895 5.62109 23.1895C5.17335 23.1894 4.81055 22.8257 4.81055 22.3779C4.81077 21.9304 5.17349 21.5674 5.62109 21.5674ZM22.3779 21.5674C22.8256 21.5674 23.1892 21.9303 23.1895 22.3779C23.1895 22.8257 22.8257 23.1895 22.3779 23.1895C21.9304 23.1892 21.5674 22.8256 21.5674 22.3779C21.5676 21.9305 21.9305 21.5676 22.3779 21.5674ZM16.7021 8.32422C18.3439 8.32422 19.6755 9.65516 19.6758 11.2969C19.6758 12.4988 18.9609 13.5314 17.9346 14C18.9609 14.4686 19.6758 15.5012 19.6758 16.7031C19.6756 18.3449 18.344 19.6758 16.7021 19.6758C15.5005 19.6756 14.4676 18.9616 13.999 17.9355C13.5302 18.9614 12.4984 19.6758 11.2969 19.6758C9.6551 19.6757 8.32441 18.3449 8.32422 16.7031C8.32422 15.5017 9.03781 14.4688 10.0635 14C9.03783 13.5311 8.32422 12.4983 8.32422 11.2969C8.32447 9.65519 9.65514 8.32425 11.2969 8.32422C12.4981 8.32422 13.5301 9.03812 13.999 10.0635C14.4678 9.03794 15.5009 8.32439 16.7021 8.32422ZM22.3779 15.0811C23.2735 15.0811 24 15.8075 24 16.7031C23.9998 17.5985 23.2734 18.3242 22.3779 18.3242C21.4826 18.3241 20.7571 17.5984 20.7568 16.7031C20.7568 15.8076 21.4824 15.0812 22.3779 15.0811ZM5.62109 15.6221C6.21816 15.6221 6.70215 16.1061 6.70215 16.7031C6.7019 17.3 6.218 17.7842 5.62109 17.7842C5.02421 17.7842 4.54029 17.3 4.54004 16.7031C4.54004 16.1061 5.02405 15.6221 5.62109 15.6221ZM13.999 12.5293C13.702 13.1797 13.1797 13.703 12.5293 14C13.1794 14.2969 13.7019 14.8197 13.999 15.4697C14.2959 14.8199 14.819 14.2971 15.4688 14C14.8188 13.7028 14.2958 13.1795 13.999 12.5293ZM5.62207 9.67578C6.51734 9.67603 7.24298 10.4016 7.24316 11.2969C7.24316 12.1923 6.51746 12.9187 5.62207 12.9189C4.72648 12.9189 4 12.1925 4 11.2969C4.00018 10.4014 4.72659 9.67578 5.62207 9.67578ZM22.3779 10.2158C22.9749 10.2158 23.4588 10.7 23.459 11.2969C23.459 11.8939 22.975 12.3779 22.3779 12.3779C21.781 12.3777 21.2969 11.8938 21.2969 11.2969C21.2971 10.7001 21.7811 10.216 22.3779 10.2158ZM16.7021 4C17.5977 4 18.3242 4.72648 18.3242 5.62207C18.324 6.51746 17.5976 7.24316 16.7021 7.24316C15.8068 7.24305 15.0813 6.51738 15.0811 5.62207C15.0811 4.72655 15.8067 4.00012 16.7021 4ZM11.2969 4.54102C11.8939 4.54102 12.3779 5.02501 12.3779 5.62207C12.3777 6.21892 11.8938 6.70312 11.2969 6.70312C10.7 6.7031 10.2161 6.2189 10.2158 5.62207C10.2158 5.02502 10.6998 4.54104 11.2969 4.54102ZM5.62109 4.81055C6.06889 4.81055 6.43164 5.17427 6.43164 5.62207C6.43142 6.06968 6.06875 6.43262 5.62109 6.43262C5.17349 6.43256 4.81077 6.06964 4.81055 5.62207C4.81055 5.17431 5.17335 4.81061 5.62109 4.81055ZM22.3779 4.81055C22.8257 4.81055 23.1895 5.17427 23.1895 5.62207C23.1892 6.06968 22.8256 6.43262 22.3779 6.43262C21.9305 6.43236 21.5676 6.06952 21.5674 5.62207C21.5674 5.17443 21.9304 4.81081 22.3779 4.81055Z" fill="#0E121B"/></svg>';
            g &&
              (S = '<img src="'.concat(
                g,
                '" alt="logo" style="width:28px;height:28px;object-fit:contain;display:block;margin:auto;" onerror="this.style.display=\'none\'">'
              ));
            var M = t.getAttribute('data-dynamic'),
              A = {};
            if (M)
              try {
                A = JSON.parse(M);
              } catch (e) {
                console.error(
                  'Retell Widget: Failed to parse data-dynamic JSON',
                  e
                );
              }
            var L,
              T = 'true' === t.getAttribute('data-auto-open'),
              z = t.getAttribute('data-popup-message'),
              O = t.getAttribute('data-bot-name'),
              G = t.getAttribute('data-show-ai-popup-time'),
              P = G ? parseInt(G, 10) : 0,
              H = T,
              F = z && !T,
              R = localStorage.getItem('LS_CHAT_ID') || null,
              V = JSON.parse(localStorage.getItem('LS_CHAT_HISTORY') || '[]'),
              D = JSON.parse(localStorage.getItem('LS_CHAT_LIST') || '[]'),
              Z = null,
              K = (function (e) {
                var t = e.robotSVG,
                  o = e.hamburgerSVG,
                  a = e.minimizeSVG,
                  l = e.closeSVG,
                  r = e.checkFillSVG,
                  c = e.arrowLeftSVG,
                  d = e.chatTitle,
                  s = e.widgetType,
                  m = void 0 === s ? 'chat' : s,
                  u = e.onFabClick,
                  p = e.onMinimize,
                  f = e.onClose,
                  g = e.onModalYes,
                  b = e.onModalNo,
                  h = e.onFormSubmit,
                  y = e.onAiMessageClose,
                  x = e.onCallbackSubmit,
                  v = e.onMaybeLater,
                  w = e.customColor,
                  j = e.aiMessage,
                  k = e.botName,
                  _ = e.termsAndConditionsUrl,
                  C = e.countriesFilter,
                  S = document.createElement('div');
                (S.style.position = 'fixed'),
                  (S.style.bottom = '24px'),
                  (S.style.right = '24px'),
                  (S.style.zIndex = '999999'),
                  document.body.appendChild(S);
                var I = S.attachShadow({ mode: 'open' }),
                  M = document.createElement('style'),
                  B = w,
                  A = w,
                  L = w;
                (M.textContent =
                  '\n    .retell-fab {\n      width: 56px;\n      height: 56px;\n      border-radius: 50%;\n      background: '
                    .concat(
                      B,
                      ';\n      color: #fff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 32px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.2);\n      cursor: pointer;\n      transition: background 0.2s, transform 0.2s ease;\n      border: none;\n      padding: 0;\n      position: relative;\n      overflow: hidden;\n    }\n    .retell-fab:hover {\n      transform: scale(1.1);\n    }\n    .retell-fab:hover::after {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(255,255,255,0.1);\n      border-radius: 50%;\n      pointer-events: none;\n    }\n    .retell-fab svg { display: block; }\n    .retell-chat-window {\n      width: 360px;\n      height: '
                    )
                    .concat(
                      'callback' === m ? 'auto' : '548px',
                      ';\n      max-height: '
                    )
                    .concat(
                      'callback' === m ? '400px' : '548px',
                      ";\n      background: #fff;\n      border-radius: 16px;\n      border: 1px solid #cad0d8;\n      box-shadow: 0 4px 24px rgba(0,0,0,0.10);\n      position: absolute;\n      bottom: 70px;\n      right: 0;\n      display: flex;\n      flex-direction: column;\n      overflow: hidden; /* prevent inner content from clipping rounded corners */\n      background-clip: padding-box; /* crisper corners/border */\n      font-family: 'Inter', Arial, sans-serif;\n      animation: fadeIn 0.2s;\n    }\n    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none; } }\n    .retell-header { display: flex; align-items: center; background: "
                    )
                    .concat(
                      A,
                      '; color: #fff; padding: 0 0 0 8px; font-weight: bold; position: relative; height: 48px; border-top-left-radius: 16px; border-top-right-radius: 16px; }\n    .retell-hamburger { background: none; border: none; color: #fff; font-size: 24px; margin-right: 12px; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; }\n    .retell-header-title { flex: 1; text-align: left; font-size: 17px; font-weight: 400; }\n    .retell-minimize { background: none; border: none; color: #fff; font-size: 22px; cursor: pointer; width: 40px; height: 40px; margin-right: 2px; display: flex; align-items: center; justify-content: center; }\n    .retell-close { position: static; background: none; border: none; color: #fff; font-size: 22px; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; }\n    .retell-sidebar {\n      position: absolute;\n      left: 0;\n      top: 48px; /* below header */\n      bottom: 0;\n      width: 260px;\n      background: #fff;\n      box-shadow: 2px 0 8px rgba(0,0,0,0.08);\n      z-index: 10;\n      display: none;\n      flex-direction: column;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 8px;\n      animation: sidebarIn 0.2s;\n    }\n    @keyframes sidebarIn { from { transform: translateX(-100%); opacity: 0; } to { transform: none; opacity: 1; } }\n    .retell-chat-list {\n      flex: 1;\n      overflow-y: auto;\n      padding: 0;\n      background: #fff;\n    }\n    .retell-chat-list-item {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      padding: 16px 18px 12px 18px;\n      border-bottom: 1px solid #ececec;\n      cursor: pointer;\n      background: #fff;\n      transition: background 0.2s;\n    }\n    .retell-chat-list-item.selected, .retell-chat-list-item:hover {\n      background: #f7f8fa;\n    }\n    .retell-chat-list-item-content {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n    }\n    .retell-chat-list-item-title {\n      font-weight: 500;\n      font-size: 15px;\n      color: #222;\n      margin-bottom: 2px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .retell-chat-list-item-date {\n      font-size: 13px;\n      color: #B0B0B0;\n      margin-top: 1px;\n    }\n    .retell-chat-list-item-arrow {\n      color: #B0B0B0;\n      font-size: 18px;\n      margin-left: 12px;\n    }\n    .retell-messages { flex: 1; padding: 18px 14px 12px 14px; overflow-y: auto; background:rgb(255, 255, 255); display: flex; flex-direction: column; }\n    .retell-input-row {\n      display: flex;\n      align-items: center;\n      border-top: 1px solid #eee;\n      background: #fff;\n      padding: 16px 16px 8px 16px;\n      box-sizing: border-box;\n      width: 100%;\n      gap: 8px;\n    }\n    .retell-input {\n      flex: 1;\n      border: 1px solid #CACFD8;\n      border-radius: 8px;\n      padding: 12px 14px;\n      font-size: 16px;\n      background: #fff;\n      margin: 0;\n      outline: none;\n      box-sizing: border-box;\n      transition: border 0.2s;\n    }\n      \n    .retell-send-btn {\n      background: '
                    )
                    .concat(
                      L,
                      ';\n      color: #fff;\n      border: none;\n      border-radius: 8px;\n      padding: 12px 18px;\n      cursor: pointer;\n      font-size: 18px;\n      margin-left: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: background 0.2s;\n      height: auto;\n      min-width: 0;\n      position: relative;\n      overflow: hidden;\n    }\n    .retell-send-btn:hover::after,\n    .retell-send-btn:active::after,\n    .retell-send-btn:focus::after {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(255,255,255,0.1);\n      border-radius: 8px;\n      pointer-events: none;\n    }\n    .retell-msg { padding: 9px 12px; border-radius: 16px; margin-bottom: 4px; }\n    .retell-msg.user { background: #D5E2FF; color: #0E121B; align-self: flex-end; border-radius: 16px 16px 4px 16px; margin-left: 40px; margin-right: 0; }\n    .retell-msg.agent-row { display: flex; align-items: flex-start; padding-left: 0px;}\n    .retell-msg.agent-row.consecutive { margin-top: -12px; padding-top: 0px;}\n    .retell-msg.agent { background: #F2F5F8; color: #0E121B; align-self: flex-start; border-radius: 16px 16px 16px 4px; display: block; margin-left: 0; margin-right: 40px; min-width: 0; }\n    .retell-agent-logo { width: 28px; height: 28px; margin-right: 8px; margin-top: 2px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }\n    .retell-footer {\n      font-size: 13px;\n      color: #b0b0b0;\n      text-align: left;\n      padding: 6px 18px 8px 18px;\n      background: #fff;\n      border-top: 1px solid #f0f0f0;\n      letter-spacing: 0.01em;\n      position: static;\n    }\n    .retell-footer strong { color: #0d1123; }\n    .retell-modal { position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.18); display: flex; align-items: center; justify-content: center; z-index: 100; }\n    .retell-modal-content { background: #fff; border-radius: 12px; padding: 32px 28px 24px 28px; box-shadow: 0 4px 24px rgba(0,0,0,0.18); text-align: center; min-width: 260px; }\n    .retell-modal-content p { font-size: 19px; margin-bottom: 24px; color: #0d1123; }\n    .retell-modal-btn-row { display: flex; flex-direction: column; gap: 12px; }\n    .retell-modal-btn { font-size: 16px; padding: 10px 0; border-radius: 8px; border: 1px solid #d1d5db; background: #fff; color: #0d1123; cursor: pointer; transition: background 0.2s, border 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; }\n    .retell-modal-btn.selected, .retell-modal-btn:hover { background: #e0e7ef; border: 1.5px solid #0d1123; }\n    .retell-modal-btn svg { font-size: 18px; }\n    @media (max-width: 600px) {\n      .retell-chat-window {\n      width: 90vw !important;\n      height: '
                    )
                    .concat(
                      'callback' === m ? 'auto' : '70vh',
                      ' !important;\n      min-width: 0;\n      min-height: 0;\n      max-width: 98vw;\n      max-height: '
                    )
                    .concat(
                      'callback' === m ? '400px' : '90vh',
                      ";\n      left: 0 !important;\n      right: 0 !important;\n      bottom: 90px !important;\n      top: auto !important;\n      margin: 0 auto !important;\n      border-radius: 16px !important;\n      position: fixed !important;\n      box-shadow: 0 2px 16px rgba(0,0,0,0.18);\n      z-index: 999999;\n    }\n    .retell-fab {\n      right: 16px !important;\n      bottom: 16px !important;\n      left: auto !important;\n    }\n    }\n    .retell-powered-by {\n      margin-top: auto;\n  font-size: 9px;\n  color: #b0b0b0;\n  text-align: left;\n  margin-left: 16px;\n  margin-bottom: 8px;\n  letter-spacing: 0.01em;\n  font-family: 'Inter', Arial, sans-serif;\n    }\n    .retell-powered-by strong { color: #0d1123; }\n    .retell-ai-message-modal {\n      position: fixed;\n      bottom: 100px;\n      right: 24px;\n      z-index: 999999;\n      pointer-events: none;\n    }\n    .retell-ai-message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      gap: 8px;\n      pointer-events: auto;\n    }\n    .retell-ai-message-bubble {\n      background: #ffffff;\n      border: 1px solid rgba(14, 18, 27, 0.01);\n      border-radius: 8px;\n      box-shadow: 0px 16px 32px -12px rgba(14, 18, 27, 0.1);\n      padding: 12px 16px;\n      max-width: 320px;\n      width: 320px;\n      cursor: pointer;\n      transition: transform 0.2s ease, box-shadow 0.2s ease;\n    }\n    .retell-ai-message-bubble:hover {\n      transform: translateY(-2px);\n      box-shadow: 0px 20px 40px -12px rgba(14, 18, 27, 0.15);\n    }\n    .retell-ai-message-content {\n      font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;\n      font-size: 14px;\n      line-height: 22px;\n      color: #0e121b;\n      margin-bottom: 8px;\n      word-break: break-word;\n      cursor: pointer;\n    }\n    .retell-ai-message-footer {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, sans-serif;\n      font-size: 12px;\n      line-height: 20px;\n    }\n    .retell-ai-message-bot-name {\n      color: #8f959e;\n    }\n    .retell-ai-message-close {\n      background: none;\n      border: none;\n      color: #525866;\n      font-size: 12px;\n      cursor: pointer;\n      padding: 0;\n      margin: 0;\n      font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, sans-serif;\n    }\n    .retell-ai-message-close:hover {\n      color: #0e121b;\n    }\n    \n    /* Callback Widget Styles */\n\n    #retell-firstname-input {\n      border-radius: 8px 0 0 8px;\n      border-right: none;\n    }\n    #retell-lastname-input {\n    border-radius: 0 8px 8px 0;\n    }\n    .retell-callback-form {\n      padding: 16px;\n      background: #ffffff;\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      border-radius: 12px;\n      box-shadow: 0px 16px 32px -12px rgba(14,18,27,0.1);\n      border: 1px solid rgba(14,18,27,0.01);\n      margin: 0;\n      box-sizing: border-box;\n    }\n    .retell-callback-header {\n      display: flex;\n      flex-direction: column;\n      gap: 2px;\n    }\n    .retell-callback-title {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      height: 24px;\n    }\n    .retell-callback-title-icon {\n      font-size: 15px;\n      color: #0e121b;\n      line-height: 24px;\n    }\n    .retell-callback-title-text {\n      font-family: 'Inter', Arial, sans-serif;\n      font-size: 16px;\n      font-weight: 500;\n      color: #0e121b;\n      line-height: 24px;\n      letter-spacing: -0.176px;\n    }\n    .retell-callback-subtitle {\n      font-family: 'Inter', Arial, sans-serif;\n      font-size: 14px;\n      color: #1f2329;\n      line-height: 20px;\n      letter-spacing: -0.084px;\n    }\n    .retell-callback-note {\n      font-family: 'Inter', Arial, sans-serif;\n      font-size: 12px;\n      color: #525866;\n      line-height: 16px;\n    }\n    .retell-callback-form-content {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n      width: 308px;\n    }\n    .retell-callback-name-group {\n      display: flex;\n      gap: 0;\n      width: 100%;\n    }\n    .retell-callback-name-group .retell-callback-input-group {\n      flex: 1;\n      margin-bottom: 0;\n    }\n    .retell-callback-name-group .retell-callback-input-group:first-child {\n      border-right: 1px solid #e1e4ea;\n    }\n    /* Ensure only a single divider line between first and last name */\n    .retell-callback-name-group .retell-callback-input-group:first-child .retell-input {\n      border-right: none;\n      border-radius: 8px 0 0 8px;\n    }\n    .retell-callback-name-group .retell-callback-input-group:last-child .retell-input {\n      border-left: none;\n      border-radius: 0 8px 8px 0;\n    }\n    .retell-callback-input-group {\n      margin-bottom: 0;\n    }\n    .retell-callback-input-group .retell-input {\n      width: 100%;\n      box-sizing: border-box;\n      margin: 0;\n      border: 1px solid #e1e4ea;\n      border-radius: 8px;\n      padding: 10px 12px;\n      font-size: 14px;\n      background: #ffffff;\n      outline: none;\n      transition: all 0.2s;\n      color: #99a0ae;\n      font-family: 'Inter', Arial, sans-serif;\n      line-height: 20px;\n      letter-spacing: -0.084px;\n    }\n    .retell-callback-input-group .retell-input:focus,\n    .retell-callback-input-group .retell-input:not(:placeholder-shown) {\n      border-color: #e1e4ea;\n      color: #0e121b;\n    }\n    .retell-callback-input-group .retell-input::placeholder {\n      color: #99a0ae;\n    }\n    .retell-callback-phone-group {\n      display: flex;\n      align-items: center;\n      border: 1px solid #e1e4ea;\n      border-radius: 8px;\n      overflow: visible;\n      box-shadow: 0px 1px 2px 0px rgba(10,13,20,0.03);\n      position: relative;\n    }\n    .retell-callback-country-dropdown {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      padding: 10px 12px;\n      background: #ffffff;\n      border-right: 1px solid #e1e4ea;\n      border-radius: 8px 0 0 8px;\n      cursor: pointer;\n      min-width: 80px;\n      outline: none;\n      box-sizing: border-box;\n      height: 100%;\n    }\n    \n    .retell-callback-country-dropdown:focus {\n      outline: 2px solid #e1e4ea;\n      outline-offset: -2px;\n    }\n    .retell-callback-country-flag {\n      font-size: 20px;\n    }\n    .retell-callback-country-code {\n      font-family: 'Inter', Arial, sans-serif;\n      font-size: 14px;\n      color: #0e121b;\n      line-height: 20px;\n      letter-spacing: -0.084px;\n    }\n    .retell-callback-dropdown-arrow {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: transform 0.2s;\n    }\n    .retell-callback-dropdown-arrow svg {\n      width: 16px;\n      height: 16px;\n      fill: #99a0ae;\n    }\n    .retell-callback-country-dropdown.open .retell-callback-dropdown-arrow {\n      transform: rotate(180deg);\n    }\n    .retell-callback-phone-group .retell-input {\n      border: none;\n      border-radius: 0 8px 8px 0;\n      flex: 1;\n      border-left: none; /* single divider handled by dropdown's border-right */\n      height: 100%;\n      color: #99a0ae;\n      transition: color 0.2s;\n    }\n    .retell-callback-phone-group .retell-input:focus,\n    .retell-callback-phone-group .retell-input:not(:placeholder-shown) {\n      color: #0e121b;\n    }\n    .retell-callback-phone-group {\n      position: relative;\n      height: 42px;\n    }\n    .retell-country-dropdown-list {\n      position: fixed;\n      bottom: auto;\n      left: auto;\n      right: auto;\n      background: #ffffff;\n      border: 1px solid #e1e4ea;\n      border-radius: 8px;\n      box-shadow: 0px 4px 12px rgba(14,18,27,0.1);\n      z-index: 999999;\n      max-height: 300px;\n      overflow: hidden;\n      margin-bottom: 4px;\n      width: 308px;\n    }\n    .retell-country-search {\n      padding: 12px;\n      border-bottom: 1px solid #e1e4ea;\n    }\n    .retell-country-search input {\n      width: 90%;\n      border: 1px solid #e1e4ea;\n      border-radius: 6px;\n      padding: 8px 12px;\n      font-size: 14px;\n      outline: none;\n      font-family: 'Inter', Arial, sans-serif;\n    }\n    .retell-country-search input:focus {\n      border-color: #e1e4ea;\n    }\n    .retell-country-options {\n      max-height: 250px;\n      min-height: 250px;\n      overflow-y: auto;\n    }\n    .retell-country-option {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 12px;\n      cursor: pointer;\n      transition: background 0.2s;\n      border-bottom: 1px solid #f5f5f5;\n    }\n    .retell-country-option:hover {\n      background: #f8f9fa;\n    }\n    .retell-country-option.selected {\n      background: #e8f0ff;\n    }\n    .retell-country-option-left {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n    }\n    .retell-country-flag {\n      font-size: 20px;\n      width: 24px;\n      text-align: center;\n      margin-left: 8px;\n    }\n    .retell-country-name {\n      font-family: 'Inter', Arial, sans-serif;\n      font-size: 14px;\n      color: #0e121b;\n      line-height: 20px;\n    }\n    .retell-country-phone {\n      font-family: 'Inter', Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 500;\n      color: #0e121b;\n      line-height: 20px;\n    }\n    .retell-callback-checkbox-group {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      height: 20px;\n    }\n    .retell-callback-checkbox {\n      width: 16px;\n      height: 16px;\n      margin: 0; /* reset UA default margins that create left gap */\n      accent-color: #000000;\n      background: #e1e4ea;\n      border-radius: 4px;\n    }\n    .retell-callback-checkbox-label {\n      font-family: 'Inter', Arial, sans-serif;\n      font-size: 14px;\n      color: #525866;\n      line-height: 20px;\n      letter-spacing: -0.084px;\n    }\n    .retell-privacy-policy-link {\n      color: #335cff;\n      text-decoration: none;\n      cursor: pointer;\n      transition: color 0.2s;\n    }\n    .retell-privacy-policy-link:hover {\n      color: #1a3fd9;\n      text-decoration: underline;\n    }\n    .retell-callback-actions {\n      display: flex;\n      flex-direction: column;\n      gap: 6px;\n      align-items: center;\n      width: 100%;\n    }\n    .retell-callback-form .retell-send-btn {\n      width: 100%;\n      height: 40px;\n      background: "
                    )
                    .concat(
                      w,
                      ";\n      border: none;\n      border-radius: 10px;\n      padding: 10px;\n      color: #ffffff;\n      font-family: 'Inter', Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 500;\n      cursor: pointer;\n      transition: all 0.2s;\n      line-height: 20px;\n      letter-spacing: -0.084px;\n    }\n    .retell-callback-form .retell-send-btn:hover:not(:disabled) {\n      background: "
                    )
                    .concat(
                      w,
                      ";\n      filter: brightness(0.9);\n    }\n    .retell-callback-form .retell-send-btn:disabled {\n      background: #9ca3af;\n      color: #ffffff;\n      cursor: not-allowed;\n      opacity: 0.6;\n    }\n    .retell-maybe-later {\n      text-align: center;\n      font-family: 'Inter', Arial, sans-serif;\n      font-size: 12px;\n      color: #525866;\n      cursor: pointer;\n      line-height: 16px;\n    }\n    .retell-maybe-later:hover {\n      color: #0e121b;\n    }\n\n    /* Success Widget Styles */\n    .retell-success-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      gap: 24px;\n      padding: 16px;\n      height: 100%;\n      min-height: 314px;\n    }\n\n    .retell-success-icon {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 42px;\n      height: 42px;\n    }\n\n    .retell-success-content {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 2px;\n      text-align: center;\n      max-width: 260px;\n    }\n\n    .retell-success-title {\n      font-family: 'Inter', sans-serif;\n      font-size: 16px;\n      font-weight: 500;\n      line-height: 24px;\n      color: #0e121b;\n      margin: 0;\n      letter-spacing: -0.176px;\n    }\n\n    .retell-success-subtitle {\n      font-family: 'Inter', sans-serif;\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 20px;\n      color: #1f2329;\n      margin: 0;\n      text-align: center;\n      letter-spacing: -0.084px;\n    }\n\n    .retell-success-actions {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 8px;\n      width: 100%;\n    }\n\n    .retell-got-it-btn {\n      background: #ffffff;\n      border: 1px solid #e1e4ea;\n      border-radius: 10px;\n      padding: 10px 16px;\n      font-family: 'Inter', sans-serif;\n      font-size: 14px;\n      font-weight: 500;\n      line-height: 20px;\n      color: #525866;\n      cursor: pointer;\n      box-shadow: 0px 1px 2px 0px rgba(10,13,20,0.03);\n      transition: all 0.2s ease;\n      width: 100%;\n      max-width: 360px;\n    }\n\n    .retell-got-it-btn:hover {\n      background: #f8f9fa;\n      border-color: #d1d5db;\n    }\n\n    .retell-got-it-btn:active {\n      transform: translateY(1px);\n    }\n\n    /* Error Message Styles */\n    .retell-error-message {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      gap: 24px;\n      padding: 16px;\n      height: 100%;\n      min-height: 314px;\n    }\n\n    .retell-error-icon {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 42px;\n      height: 42px;\n      font-size: 32px;\n    }\n\n    .retell-error-content {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 2px;\n      text-align: center;\n      max-width: 260px;\n    }\n\n    .retell-error-title {\n      font-family: 'Inter', sans-serif;\n      font-size: 16px;\n      font-weight: 500;\n      line-height: 24px;\n      color: #0e121b;\n      margin: 0;\n      letter-spacing: -0.176px;\n    }\n\n    .retell-error-subtitle {\n      font-family: 'Inter', sans-serif;\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 20px;\n      color: #1f2329;\n      margin: 0;\n      text-align: center;\n      letter-spacing: -0.084px;\n    }\n\n    .retell-error-actions {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 8px;\n      width: 100%;\n    }\n .retell-loading-indicator {display: flex;align-items: center;gap: 5px;background: #F2F5F8;color: #0E121B;align-self: flex-start;border-radius: 16px 16px 16px 4px;padding: 13px 16px;margin-left: 36px;min-width: 0;} .retell-loading-indicator .retell-dot {  width: 8px; height: 8px;background-color: #99A0AE;border-radius: 50%;animation: bounce 1.4s infinite ease-in-out both;}.retell-loading-indicator .retell-dot:nth-child(1) {animation-delay: -0.32s;}.retell-loading-indicator .retell-dot:nth-child(2) {animation-delay: -0.16s;}@keyframes bounce { 0%, 80%, 100% {transform: scale(0);}40% {transform: scale(1.0);}}"
                    )),
                  I.appendChild(M),
                  (I.innerHTML +=
                    '\n    <div class="retell-fab" id="retell-fab" title="'
                      .concat(
                        'callback' === m ? 'Request Callback' : 'Chat',
                        '">'
                      )
                      .concat(
                        t,
                        '</div>\n    <div class="retell-chat-window" id="retell-chat" style="display:none;">\n      '
                      )
                      .concat(
                        'callback' === m
                          ? '<div class="retell-callback-form" id="retell-callback-form">'.concat(
                              n,
                              '</div>'
                            )
                          : '\n        <div class="retell-header">\n          <button class="retell-hamburger" id="retell-hamburger"></button>\n          <span class="retell-header-title" id="retell-header-title"></span>\n          <button class="retell-minimize" id="retell-minimize"></button>\n          <button class="retell-close" id="retell-close"></button>\n        </div>\n        <div class="retell-sidebar" id="retell-sidebar">\n          <div class="retell-chat-list" id="retell-chat-list"></div>\n        </div>\n        <div class="retell-messages" id="retell-messages"></div>\n        <form class="retell-input-row" id="retell-form">\n          <input class="retell-input" id="retell-input" autocomplete="off" placeholder="Ask a detailed question..." />\n          <button class="retell-send-btn" type="submit">➤</button>\n        </form>\n        <div class="retell-powered-by">Powered by Syntalia</div>\n      ',
                        '\n      <div class="retell-modal" id="retell-modal" style="display:none;">\n        <div class="retell-modal-content">\n          <p>Do you want to end this chat?</p>\n          <div class="retell-modal-btn-row">\n            <button class="retell-modal-btn" id="retell-modal-yes"></button>\n            <button class="retell-modal-btn" id="retell-modal-no"></button>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    \x3c!-- AI Message Modal --\x3e\n    <div class="retell-ai-message-modal" id="retell-ai-message-modal" style="display:none;">\n      <div class="retell-ai-message-container">\n        <div class="retell-ai-message-bubble">\n          <div class="retell-ai-message-content" id="retell-ai-message-content">\n            '
                      )
                      .concat(
                        j ||
                          "Hello! I'm here to help you. How can I assist you today?",
                        '\n          </div>\n          <div class="retell-ai-message-footer">\n            <span class="retell-ai-message-bot-name" id="retell-ai-message-bot-name">'
                      )
                      .concat(
                        k || 'AI Assistant',
                        '</span>\n            <button class="retell-ai-message-close" id="retell-ai-message-close">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
                      ));
                var E,
                  T,
                  N,
                  z,
                  O,
                  G,
                  P,
                  H,
                  F,
                  R,
                  V,
                  D,
                  Z,
                  K,
                  U,
                  q,
                  W = I.getElementById('retell-fab'),
                  J = I.getElementById('retell-chat'),
                  Y = I.getElementById('retell-modal'),
                  Q = I.getElementById('retell-modal-yes'),
                  X = I.getElementById('retell-modal-no'),
                  $ = I.getElementById('retell-ai-message-modal'),
                  ee = I.getElementById('retell-ai-message-content'),
                  ne = I.getElementById('retell-ai-message-bot-name'),
                  te = I.getElementById('retell-ai-message-close');
                if ('callback' === m) {
                  var oe = i(I, x, v, _, C);
                  oe &&
                    ((R = oe.callbackForm),
                    (V = oe.firstNameInput),
                    (D = oe.lastNameInput),
                    (Z = oe.phoneInput),
                    (K = oe.privacyCheckbox),
                    (U = oe.callbackSubmit),
                    (q = oe.maybeLaterBtn));
                } else
                  (E = I.getElementById('retell-close')),
                    (T = I.getElementById('retell-minimize')),
                    (N = I.getElementById('retell-messages')),
                    (z = I.getElementById('retell-hamburger')),
                    (O = I.getElementById('retell-sidebar')),
                    (G = I.getElementById('retell-chat-list')),
                    (P = I.getElementById('retell-header-title')),
                    (H = I.getElementById('retell-form')),
                    (F = I.getElementById('retell-input')),
                    (z.innerHTML = o),
                    (T.innerHTML = a),
                    (E.innerHTML = l),
                    (P.textContent = d),
                    (T.onclick = p),
                    (E.onclick = f),
                    (z.onclick = function () {
                      'flex' === O.style.display
                        ? (O.style.display = 'none')
                        : (O.style.display = 'flex');
                    }),
                    (H.onsubmit = h);
                return (
                  (Q.innerHTML = r + " Yes, I'm done"),
                  (X.innerHTML = c + ' No, go back'),
                  (W.onclick = u),
                  'callback' === m && ((U.onclick = x), (q.onclick = v)),
                  (Q.onclick = g),
                  (X.onclick = b),
                  (te.onclick = y),
                  $.addEventListener('click', function (e) {
                    e.target === te ||
                      e.target.closest('.retell-ai-message-close') ||
                      u();
                  }),
                  {
                    widgetContainer: S,
                    shadow: I,
                    fab: W,
                    chat: J,
                    closeBtn: E,
                    minimizeBtn: T,
                    messagesDiv: N,
                    form: H,
                    input: F,
                    hamburger: z,
                    sidebar: O,
                    chatList: G,
                    modal: Y,
                    modalYes: Q,
                    modalNo: X,
                    headerTitle: P,
                    focusInput: function () {
                      F && F.focus();
                    },
                    aiMessageModal: $,
                    aiMessageContent: ee,
                    aiMessageBotName: ne,
                    aiMessageClose: te,
                    callbackForm: R,
                    firstNameInput: V,
                    lastNameInput: D,
                    phoneInput: Z,
                    privacyCheckbox: K,
                    callbackSubmit: U,
                    maybeLaterBtn: q
                  }
                );
              })(
                N(
                  N(
                    N(
                      N(
                        {
                          robotSVG:
                            'callback' === c
                              ? '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0999 12.9779V16.1603C17.1 16.3882 17.0137 16.6076 16.8583 16.7743C16.703 16.941 16.4902 17.0426 16.2629 17.0585C15.8696 17.0855 15.5483 17.0999 15.2999 17.0999C7.3466 17.0999 0.899902 10.6532 0.899902 2.6999C0.899902 2.4515 0.913402 2.1302 0.941302 1.7369C0.957252 1.5096 1.05883 1.29681 1.22553 1.14147C1.39223 0.986128 1.61164 0.899799 1.8395 0.899903H5.0219C5.13354 0.89979 5.24123 0.941175 5.32406 1.01602C5.40689 1.09087 5.45894 1.19383 5.4701 1.3049C5.4908 1.5119 5.5097 1.6766 5.5277 1.8017C5.70656 3.04993 6.0731 4.26395 6.6149 5.4026C6.7004 5.5826 6.6446 5.7977 6.4826 5.9129L4.5404 7.3007C5.72791 10.0677 7.933 12.2728 10.7 13.4603L12.086 11.5217C12.1427 11.4425 12.2253 11.3857 12.3195 11.3612C12.4138 11.3367 12.5136 11.346 12.6017 11.3876C13.7402 11.9284 14.9539 12.294 16.2017 12.4721C16.3268 12.4901 16.4915 12.5099 16.6967 12.5297C16.8076 12.5411 16.9104 12.5932 16.985 12.676C17.0597 12.7588 17.1009 12.8664 17.1008 12.9779H17.0999Z" fill="white"/></svg>'
                              : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.125 4.5C13.125 4.83319 12.9802 5.13254 12.75 5.33854V6.75H16.5C17.7427 6.75 18.75 7.75736 18.75 9V16.5C18.75 17.7427 17.7427 18.75 16.5 18.75H7.5C6.25736 18.75 5.25 17.7427 5.25 16.5V9C5.25 7.75736 6.25736 6.75 7.5 6.75H11.25V5.33854C11.0198 5.13254 10.875 4.83319 10.875 4.5C10.875 3.87868 11.3787 3.375 12 3.375C12.6213 3.375 13.125 3.87868 13.125 4.5ZM7.5 8.25C7.08579 8.25 6.75 8.58579 6.75 9V16.5C6.75 16.9142 7.08579 17.25 7.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V9C17.25 8.58579 16.9142 8.25 16.5 8.25H12.75H11.25H7.5ZM4.5 10.5H3V15H4.5V10.5ZM19.5 10.5H21V15H19.5V10.5ZM9.75 13.875C10.3713 13.875 10.875 13.3713 10.875 12.75C10.875 12.1287 10.3713 11.625 9.75 11.625C9.12868 11.625 8.625 12.1287 8.625 12.75C8.625 13.3713 9.12868 13.875 9.75 13.875ZM14.25 13.875C14.8713 13.875 15.375 13.3713 15.375 12.75C15.375 12.1287 14.8713 11.625 14.25 11.625C13.6287 11.625 13.125 12.1287 13.125 12.75C13.125 13.3713 13.6287 13.875 14.25 13.875Z" fill="white"/></svg>',
                          retellLogoSVG: S,
                          hamburgerSVG:
                            '<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.25 0H13.75V1.5H0.25V0ZM0.25 5.25H13.75V6.75H0.25V5.25ZM0.25 10.5H13.75V12H0.25V10.5Z" fill="white"/></svg>',
                          minimizeSVG:
                            '<svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.25H11.25V1.75H0.75V0.25Z" fill="white"/></svg>',
                          closeSVG:
                            '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00005 3.93949L8.71255 0.22699L9.77305 1.28749L6.06055 4.99999L9.77305 8.71249L8.71255 9.77299L5.00005 6.06049L1.28755 9.77299L0.227051 8.71249L3.93955 4.99999L0.227051 1.28749L1.28755 0.22699L5.00005 3.93949Z" fill="white"/></svg>',
                          checkFillSVG:
                            '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00005 12.379L15.8941 5.48425L16.9553 6.54475L9.00005 14.5L4.22705 9.727L5.28755 8.6665L9.00005 12.379Z" fill="#525866"/></svg>',
                          arrowLeftSVG:
                            '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.2045 9.99923L12.917 13.7117L11.8565 14.7722L7.0835 9.99923L11.8565 5.22623L12.917 6.28673L9.2045 9.99923Z" fill="#525866"/></svg>',
                          arrowRightSVG: e,
                          chatTitle: r,
                          widgetType: c,
                          onFabClick: ce,
                          onMinimize: function () {
                            q.style.display = 'none';
                          },
                          onClose: function () {
                            l($, !0);
                          },
                          onHamburger: function () {
                            ie(), (Q.style.display = 'flex');
                          },
                          onSidebarClose: function () {
                            Q.style.display = 'none';
                          },
                          onSidebarItemClick: se,
                          onModalYes: function () {
                            return ue.apply(this, arguments);
                          },
                          onModalNo: function () {
                            l($, !1);
                          },
                          onFormSubmit: function (e) {
                            return we.apply(this, arguments);
                          },
                          onAiMessageClose: function () {
                            ne.style.display = 'none';
                          },
                          onCallbackSubmit: pe,
                          onMaybeLater: ge
                        },
                        p ? { customColor: p } : {}
                      ),
                      h ? { termsAndConditionsUrl: h } : {}
                    ),
                    x ? { countriesFilter: x } : {}
                  ),
                  {},
                  { popupMessage: z, botName: O }
                )
              ),
              U = K.shadow,
              q = K.chat,
              W = K.messagesDiv,
              J = K.form,
              Y = K.input,
              Q = K.sidebar,
              X = K.chatList,
              $ = K.modal,
              ee = K.focusInput,
              ne = K.aiMessageModal,
              te = K.aiMessageContent,
              oe = K.aiMessageBotName;
            K.aiMessageClose,
              K.callbackForm,
              K.firstNameInput,
              K.lastNameInput,
              K.phoneInput,
              K.privacyCheckbox,
              K.callbackSubmit,
              K.maybeLaterBtn;
            ((L = E(
              B().m(function e() {
                return B().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if (
                          ((R = null),
                          (V = []),
                          ae(),
                          ie(),
                          F &&
                            z &&
                            ((te.textContent = z),
                            O && (oe.textContent = O),
                            P > 0
                              ? (Z = setTimeout(function () {
                                  ne.style.display = 'flex';
                                }, 1e3 * P))
                              : (ne.style.display = 'flex')),
                          !H)
                        ) {
                          e.n = 1;
                          break;
                        }
                        return (q.style.display = 'none'), (e.n = 1), ce();
                      case 1:
                        return e.a(2);
                    }
                }, e);
              })
            )),
            function () {
              return L.apply(this, arguments);
            })();
          } else
            console.error(
              "Retell Widget: data-phone-number attribute is required when data-widget='callback'."
            );
        } else
          console.error(
            'Retell Widget: data-public-key attribute is required.'
          );
      } else
        console.error(
          "Retell Widget: Script tag with id 'syntalia-widget' not found."
        );
      function ae() {
        !(function (e, n, t, o) {
          e.innerHTML = '';
          var a = [];
          if (
            (n.forEach(function (o, i) {
              if ('agent' === o.role) {
                a.push(o);
                var l = n[i + 1];
                (l && 'agent' === l.role) ||
                  (a.forEach(function (n, o) {
                    var a = document.createElement('div');
                    (a.className = 'retell-msg agent-row'),
                      0 === o
                        ? (a.innerHTML = "<span class='retell-agent-logo'>"
                            .concat(t, "</span><div class='retell-msg agent'>")
                            .concat(n.content, '</div>'))
                        : ((a.className = 'retell-msg agent-row consecutive'),
                          (a.innerHTML =
                            "<div class='retell-msg agent' style='margin-left: 36px;'>".concat(
                              n.content,
                              '</div>'
                            ))),
                      e.appendChild(a);
                  }),
                  (a = []));
              } else {
                var r = document.createElement('div');
                (r.className = 'retell-msg user'),
                  (r.textContent = o.content),
                  e.appendChild(r);
              }
            }),
            o)
          ) {
            var i = document.createElement('div');
            (i.style.textAlign = 'center'),
              (i.style.color = '#b0b0b0'),
              (i.style.margin = '18px 0 0 0'),
              (i.style.fontSize = '16px'),
              (i.textContent = 'Chat ended'),
              e.appendChild(i);
          }
          e.scrollTop = e.scrollHeight;
        })(
          W,
          V,
          S,
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        );
      }
      function ie() {
        !(function (e, n, t, o, a, i) {
          (e.innerHTML = ''),
            n.length
              ? n.forEach(function (n) {
                  var l = document.createElement('div');
                  (l.className =
                    'retell-chat-list-item' + (n.id === t ? ' selected' : '')),
                    (l.style.display = 'flex'),
                    (l.style.flexDirection = 'row'),
                    (l.style.alignItems = 'center'),
                    (l.style.justifyContent = 'space-between');
                  var r = document.createElement('div');
                  (r.className = 'retell-chat-list-item-content'),
                    (r.style.display = 'flex'),
                    (r.style.flexDirection = 'column'),
                    (r.style.flex = '1'),
                    (r.style.justifyContent = 'center'),
                    (r.style.maxWidth = 'calc(100% - 32px)');
                  var c = n.title || 'New chat...';
                  c.length > 40 && (c = c.slice(0, 40) + '...');
                  var d = document.createElement('div');
                  (d.className = 'retell-chat-list-item-title'),
                    (d.textContent = c),
                    (d.style.fontWeight = '500'),
                    (d.style.fontSize = '15px'),
                    (d.style.color = '#222'),
                    (d.style.whiteSpace = 'nowrap'),
                    (d.style.overflow = 'hidden'),
                    (d.style.textOverflow = 'ellipsis');
                  var s = document.createElement('div');
                  (s.className = 'retell-chat-list-item-date'),
                    (s.textContent = o(n.date)),
                    (s.style.fontSize = '13px'),
                    (s.style.color = '#B0B0B0'),
                    (s.style.marginTop = '1px'),
                    r.appendChild(d),
                    r.appendChild(s);
                  var m = document.createElement('div');
                  (m.className = 'retell-chat-list-item-arrow'),
                    (m.innerHTML = i),
                    (m.style.color = '#B0B0B0'),
                    (m.style.fontSize = '18px'),
                    (m.style.width = '24px'),
                    (m.style.display = 'flex'),
                    (m.style.alignItems = 'center'),
                    (m.style.justifyContent = 'center'),
                    (m.style.height = '100%'),
                    l.appendChild(r),
                    l.appendChild(m),
                    (l.onclick = function () {
                      return a(n.id);
                    }),
                    e.appendChild(l);
                })
              : (e.innerHTML =
                  '<div style="color:#888;text-align:center;margin-top:24px;">No previous chats</div>');
        })(X, D, R, C, se, e);
      }
      function le() {
        return re.apply(this, arguments);
      }
      function re() {
        return (re = E(
          B().m(function e() {
            var n, t;
            return B().w(
              function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      if (w) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2, null);
                    case 1:
                      if ('undefined' != typeof grecaptcha) {
                        e.n = 2;
                        break;
                      }
                      return (
                        console.error(
                          'Retell Widget: grecaptcha is not defined. Make sure to include the reCAPTCHA script.'
                        ),
                        e.a(2, null)
                      );
                    case 2:
                      if (((e.p = 2), !grecaptcha.execute)) {
                        e.n = 7;
                        break;
                      }
                      return (
                        (e.p = 3),
                        (e.n = 4),
                        grecaptcha.execute(w, { action: 'submit' })
                      );
                    case 4:
                      if (!(n = e.v)) {
                        e.n = 5;
                        break;
                      }
                      return e.a(2, n);
                    case 5:
                      e.n = 7;
                      break;
                    case 6:
                      (e.p = 6), e.v;
                    case 7:
                      return (
                        console.error(
                          'Retell Widget: No reCAPTCHA token available'
                        ),
                        e.a(2, null)
                      );
                    case 8:
                      return (
                        (e.p = 8),
                        (t = e.v),
                        console.error(
                          'Retell Widget: Failed to get reCAPTCHA token:',
                          t
                        ),
                        e.a(2, null)
                      );
                  }
              },
              e,
              null,
              [
                [3, 6],
                [2, 8]
              ]
            );
          })
        )).apply(this, arguments);
      }
      function ce() {
        return de.apply(this, arguments);
      }
      function de() {
        return (de = E(
          B().m(function e() {
            var n, t, a, i, l, r, d, s;
            return B().w(
              function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      if (
                        ('none' !== ne.style.display &&
                          (ne.style.display = 'none'),
                        Z && (clearTimeout(Z), (Z = null)),
                        'flex' !== q.style.display)
                      ) {
                        e.n = 1;
                        break;
                      }
                      (q.style.display = 'none'), (e.n = 12);
                      break;
                    case 1:
                      if ('callback' !== c) {
                        e.n = 2;
                        break;
                      }
                      return (q.style.display = 'flex'), e.a(2);
                    case 2:
                      if (((n = D[0]), (t = !1), !n)) {
                        e.n = 6;
                        break;
                      }
                      if (!0 !== n.ended) {
                        e.n = 3;
                        break;
                      }
                      (t = !1), (e.n = 6);
                      break;
                    case 3:
                      return (e.p = 3), (e.n = 4), f(n.id, o);
                    case 4:
                      'ended' !== e.v.chat_status &&
                        ((R = n.id),
                        (V = n.history || []),
                        _(R),
                        j(V),
                        (t = !0)),
                        (e.n = 6);
                      break;
                    case 5:
                      (e.p = 5), e.v, (t = !1);
                    case 6:
                      if (t) {
                        e.n = 11;
                        break;
                      }
                      return (R = null), (V = []), (e.n = 7), xe();
                    case 7:
                      if (!(a = e.v) || 'error' !== a.status) {
                        e.n = 8;
                        break;
                      }
                      return (
                        'Public key is not allowed for this domain' ===
                        a.message
                          ? console.error(
                              'Retell Widget: Public key is not allowed for this domain. Please check your public key and ensure your domain is whitelisted in the Retell dashboard.'
                            )
                          : console.error(
                              'Retell Widget: Failed to create chat:',
                              a.message
                            ),
                        (Y.disabled = !0),
                        (J.querySelector('.retell-send-btn').disabled = !0),
                        e.a(2)
                      );
                    case 8:
                      return (e.p = 8), (e.n = 9), b(R, '', o);
                    case 9:
                      (l = e.v).messages &&
                        l.messages.length > 0 &&
                        (l.messages
                          .filter(function (e) {
                            return 'agent' === e.role;
                          })
                          .forEach(function (e) {
                            V.push({ role: 'agent', content: e.content });
                          }),
                        ae(),
                        j(V),
                        -1 !==
                          (r = D.findIndex(function (e) {
                            return e.id === R;
                          })) &&
                          ((D[r].history = V),
                          (D[r].date = new Date().toISOString()),
                          k(D))),
                        (null === (i = l.messages) || void 0 === i
                          ? void 0
                          : i.find(function (e) {
                              return (
                                'tool_call_invocation' === e.role &&
                                'end_call' === e.name
                              );
                            })) &&
                          (-1 !==
                            (d = D.findIndex(function (e) {
                              return e.id === R;
                            })) && ((D[d].ended = !0), k(D)),
                          ae(!0),
                          (Y.disabled = !0),
                          (J.querySelector('.retell-send-btn').disabled = !0)),
                        (e.n = 11);
                      break;
                    case 10:
                      (e.p = 10),
                        (s = e.v),
                        console.error(
                          'Retell Widget: Failed to get initial AI greeting:',
                          s
                        );
                    case 11:
                      ae(),
                        ie(),
                        (q.style.display = 'flex'),
                        (W.scrollTop = W.scrollHeight),
                        (Y.disabled = !1),
                        (J.querySelector('.retell-send-btn').disabled = !1),
                        ee();
                    case 12:
                      return e.a(2);
                  }
              },
              e,
              null,
              [
                [8, 10],
                [3, 5]
              ]
            );
          })
        )).apply(this, arguments);
      }
      function se(e) {
        return me.apply(this, arguments);
      }
      function me() {
        return (me = E(
          B().m(function e(n) {
            var t, a;
            return B().w(
              function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return (R = n), (t = !1), (e.p = 1), (e.n = 2), f(R, o);
                    case 2:
                      'ended' === e.v.chat_status && (t = !0), (e.n = 4);
                      break;
                    case 3:
                      (e.p = 3), e.v, (t = !1);
                    case 4:
                      (a = D.find(function (e) {
                        return e.id === R;
                      })),
                        (V = (a && a.history) || []),
                        _(R),
                        j(V),
                        ae(t),
                        ie(),
                        (Q.style.display = 'none'),
                        t
                          ? ((Y.disabled = !0),
                            (J.querySelector('.retell-send-btn').disabled = !0))
                          : ((Y.disabled = !1),
                            (J.querySelector('.retell-send-btn').disabled = !1),
                            ee());
                    case 5:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 3]]
            );
          })
        )).apply(this, arguments);
      }
      function ue() {
        return (ue = E(
          B().m(function e() {
            var n;
            return B().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    if (!R) {
                      e.n = 2;
                      break;
                    }
                    return (e.n = 1), y(R, o);
                  case 1:
                    -1 !==
                      (n = D.findIndex(function (e) {
                        return e.id === R;
                      })) && ((D[n].ended = !0), k(D));
                  case 2:
                    (R = null),
                      (V = []),
                      _(''),
                      j(V),
                      (q.style.display = 'none'),
                      l($, !1),
                      ie(),
                      ae();
                  case 3:
                    return e.a(2);
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function pe(e) {
        return fe.apply(this, arguments);
      }
      function fe() {
        return (fe = E(
          B().m(function e(n) {
            var t, i, l, r, c, s, u, p, f, g, b, h, y, x, w, j, k, _, C;
            return B().w(
              function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      if (
                        (n.preventDefault(),
                        (t = U.getElementById('retell-firstname-input')),
                        (i = U.getElementById('retell-lastname-input')),
                        (l = U.getElementById('retell-phone-input')),
                        (r = U.getElementById('retell-privacy-checkbox')),
                        (c = U.getElementById('retell-callback-submit')),
                        (s = t ? t.value.trim() : ''),
                        (u = i ? i.value.trim() : ''),
                        (p = l ? l.value.trim() : ''),
                        s && u && p && null != r && r.checked)
                      ) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        (f = U.getElementById('retell-country-code')),
                        (g = f ? f.textContent : '+1'),
                        c &&
                          ((c.disabled = !0),
                          (c.textContent = 'Submitting request...')),
                        (e.p = 2),
                        (b = ''.concat(g).concat(p)),
                        (h = {
                          customer_name: ''.concat(s, ' ').concat(u),
                          customer_phone: b,
                          widget_type: 'callback'
                        }),
                        (e.n = 3),
                        le()
                      );
                    case 3:
                      return (y = e.v), (e.n = 4), v(d, b, o, a, m, h, A, y);
                    case 4:
                      if ('error' !== (x = e.v).status) {
                        e.n = 5;
                        break;
                      }
                      throw new Error(
                        x.message || 'Failed to submit call request'
                      );
                    case 5:
                      if (x.call_id) {
                        e.n = 6;
                        break;
                      }
                      throw new Error('No call ID received from server');
                    case 6:
                      be(),
                        t && (t.value = ''),
                        i && (i.value = ''),
                        l && (l.value = ''),
                        (e.n = 8);
                      break;
                    case 7:
                      (e.p = 7),
                        (C = e.v),
                        console.error('Error creating phone call:', C),
                        (w = U.getElementById('retell-callback-form')) &&
                          ((w.innerHTML =
                            '\n            <div class="retell-error-message">\n              <div class="retell-error-icon">⚠️</div>\n              <div class="retell-error-content">\n                <h3 class="retell-error-title">Request Failed</h3>\n                <p class="retell-error-subtitle">Sorry, we couldn\'t submit your call request right now. Please try again later.</p>\n              </div>\n              <div class="retell-error-actions">\n                <button class="retell-send-btn" id="retell-try-again-btn">Try Again</button>\n                <div class="retell-maybe-later" id="retell-error-maybe-later">Maybe later</div>\n              </div>\n            </div>\n          '),
                          (j = U.getElementById('retell-try-again-btn')),
                          (k = U.getElementById('retell-error-maybe-later')),
                          j &&
                            (j.onclick = function () {
                              ye();
                            }),
                          k &&
                            (k.onclick = function () {
                              q.style.display = 'none';
                            }));
                    case 8:
                      return (
                        (e.p = 8),
                        (_ = U.getElementById('retell-callback-submit')) &&
                          ((_.disabled = !1),
                          (_.textContent = 'Submit Request')),
                        e.f(8)
                      );
                    case 9:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[2, 7, 8, 9]]
            );
          })
        )).apply(this, arguments);
      }
      function ge() {
        q.style.display = 'none';
      }
      function be() {
        var e = U.getElementById('retell-callback-form');
        if (e) {
          e.innerHTML =
            '\n          <div class="retell-success-container">\n            <div class="retell-success-icon">\n              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <circle cx="21" cy="21" r="17.5" fill="#32A645"/>\n                <path d="M13 21L18 26L29 15" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n            </div>\n            <div class="retell-success-content">\n              <h3 class="retell-success-title">Your call request has been sent.</h3>\n              <p class="retell-success-subtitle">We\'ve received your details. You will receive a call shortly.</p>\n            </div>\n            <div class="retell-success-actions">\n              <button class="retell-got-it-btn" id="retell-got-it-btn">Got it</button>\n              <div class="retell-powered-by">Powered by Syntalia</div>\n            </div>\n          </div>\n        ';
          var n = U.getElementById('retell-got-it-btn');
          n && (n.onclick = he);
        }
      }
      function he() {
        q.style.display = 'none';
      }
      function ye() {
        var e = i(U, pe, ge, h, x);
        e &&
          (e.firstNameInput,
          e.lastNameInput,
          e.phoneInput,
          e.privacyCheckbox,
          e.callbackSubmit,
          e.maybeLaterBtn);
      }
      function xe() {
        return ve.apply(this, arguments);
      }
      function ve() {
        return (ve = E(
          B().m(function e() {
            var n, t, i, l, r;
            return B().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    if (!R) {
                      e.n = 1;
                      break;
                    }
                    return e.a(2, R);
                  case 1:
                    return (
                      k(
                        (D = D.filter(function (e) {
                          return e.history && e.history.length > 0;
                        }))
                      ),
                      (e.n = 2),
                      le()
                    );
                  case 2:
                    return (n = e.v), (e.n = 3), u(a, o, m, A, n);
                  case 3:
                    return (
                      (t = e.v),
                      _((R = t.chat_id)),
                      (i = new Date()),
                      (l = i.toISOString()),
                      (r = { id: R, title: '', date: l, history: [] }),
                      D.unshift(r),
                      k(D),
                      e.a(2, t)
                    );
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function we() {
        return (we = E(
          B().m(function e(n) {
            var t, a, i, l, r, c, d, s, m, u, p;
            return B().w(
              function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      if ((n.preventDefault(), (a = Y.value.trim()))) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      (Y.value = ''),
                      V.push({ role: 'user', content: a }),
                      ae(),
                      j(V);
                      
                      // ADDED CODE START: Create and show the loading indicator
                      var loadingIndicator = document.createElement('div'); // CORRECTED LINE
                      loadingIndicator.id = 'retell-loading-indicator';
                      loadingIndicator.className = 'retell-msg agent-row';
                      loadingIndicator.innerHTML =
                        '<div class="retell-loading-indicator">' +
                          '<span class="retell-dot"></span>' +
                          '<span class="retell-dot"></span>' +
                          '<span class="retell-dot"></span>' +
                        '</div>';
                      W.appendChild(loadingIndicator);
                      W.scrollTop = W.scrollHeight;
                      // ADDED CODE END
                      
                      return (e.n = 2), xe();
                    case 2:
                      return (e.p = 2), (e.n = 3), b(R, a, o);
                    case 3:
                      (i = e.v), (e.n = 5);
                      break;
                    case 4:
                      (e.p = 4),
                        (p = e.v),
                        (i = {
                          status: 'error',
                          message:
                            (null == p ? void 0 : p.message) || 'Unknown error'
                        });
                    case 5:
                      // ADDED CODE START: Remove the loading indicator
                      var indicatorToRemove = U.getElementById('retell-loading-indicator');
                      if (indicatorToRemove) {
                        indicatorToRemove.remove();
                      }
                      // ADDED CODE END

                      if (
                        !i ||
                        'error' !== i.status ||
                        'Chat already ended' !== i.message
                      ) {
                        e.n = 6;
                        break;
                      }
                      return (
                        V.pop(),
                        j(V),
                        ae(!0),
                        -1 !==
                          (l = D.findIndex(function (e) {
                            return e.id === R;
                          })) && ((D[l].ended = !0), k(D)),
                        (Y.disabled = !0),
                        (J.querySelector('.retell-send-btn').disabled = !0),
                        e.a(2)
                      );
                    case 6:
                      if (
                        (i.messages &&
                          i.messages.length > 0 &&
                          (i.messages
                            .filter(function (e) {
                              return 'agent' === e.role;
                            })
                            .forEach(function (e) {
                              V.push({ role: 'agent', content: e.content });
                            }),
                          ae(),
                          j(V)),
                        !(null === (t = i.messages) || void 0 === t
                          ? void 0
                          : t.find(function (e) {
                              return (
                                'tool_call_invocation' === e.role &&
                                'end_call' === e.name
                              );
                            })))
                      ) {
                        e.n = 7;
                        break;
                      }
                      return (
                        -1 !==
                          (r = D.findIndex(function (e) {
                            return e.id === R;
                          })) && ((D[r].ended = !0), k(D)),
                        ae(!0),
                        (Y.disabled = !0),
                        (J.querySelector('.retell-send-btn').disabled = !0),
                        e.a(2)
                      );
                    case 7:
                      -1 !==
                        (c = D.findIndex(function (e) {
                          return e.id === R;
                        })) &&
                        V.length > 0 &&
                        ((d = V[V.length - 1].content).length > 40 &&
                          (d = d.slice(0, 40) + '...'),
                        (D[c].title = d),
                        (D[c].history = V),
                        (D[c].date = new Date().toISOString()),
                        (s = D.splice(c, 1)),
                        (m = I(s, 1)),
                        (u = m[0]),
                        D.unshift(u),
                        k(D));
                    case 8:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[2, 4]]
            );
          })
        )).apply(this, arguments);
      }
    }
    'loading' === document.readyState
      ? document.addEventListener('DOMContentLoaded', t)
      : t();
  })();
})();
