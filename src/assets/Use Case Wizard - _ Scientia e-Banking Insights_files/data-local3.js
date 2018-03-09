//== Class definition

var DatatableDataLocalDemo3 = function () {
	//== Private functions

	// demo initializer
	var demo3 = function () {

		var dataJSONArray = JSON.parse('[{"Name":"Name 1","Author":"James","DateandTime":"12/06/2017 16:00PM","CreationDate":"20/02/2017","Status":1,"Type":1},{"Name":"Name 2","Author":"Samantha","DateandTime":"24/09/2017 20:00PM","CreationDate":"18/02/2017","Status":2,"Type":2}]');

		var datatable = $('.m_datatable3').mDatatable({
			// datasource definition
			data: {
				type: 'local',
				source: dataJSONArray,
				pageSize: 5
			},

			// layout definition
			layout: {
				theme: 'default', // datatable theme
				class: '', // custom wrapper class
				scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
				// height: 450, // datatable's body's fixed height
				footer: false // display/hide footer
			},

			// column sorting
			sortable: true,

			pagination: true,

			search: {
				input: $('#generalSearch')
			},

			// inline and bactch editing(cooming soon)
			// editable: false,

			// columns definition
			columns: [ 
			{
				field: "Name",
				title: "Name"
			}, {
				field: "Author",
				title: "Author",
				responsive: {visible: 'lg'}
			}, 	{
				field: "CreationDate",
				title: "Creation Date",
			}, {
				field: "Status",
				title: "Status",
				// callback function support for column rendering
				template: function (row) {
					var status = {
						1: {'title': 'Active', 'state': 'primary'},
						2: {'title': 'Inactive', 'state': 'danger'},
						3: {'title': 'Direct', 'state': 'accent'}
					};
					return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state + '">' + status[row.Type].title + '</span>';
				}
			},  {
				field: "Actions",
				width: 110,
				title: "Actions",
				sortable: false,
				overflow: 'visible',
				template: function (row, index, datatable) {
					var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';

					return '\
						<a href="#" data-toggle="modal" data-target="#editexample" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Activate ">\
                            <i class="la la-check"></i>\
                        </a>\
						<a href="#" data-toggle="modal" data-target="#editexample" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit Evaluation Matrix ">\
                            <i class="la la-edit"></i>\
                        </a>\
						<a href="#" data-toggle="modal" data-target="#deletemodal" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Delete ">\
                            <i class="la la-trash"></i>\
                        </a>\
					';
				}
			}]
		});

		var query = datatable.getDataSourceQuery();

		$('#m_form_status').on('change', function () {
			datatable.search($(this).val(), 'Status');
		}).val(typeof query.Status !== 'undefined' ? query.Status : '');

		$('#m_form_type').on('change', function () {
			datatable.search($(this).val(), 'Type');
		}).val(typeof query.Type !== 'undefined' ? query.Type : '');

		$('#m_form_status, #m_form_type').selectpicker();

	};

	return {
		//== Public functions
		init: function () {
			// init dmeo
			demo3();
		}
	};
}();

jQuery(document).ready(function () {
	DatatableDataLocalDemo3.init();
});