var HerlNode = function(node){ //等高響應節點類別
	this.node = node;
}

HerlNode.prototype.herl = function (opt){

	var $set = { //預設值
			'height': 200
		};

	Object.assign($set, opt); //extend 預設值

	var $env = this.node,
		$li = $env.querySelectorAll('li'),
		$li_len = $li.length;

	var $env_w = $env.getBoundingClientRect().width; //排版容器的寬度

	var $items = [];

	var Item = function(node) { //類別
			this.node = node;
			this.positionInfo = this.node.getBoundingClientRect();
			this.width = this.positionInfo.width * ( $set.height / this.positionInfo.height ); //以高度為基準，算出相應的寬度
		}

	Item.prototype.reSize = function(prop){
		this.width *= prop;
	}

	Item.prototype.setSize = function(){
		this.node.style.width = ( this.width / $env_w ) * 100 + '%';
	}

	Item.prototype.clearHeight = function() {
		this.node.style.height = '1px';
	}

	Item.prototype.recoveryHeight = function(){
		this.node.style.height = 'auto';
	}

	for( var i = 0; i < $li_len; i++ ){
		$items.push(new Item($li[i]));
	}

	var _totalWidth = 0,
		_firstItem = 0; //計算一行開始的項目

	for( var i = 0; i < $li_len; i++ ){ //分配行

		var $obj = $items[i],
			$obj_w = $obj.width;

		_totalWidth += $obj_w;

		$obj.clearHeight();

		if( _totalWidth > $env_w ) { //檢測寬度是否在一行內，若大於一行寬度，則安排至下一行

			var $last_obj = $items[i - 1], //每行的最後一個
				_prop = $env_w / ( _totalWidth - $obj_w );

			for( var j = _firstItem; j < i; j++ ) {
				var $obj = $items[j];

				$obj.reSize(_prop);
			}

			$last_obj.recoveryHeight(); //撐起最後高度

			_firstItem = i;

			_totalWidth = $obj_w;
		}
	}

	$items[$li_len - 1].recoveryHeight(); //撐起最後高度

	for( var i = 0; i < $li_len; i++ ){ //分配行
		$items[i].setSize();
	}
}