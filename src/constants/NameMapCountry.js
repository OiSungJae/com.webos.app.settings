// Copyright (c) 2016-2018 LG Electronics, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import $L from '@enact/i18n/$L';

function NameMapCountry (country) {
	const ct = {
		'Afghanistan' : $L('Afghanistan'),
		'Albania' : $L('Albania'),
		'Algeria' : $L('Algeria'),
		'Angola' : $L('Angola'),
		'Argentina' : $L('Argentina'),
		'Armenia' : $L('Armenia'),
		'Aruba' : $L('Aruba'),
		'Australia' : $L('Australia'),
		'Austria' : $L('Austria'),
		'Azerbaijan' : $L('Azerbaijan'),
		'Bahamas' : $L('Bahamas'),
		'Bahrain' : $L('Bahrain'),
		'Bangladesh' : $L('Bangladesh'),
		'Barbados' : $L('Barbados'),
		'Belarus' : $L('Belarus'),
		'Belgium' : $L('Belgium'),
		'Belize' : $L('Belize'),
		'Benin' : $L('Benin'),
		'Bermuda' : $L('Bermuda'),
		'Bhutan' : $L('Bhutan'),
		'Bolivia' : $L('Bolivia'),
		'Bosnia And Herzegovina' : $L('Bosnia And Herzegovina'),
		'Botswana' : $L('Botswana'),
		'Brazil' : $L('Brazil'),
		'Bulgaria' : $L('Bulgaria'),
		'Burkina Faso' : $L('Burkina Faso'),
		'Burundi' : $L('Burundi'),
		'Cambodia' : $L('Cambodia'),
		'Cameroon' : $L('Cameroon'),
		'Canada' : $L('Canada'),
		'Cape Verde' : $L('Cape Verde'),
		'Cayman Islands' : $L('Cayman Islands'),
		'Central African Republic' : $L('Central African Republic'),
		'Chad' : $L('Chad'),
		'Chile' : $L('Chile'),
		'China' : $L('China'),
		'Colombia' : $L('Colombia'),
		'Costa Rica' : $L('Costa Rica'),
		'Croatia' : $L('Croatia'),
		'Cuba' : $L('Cuba'),
		'Cyprus' : $L('Cyprus'),
		'Czech Republic' : $L('Czech Republic'),
		"Côte d'Ivoire" : $L("Côte d'Ivoire"),
		'Democratic Republic of the Congo' : $L('Democratic Republic of the Congo'),
		'Denmark' : $L('Denmark'),
		'Dominica' : $L('Dominica'),
		'Dominican Republic' : $L('Dominican Republic'),
		'Ecuador' : $L('Ecuador'),
		'Egypt' : $L('Egypt'),
		'El Salvador' : $L('El Salvador'),
		'Equatorial Guinea' : $L('Equatorial Guinea'),
		'Eritrea' : $L('Eritrea'),
		'Estonia' : $L('Estonia'),
		'Ethiopia' : $L('Ethiopia'),
		'Fiji' : $L('Fiji'),
		'Finland' : $L('Finland'),
		'France' : $L('France'),
		'French Polynesia' : $L('French Polynesia'),
		'Gabon' : $L('Gabon'),
		'Gambia' : $L('Gambia'),
		'Georgia' : $L('Georgia'),
		'Germany' : $L('Germany'),
		'Ghana' : $L('Ghana'),
		'Gibraltar' : $L('Gibraltar'),
		'Greece' : $L('Greece'),
		'Greenland' : $L('Greenland'),
		'Guadeloupe' : $L('Guadeloupe'),
		'Guam' : $L('Guam'),
		'Guatemala' : $L('Guatemala'),
		'Guernsey' : $L('Guernsey'),
		'Guinea' : $L('Guinea'),
		'Guinea Bissau' : $L('Guinea Bissau'),
		'Guyana' : $L('Guyana'),
		'Haiti' : $L('Haiti'),
		'Honduras' : $L('Honduras'),
		'Hong Kong' : $L('Hong Kong'),
		'Hungary' : $L('Hungary'),
		'Iceland' : $L('Iceland'),
		'India' : $L('India'),
		'Indonesia' : $L('Indonesia'),
		'Iran' : $L('Iran'),
		'Iraq' : $L('Iraq'),
		'Ireland' : $L('Ireland'),
		'Israel' : $L('Israel'),
		'Italy' : $L('Italy'),
		'Jamaica' : $L('Jamaica'),
		'Japan' : $L('Japan'),
		'Jordan' : $L('Jordan'),
		'Kazakhstan' : $L('Kazakhstan'),
		'Kenya' : $L('Kenya'),
		'Kiribati' : $L('Kiribati'),
		'Kuwait' : $L('Kuwait'),
		'Kyrgyzstan' : $L('Kyrgyzstan'),
		'Laos' : $L('Laos'),
		'Latvia' : $L('Latvia'),
		'Lebanon' : $L('Lebanon'),
		'Lesotho' : $L('Lesotho'),
		'Liberia' : $L('Liberia'),
		'Libya' : $L('Libya'),
		'Liechtenstein' : $L('Liechtenstein'),
		'Lithuania' : $L('Lithuania'),
		'Luxembourg' : $L('Luxembourg'),
		'Macao' : $L('Macao'),
		'Macedonia, The Former Yugoslav Republic Of' : $L('Macedonia, The Former Yugoslav Republic Of'),
		'Madagascar' : $L('Madagascar'),
		'Malawi' : $L('Malawi'),
		'Malaysia' : $L('Malaysia'),
		'Maldives' : $L('Maldives'),
		'Mali' : $L('Mali'),
		'Malta' : $L('Malta'),
		'Marshall Islands' : $L('Marshall Islands'),
		'Martinique' : $L('Martinique'),
		'Mauritius' : $L('Mauritius'),
		'Mayotte' : $L('Mayotte'),
		'Mexico' : $L('Mexico'),
		'Moldova' : $L('Moldova'),
		'Monaco' : $L('Monaco'),
		'Mongolia' : $L('Mongolia'),
		'Montenegro' : $L('Montenegro'),
		'Morocco' : $L('Morocco'),
		'Mozambique' : $L('Mozambique'),
		'Myanmar' : $L('Myanmar'),
		'Namibia' : $L('Namibia'),
		'Nepal' : $L('Nepal'),
		'Netherlands' : $L('Netherlands'),
		'New Caledonia' : $L('New Caledonia'),
		'New Zealand' : $L('New Zealand'),
		'Nicaragua' : $L('Nicaragua'),
		'Niger' : $L('Niger'),
		'Nigeria' : $L('Nigeria'),
		'North Korea' : $L('North Korea'),
		'Norway' : $L('Norway'),
		'Oman' : $L('Oman'),
		'Pakistan' : $L('Pakistan'),
		'Palau' : $L('Palau'),
		'Panama' : $L('Panama'),
		'Papua New Guinea' : $L('Papua New Guinea'),
		'Paraguay' : $L('Paraguay'),
		'Peru' : $L('Peru'),
		'Philippines' : $L('Philippines'),
		'Poland' : $L('Poland'),
		'Portugal' : $L('Portugal'),
		'Puerto Rico' : $L('Puerto Rico'),
		'Qatar' : $L('Qatar'),
		'Republic of The Congo' : $L('Republic of The Congo'),
		'Romania' : $L('Romania'),
		'Russia' : $L('Russia'),
		'Rwanda' : $L('Rwanda'),
		'Saint Lucia' : $L('Saint Lucia'),
		'Samoa' : $L('Samoa'),
		'Saudi Arabia' : $L('Saudi Arabia'),
		'Senegal' : $L('Senegal'),
		'Serbia' : $L('Serbia'),
		'Sierra Leone' : $L('Sierra Leone'),
		'Singapore' : $L('Singapore'),
		'Slovakia' : $L('Slovakia'),
		'Slovenia' : $L('Slovenia'),
		'Solomon Islands' : $L('Solomon Islands'),
		'Somalia' : $L('Somalia'),
		'South Africa' : $L('South Africa'),
		'South Korea' : $L('South Korea'),
		'Spain' : $L('Spain'),
		'Sri Lanka' : $L('Sri Lanka'),
		'Sudan' : $L('Sudan'),
		'Suriname' : $L('Suriname'),
		'Swaziland' : $L('Swaziland'),
		'Sweden' : $L('Sweden'),
		'Switzerland' : $L('Switzerland'),
		'Syria' : $L('Syria'),
		'Taiwan' : $L('Taiwan'),
		'Tajikistan' : $L('Tajikistan'),
		'Tanzania' : $L('Tanzania'),
		'Thailand' : $L('Thailand'),
		'Timor-Leste' : $L('Timor-Leste'),
		'Tonga' : $L('Tonga'),
		'Trinidad And Tobago' : $L('Trinidad And Tobago'),
		'Tunisia' : $L('Tunisia'),
		'Turkey' : $L('Turkey'),
		'Turkmenistan' : $L('Turkmenistan'),
		'Uganda' : $L('Uganda'),
		'Ukraine' : $L('Ukraine'),
		'United Arab Emirates' : $L('United Arab Emirates'),
		'United Kingdom' : $L('United Kingdom'),
		'United States of America' : $L('United States of America'),
		'Uruguay' : $L('Uruguay'),
		'Uzbekistan' : $L('Uzbekistan'),
		'Vatican City' : $L('Vatican City'),
		'Venezuela' : $L('Venezuela'),
		'Vietnam' : $L('Vietnam'),
		'Yemen' : $L('Yemen'),
		'Zambia' : $L('Zambia'),
		'Zimbabwe' : $L('Zimbabwe')
	};

	return ct[country] || country;
}

export default NameMapCountry;
