/* Generated by JSIL v0.8.2 build 17617. See http://jsil.org/ for more information. */ 
'use strict';
var $asm09 = JSIL.DeclareAssembly("Fusee.Tutorial.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("Fusee");
JSIL.DeclareNamespace("Fusee.Tutorial");
JSIL.DeclareNamespace("Fusee.Tutorial.Core");
/* class Fusee.Tutorial.Core.SceneOb */ 

(function SceneOb$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm06.Fusee.Math.Core.float3)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float3"), [
        $asm14.TypeRef("System.Single"), $asm14.TypeRef("System.Single"), 
        $asm14.TypeRef("System.Single")
      ]))) ();
  };


  function SceneOb__ctor () {
    this.Albedo = $S00().Construct(0.8, 0.8, 0.8);
    this.Pos = $T00().Zero.MemberwiseClone();
    this.Rot = $T00().Zero.MemberwiseClone();
    this.Pivot = $T00().Zero.MemberwiseClone();
    this.Scale = $T00().One.MemberwiseClone();
    this.ModelScale = $T00().One.MemberwiseClone();
  }; 

  JSIL.MakeType({
      BaseType: $asm14.TypeRef("System.Object"), 
      Name: "Fusee.Tutorial.Core.SceneOb", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      SceneOb__ctor
    );

    $.Field({Static:false, Public:true }, "Mesh", $asm04.TypeRef("Fusee.Engine.Core.Mesh"));

    $.Field({Static:false, Public:true }, "Albedo", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Pos", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Rot", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Pivot", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Scale", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "ModelScale", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Children", $asm14.TypeRef("System.Collections.Generic.List`1", [$.Type]));


    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class Fusee.Tutorial.Core.Renderer */ 

(function Renderer$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderContext)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm14.System.Collections.Generic.Dictionary$b2.Of($asm07.Fusee.Serialization.MeshComponent, $asm04.Fusee.Engine.Core.Mesh))) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm0B.Fusee.Xene.CollapsingStateStack$b1.Of($asm06.Fusee.Math.Core.float4x4))) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm0B.Fusee.Xene.SceneVisitor)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm14.System.String)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm01.Fusee.Base.Core.AssetStorage)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm04.Fusee.Engine.Core.ShaderProgram)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm06.Fusee.Math.Core.float4x4)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm07.Fusee.Serialization.MeshComponent)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm04.Fusee.Engine.Core.Mesh)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm14.System.Boolean)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm07.Fusee.Serialization.MaterialComponent)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm07.Fusee.Serialization.TransformComponent)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm0B.Fusee.Xene.ContainerExtensions)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm14.TypeRef("System.Collections.Generic.Dictionary`2", [$asm07.TypeRef("Fusee.Serialization.MeshComponent"), $asm04.TypeRef("Fusee.Engine.Core.Mesh")]), null))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.MethodSignature($asm06.TypeRef("Fusee.Math.Core.float4x4"), [$asm06.TypeRef("Fusee.Math.Core.float4x4"), $asm06.TypeRef("Fusee.Math.Core.float4x4")]))) ();
  };


  function Renderer__ctor (rc) {
    this._meshes = $S00().Construct();
    this._model = new ($T02())(4);
    $T03().prototype._ctor.call(this);
    this.RC = rc;
    var vs = $T05().Get$b1($T04())("VertexShader.vert");
    var ps = $T05().Get$b1($T04())("PixelShader.frag");
    var shaderProgram = (this.RC).CreateShader(vs, ps);
    (this.RC).SetShader(shaderProgram);
    this.AlbedoParam = (this.RC).GetShaderParam(shaderProgram, "albedo");
    this.ShininessParam = (this.RC).GetShaderParam(shaderProgram, "shininess");
  }; 

  function Renderer_InitState () {
    (this._model).Clear();
    (this._model).set_Tos($T07().Identity.MemberwiseClone());
  }; 

  function Renderer_LookupMesh (mc) {
    var mesh = new JSIL.BoxedVariable(null);
    var flag = !(this._meshes).TryGetValue(mc, /* ref */ mesh);
    if (flag) {
      var expr_1C = new ($T09())();
      expr_1C.set_Vertices(mc.Vertices);
      expr_1C.set_Normals(mc.Normals);
      expr_1C.set_Triangles(mc.Triangles);
      mesh.set(expr_1C);
      (this._meshes).set_Item(mc, mesh.get());
    }
    return mesh.get();
  }; 

  function Renderer_OnMaterial (material) {
    (this.RC).SetShaderParam3f(this.AlbedoParam, material.Diffuse.Color.MemberwiseClone());
    (this.RC).SetShaderParam1f(this.ShininessParam, material.Specular.Shininess);
  }; 

  function Renderer_OnMesh (mesh) {
    (this.RC).Render(this.LookupMesh(mesh));
  }; 

  function Renderer_OnTransform (xform) {
    this._model.Tos = $S01().CallStatic($T07(), "op_Multiply", null, this._model.Tos.MemberwiseClone(), $T0D().Matrix(xform).MemberwiseClone()).MemberwiseClone();
    (this.RC.ModelView = $S01().CallStatic($T07(), "op_Multiply", null, this.View.MemberwiseClone(), (this._model).get_Tos().MemberwiseClone()).MemberwiseClone());
  }; 

  function Renderer_PopState () {
    (this._model).Pop();
    (this.RC.ModelView = $S01().CallStatic($T07(), "op_Multiply", null, this.View.MemberwiseClone(), (this._model).get_Tos().MemberwiseClone()).MemberwiseClone());
  }; 

  function Renderer_PushState () {
    (this._model).Push();
  }; 

  JSIL.MakeType({
      BaseType: $asm0B.TypeRef("Fusee.Xene.SceneVisitor"), 
      Name: "Fusee.Tutorial.Core.Renderer", 
      IsPublic: false, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 1, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Action($asm04.TypeRef("Fusee.Engine.Core.RenderContext")), 
      Renderer__ctor
    );

    $.Method({Static:false, Public:false, Virtual:true }, "InitState", 
      JSIL.MethodSignature.Void, 
      Renderer_InitState
    );

    $.Method({Static:false, Public:false}, "LookupMesh", 
      new JSIL.MethodSignature($asm04.TypeRef("Fusee.Engine.Core.Mesh"), [$asm07.TypeRef("Fusee.Serialization.MeshComponent")]), 
      Renderer_LookupMesh
    );

    $.Method({Static:false, Public:false}, "OnMaterial", 
      JSIL.MethodSignature.Action($asm07.TypeRef("Fusee.Serialization.MaterialComponent")), 
      Renderer_OnMaterial
    )
      .Attribute($asm0B.TypeRef("Fusee.Xene.VisitMethodAttribute"));

    $.Method({Static:false, Public:false}, "OnMesh", 
      JSIL.MethodSignature.Action($asm07.TypeRef("Fusee.Serialization.MeshComponent")), 
      Renderer_OnMesh
    )
      .Attribute($asm0B.TypeRef("Fusee.Xene.VisitMethodAttribute"));

    $.Method({Static:false, Public:false}, "OnTransform", 
      JSIL.MethodSignature.Action($asm07.TypeRef("Fusee.Serialization.TransformComponent")), 
      Renderer_OnTransform
    )
      .Attribute($asm0B.TypeRef("Fusee.Xene.VisitMethodAttribute"));

    $.Method({Static:false, Public:false, Virtual:true }, "PopState", 
      JSIL.MethodSignature.Void, 
      Renderer_PopState
    );

    $.Method({Static:false, Public:false, Virtual:true }, "PushState", 
      JSIL.MethodSignature.Void, 
      Renderer_PushState
    );

    $.Field({Static:false, Public:true }, "RC", $asm04.TypeRef("Fusee.Engine.Core.RenderContext"));

    $.Field({Static:false, Public:true }, "AlbedoParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:true }, "ShininessParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:true }, "View", $asm06.TypeRef("Fusee.Math.Core.float4x4"));

    $.Field({Static:false, Public:false}, "_meshes", $asm14.TypeRef("System.Collections.Generic.Dictionary`2", [$asm07.TypeRef("Fusee.Serialization.MeshComponent"), $asm04.TypeRef("Fusee.Engine.Core.Mesh")]));

    $.Field({Static:false, Public:false}, "_model", $asm0B.TypeRef("Fusee.Xene.CollapsingStateStack`1", [$asm06.TypeRef("Fusee.Math.Core.float4x4")]));


    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class Fusee.Tutorial.Core.Tutorial */ 

(function Tutorial$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderCanvas)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm14.System.Predicate$b1.Of($asm07.Fusee.Serialization.SceneNodeContainer))) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm04.Fusee.Engine.Core.Mesh)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm07.Fusee.Serialization.SceneContainer)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm01.Fusee.Base.Core.AssetStorage)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm0B.Fusee.Xene.ContainerExtensions)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm07.Fusee.Serialization.SceneNodeContainer)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm11.System.Linq.Enumerable)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm0B.Fusee.Xene.SceneFinderExtensions)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm09.Fusee.Tutorial.Core.Renderer)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm09.Fusee.Tutorial.Core.SceneOb)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize(System.Array.Of($asm09.Fusee.Tutorial.Core.SceneOb))) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm06.Fusee.Math.Core.float3)) ();
  };
  var $T0E = function () {
    return ($T0E = JSIL.Memoize($asm14.System.Collections.Generic.List$b1.Of($asm09.Fusee.Tutorial.Core.SceneOb))) ();
  };
  var $T0F = function () {
    return ($T0F = JSIL.Memoize($asm14.System.Collections.Generic.IEnumerable$b1.Of($asm09.Fusee.Tutorial.Core.SceneOb))) ();
  };
  var $T10 = function () {
    return ($T10 = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderContext)) ();
  };
  var $T11 = function () {
    return ($T11 = JSIL.Memoize($asm06.Fusee.Math.Core.float4)) ();
  };
  var $T12 = function () {
    return ($T12 = JSIL.Memoize($asm14.System.String)) ();
  };
  var $T13 = function () {
    return ($T13 = JSIL.Memoize($asm14.System.Predicate$b1.Of($asm07.Fusee.Serialization.MeshComponent))) ();
  };
  var $T14 = function () {
    return ($T14 = JSIL.Memoize($asm14.System.Collections.Generic.IEnumerable$b1.Of($asm07.Fusee.Serialization.SceneNodeContainer))) ();
  };
  var $T15 = function () {
    return ($T15 = JSIL.Memoize($asm07.Fusee.Serialization.MeshComponent)) ();
  };
  var $T16 = function () {
    return ($T16 = JSIL.Memoize($asm06.Fusee.Math.Core.float4x4)) ();
  };
  var $T17 = function () {
    return ($T17 = JSIL.Memoize($asm03.Fusee.Engine.Common.ClearFlags)) ();
  };
  var $T18 = function () {
    return ($T18 = JSIL.Memoize($asm06.Fusee.Math.Core.float2)) ();
  };
  var $T19 = function () {
    return ($T19 = JSIL.Memoize($asm04.Fusee.Engine.Core.MouseDevice)) ();
  };
  var $T1A = function () {
    return ($T1A = JSIL.Memoize($asm04.Fusee.Engine.Core.Input)) ();
  };
  var $T1B = function () {
    return ($T1B = JSIL.Memoize($asm04.Fusee.Engine.Core.TouchDevice)) ();
  };
  var $T1C = function () {
    return ($T1C = JSIL.Memoize($asm03.Fusee.Engine.Common.TouchPoints)) ();
  };
  var $T1D = function () {
    return ($T1D = JSIL.Memoize($asm14.System.Boolean)) ();
  };
  var $T1E = function () {
    return ($T1E = JSIL.Memoize($asm04.Fusee.Engine.Core.KeyboardDevice)) ();
  };
  var $T1F = function () {
    return ($T1F = JSIL.Memoize($asm14.System.Single)) ();
  };
  var $T20 = function () {
    return ($T20 = JSIL.Memoize($asm0B.Fusee.Xene.SceneVisitor)) ();
  };
  var $T21 = function () {
    return ($T21 = JSIL.Memoize($asm14.System.Int32)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Boolean"), [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.MethodSignature("!!0", [$asm0D.TypeRef("System.Collections.Generic.IEnumerable`1", ["!!0"])], ["TSource"]))) ();
  };
  var $S02 = function () {
    return ($S02 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), [$asm14.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")])]))) ();
  };
  var $S03 = function () {
    return ($S03 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float3"), [
        $asm14.TypeRef("System.Single"), $asm14.TypeRef("System.Single"), 
        $asm14.TypeRef("System.Single")
      ]))) ();
  };
  var $S04 = function () {
    return ($S04 = JSIL.Memoize(new JSIL.ConstructorSignature($asm14.TypeRef("System.Collections.Generic.List`1", [$asm09.TypeRef("Fusee.Tutorial.Core.SceneOb")]), [$asm14.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm09.TypeRef("Fusee.Tutorial.Core.SceneOb")])]))) ();
  };
  var $S05 = function () {
    return ($S05 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float4"), [
        $asm14.TypeRef("System.Single"), $asm14.TypeRef("System.Single"), 
        $asm14.TypeRef("System.Single"), $asm14.TypeRef("System.Single")
      ]))) ();
  };
  var $S06 = function () {
    return ($S06 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Boolean"), [$asm07.TypeRef("Fusee.Serialization.MeshComponent")]))) ();
  };
  var $S07 = function () {
    return ($S07 = JSIL.Memoize(new JSIL.MethodSignature("!!0", [$asm0D.TypeRef("System.Collections.Generic.IEnumerable`1", ["!!0"])], ["TSource"]))) ();
  };
  var $S08 = function () {
    return ($S08 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Collections.Generic.IEnumerable`1", ["!!0"]), [$asm14.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), $asm14.TypeRef("System.Predicate`1", ["!!0"])], ["TComponent"]))) ();
  };
  var $S09 = function () {
    return ($S09 = JSIL.Memoize(new JSIL.MethodSignature($asm06.TypeRef("Fusee.Math.Core.float4x4"), [$asm06.TypeRef("Fusee.Math.Core.float4x4"), $asm06.TypeRef("Fusee.Math.Core.float4x4")]))) ();
  };
  var $S0A = function () {
    return ($S0A = JSIL.Memoize(JSIL.MethodSignature.Action($asm14.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")])))) ();
  };
  var $S0B = function () {
    return ($S0B = JSIL.Memoize(new JSIL.MethodSignature($asm06.TypeRef("Fusee.Math.Core.float4x4"), [$asm06.TypeRef("Fusee.Math.Core.float3")]))) ();
  };


  function Tutorial__ctor () {
    this._alpha = 0.001;
    $T00().prototype._ctor.call(this);
  }; 

  function Tutorial_Init () {
    var arg_5D_1 = null;
    var mesh = $thisType.LoadMesh("Cube.fus");
    var mesh2 = $thisType.LoadMesh("Cylinder.fus");
    var mesh3 = $thisType.LoadMesh("Sphere.fus");
    this._wuggy = $T04().Get$b1($T03())("wuggy.fus");
    if ((arg_5D_1 = $T05().$l$g9__9_0) === null) {
      arg_5D_1 = $T05().$l$g9__9_0 = $T01().New($T05().$l$g9, null, new JSIL.MethodPointerInfo($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc, "$lInit$gb__9_0", $S00(), false, false));
    }
    this._wheelBigL = $T06().GetTransform($S01().CallStatic($T08(), "First$b1", [$asm07.Fusee.Serialization.SceneNodeContainer], $S02().CallStatic($T09(), "FindNodes", null, this._wuggy.Children, arg_5D_1)), 0);
    this._renderer = new ($T0A())(this.RenderCanvas$RC$value);
    var sceneOb = new ($T0B())();
    var expr_91 = JSIL.Array.New($T0B(), 8);
    var expr_98 = new ($T0B())();
    expr_98.Mesh = mesh;
    expr_98.Pos = $S03().Construct(0, 2.75, 0);
    expr_98.ModelScale = $S03().Construct(0.5, 1, 0.25);
    expr_98.Albedo = $S03().Construct(0.2, 0.6, 0.3);
    expr_91[0] = expr_98;
    var expr_F5 = new ($T0B())();
    expr_F5.Mesh = mesh2;
    expr_F5.Pos = $S03().Construct(-0.25, 1, 0);
    expr_F5.ModelScale = $S03().Construct(0.15, 1, 0.15);
    expr_91[1] = expr_F5;
    var expr_138 = new ($T0B())();
    expr_138.Mesh = mesh2;
    expr_138.Pos = $S03().Construct(0.25, 1, 0);
    expr_138.ModelScale = $S03().Construct(0.15, 1, 0.15);
    expr_91[2] = expr_138;
    var expr_17B = new ($T0B())();
    expr_17B.Mesh = mesh3;
    expr_17B.Pos = $S03().Construct(-0.75, 3.5, 0);
    expr_17B.ModelScale = $S03().Construct(0.25, 0.25, 0.25);
    expr_91[3] = expr_17B;
    var expr_1BE = new ($T0B())();
    expr_1BE.Mesh = mesh3;
    expr_1BE.Pos = $S03().Construct(0.75, 3.5, 0);
    expr_1BE.ModelScale = $S03().Construct(0.25, 0.25, 0.25);
    expr_91[4] = expr_1BE;
    var expr_201 = new ($T0B())();
    expr_201.Mesh = mesh2;
    expr_201.Pos = $S03().Construct(-0.75, 2.5, 0);
    expr_201.ModelScale = $S03().Construct(0.15, 1, 0.15);
    expr_91[5] = expr_201;
    var expr_244 = new ($T0B())();
    expr_244.Mesh = mesh2;
    expr_244.Pos = $S03().Construct(0.75, 2.5, 0);
    expr_244.ModelScale = $S03().Construct(0.15, 1, 0.15);
    expr_91[6] = expr_244;
    var expr_287 = new ($T0B())();
    expr_287.Mesh = mesh3;
    expr_287.Pos = $S03().Construct(0, 4.2, 0);
    expr_287.ModelScale = $S03().Construct(0.35, 0.5, 0.35);
    expr_287.Albedo = $S03().Construct(0.9, 0.6, 0.5);
    expr_91[7] = expr_287;
    sceneOb.Children = $S04().Construct($T0F().$Cast(expr_91));
    this._root = sceneOb;
    (this.RenderCanvas$RC$value.ClearColor = $S05().Construct(1, 1, 1, 1));
  }; 

  function Tutorial_LoadMesh (assetName) {
    var arg_2D_1 = null;
    var sceneContainer = $T04().Get$b1($T03())(assetName);
    var arg_2D_0 = sceneContainer.Children;
    if ((arg_2D_1 = $T05().$l$g9__8_0) === null) {
      arg_2D_1 = $T05().$l$g9__8_0 = $T13().New($T05().$l$g9, null, new JSIL.MethodPointerInfo($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc, "$lLoadMesh$gb__8_0", $S06(), false, false));
    }
    var meshComponent = $S07().CallStatic($T08(), "First$b1", [$asm07.Fusee.Serialization.MeshComponent], $S08().CallStatic($T09(), "FindComponents$b1", [$asm07.Fusee.Serialization.MeshComponent], arg_2D_0, arg_2D_1));
    var expr_3D = new ($T02())();
    expr_3D.set_Vertices(meshComponent.Vertices);
    expr_3D.set_Normals(meshComponent.Normals);
    expr_3D.set_Triangles(meshComponent.Triangles);
    return expr_3D;
  }; 

  function Tutorial_ModelXForm (pos, rot, pivot) {
    return $S09().CallStatic($T16(), "op_Multiply", null, 
      $S09().CallStatic($T16(), "op_Multiply", null, 
        $S09().CallStatic($T16(), "op_Multiply", null, 
          $S09().CallStatic($T16(), "op_Multiply", null, 
            $T16().CreateTranslation($T0D().op_Addition(pos.MemberwiseClone(), pivot).MemberwiseClone()).MemberwiseClone(), 
            $T16().CreateRotationY(rot.y).MemberwiseClone()
          ).MemberwiseClone(), 
          $T16().CreateRotationX(rot.x).MemberwiseClone()
        ).MemberwiseClone(), 
        $T16().CreateRotationZ(rot.z).MemberwiseClone()
      ).MemberwiseClone(), 
      $T16().CreateTranslation($T0D().op_UnaryNegation(pivot.MemberwiseClone()).MemberwiseClone()).MemberwiseClone()
    );
  }; 

  function Tutorial_RenderAFrame () {
    (this.RenderCanvas$RC$value).Clear($T17().$Flags("Color", "Depth"));
    var float = $T18().op_Addition(
      $T1A().get_Mouse().get_Velocity().MemberwiseClone(), 
      $T1A().get_Touch().GetVelocity($T1C().Touchpoint_0)
    );
    var flag = $T1A().get_Mouse().get_LeftButton() || 
    $T1A().get_Touch().GetTouchActive($T1C().Touchpoint_0);
    if (flag) {
      this._alpha = +this._alpha - (+float.x * 0.0001);
      this._beta = +this._beta - (+float.y * 0.0001);
    }
    this._wheelBigL.Rotation = $T0D().op_Addition(this._wheelBigL.Rotation.MemberwiseClone(), $S03().Construct((-0.05 * +$T1A().get_Keyboard().get_WSAxis()), 0, 0));
    var aspect = +((+(this.get_Width()) / +(this.get_Height())));
    (this.RenderCanvas$RC$value.Projection = $T16().CreatePerspectiveFieldOfView(0.785398, aspect, 0.01, 20).MemberwiseClone());
    var view = $S09().CallStatic($T16(), "op_Multiply", null, 
      $S09().CallStatic($T16(), "op_Multiply", null, 
        $S09().CallStatic($T16(), "op_Multiply", null, 
          $T16().CreateTranslation(0, 0, 5).MemberwiseClone(), 
          $T16().CreateRotationY(this._alpha).MemberwiseClone()
        ).MemberwiseClone(), 
        $T16().CreateRotationX(this._beta).MemberwiseClone()
      ).MemberwiseClone(), 
      $T16().CreateTranslation(0, -0.5, 0).MemberwiseClone()
    ).MemberwiseClone();
    this._renderer.View = view.MemberwiseClone();
    $S0A().CallVirtual("Traverse", null, this._renderer, this._wuggy.Children);
    this.Present();
  }; 

  function Tutorial_RenderSceneOb (so, modelView) {
    var $temp00;
    modelView = $S09().CallStatic($T16(), "op_Multiply", null, 
      $S09().CallStatic($T16(), "op_Multiply", null, modelView.MemberwiseClone(), $thisType.ModelXForm(so.Pos.MemberwiseClone(), so.Rot.MemberwiseClone(), so.Pivot.MemberwiseClone()).MemberwiseClone()).MemberwiseClone(), 
      $S0B().CallStatic($T16(), "CreateScale", null, so.Scale.MemberwiseClone()).MemberwiseClone()
    ).MemberwiseClone();
    var flag = so.Mesh !== null;
    if (flag) {
      (this.RenderCanvas$RC$value.ModelView = $S09().CallStatic($T16(), "op_Multiply", null, modelView.MemberwiseClone(), $S0B().CallStatic($T16(), "CreateScale", null, so.ModelScale.MemberwiseClone()).MemberwiseClone()).MemberwiseClone());
      (this.RenderCanvas$RC$value).SetShaderParam3f(this._albedoParam, so.Albedo.MemberwiseClone());
      (this.RenderCanvas$RC$value).Render(so.Mesh);
    }
    var flag2 = so.Children !== null;
    if (flag2) {

      for (var a$0 = so.Children._items, i$0 = 0, l$0 = (so.Children._size | 0); i$0 < l$0; ($temp00 = i$0, 
          i$0 = ((i$0 + 1) | 0), 
          $temp00)) {
        var current = a$0[i$0];
        this.RenderSceneOb(current, modelView.MemberwiseClone());
      }
    }
  }; 

  function Tutorial_Resize () {
    (this.RenderCanvas$RC$value).Viewport(
      0, 
      0, 
      this.get_Width(), 
      this.get_Height()
    );
    var aspect = +((+(this.get_Width()) / +(this.get_Height())));
    var projection = $T16().CreatePerspectiveFieldOfView(0.785398, aspect, 1, 20000);
    (this.RenderCanvas$RC$value.Projection = projection.MemberwiseClone());
  }; 

  JSIL.MakeType({
      BaseType: $asm04.TypeRef("Fusee.Engine.Core.RenderCanvas"), 
      Name: "Fusee.Tutorial.Core.Tutorial", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      Tutorial__ctor
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Init", 
      JSIL.MethodSignature.Void, 
      Tutorial_Init
    );

    $.Method({Static:true , Public:true }, "LoadMesh", 
      new JSIL.MethodSignature($asm04.TypeRef("Fusee.Engine.Core.Mesh"), [$.String]), 
      Tutorial_LoadMesh
    );

    $.Method({Static:true , Public:false}, "ModelXForm", 
      new JSIL.MethodSignature($asm06.TypeRef("Fusee.Math.Core.float4x4"), [
          $asm06.TypeRef("Fusee.Math.Core.float3"), $asm06.TypeRef("Fusee.Math.Core.float3"), 
          $asm06.TypeRef("Fusee.Math.Core.float3")
        ]), 
      Tutorial_ModelXForm
    );

    $.Method({Static:false, Public:true , Virtual:true }, "RenderAFrame", 
      JSIL.MethodSignature.Void, 
      Tutorial_RenderAFrame
    );

    $.Method({Static:false, Public:false}, "RenderSceneOb", 
      new JSIL.MethodSignature(null, [$asm09.TypeRef("Fusee.Tutorial.Core.SceneOb"), $asm06.TypeRef("Fusee.Math.Core.float4x4")]), 
      Tutorial_RenderSceneOb
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Resize", 
      JSIL.MethodSignature.Void, 
      Tutorial_Resize
    );

    $.Field({Static:false, Public:false}, "_mesh", $asm04.TypeRef("Fusee.Engine.Core.Mesh"));

    $.Field({Static:false, Public:false}, "_wheelBigL", $asm07.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_albedoParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:false}, "_alpha", $.Single);

    $.Field({Static:false, Public:false}, "_beta", $.Single);

    $.Field({Static:false, Public:false}, "_root", $asm09.TypeRef("Fusee.Tutorial.Core.SceneOb"));

    $.Field({Static:false, Public:false}, "_wuggy", $asm07.TypeRef("Fusee.Serialization.SceneContainer"));

    $.Field({Static:false, Public:false}, "_renderer", $asm09.TypeRef("Fusee.Tutorial.Core.Renderer"));


    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm03.TypeRef("Fusee.Engine.Common.FuseeApplicationAttribute"));

})();

/* class Fusee.Tutorial.Core.Tutorial+<>c */ 

(function $l$gc$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm07.Fusee.Serialization.SceneNodeContainer)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm14.System.String)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm07.Fusee.Serialization.MeshComponent)) ();
  };


  function $l$gc__ctor () {
  }; 

  function $l$gc_$lInit$gb__9_0 (n) {
    return n.Name == "WheelBigL";
  }; 

  function $l$gc_$lLoadMesh$gb__8_0 (c) {
    return true;
  }; 

  JSIL.MakeType({
      BaseType: $asm14.TypeRef("System.Object"), 
      Name: "Fusee.Tutorial.Core.Tutorial+<>c", 
      IsPublic: false, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      $l$gc__ctor
    );

    $.Method({Static:false, Public:false}, "$lInit$gb__9_0", 
      new JSIL.MethodSignature($.Boolean, [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), 
      $l$gc_$lInit$gb__9_0
    );

    $.Method({Static:false, Public:false}, "$lLoadMesh$gb__8_0", 
      new JSIL.MethodSignature($.Boolean, [$asm07.TypeRef("Fusee.Serialization.MeshComponent")]), 
      $l$gc_$lLoadMesh$gb__8_0
    );

    $.Field({Static:true , Public:true , ReadOnly:true }, "$l$g9", $.Type);

    $.Field({Static:true , Public:true }, "$l$g9__8_0", $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.MeshComponent")]));

    $.Field({Static:true , Public:true }, "$l$g9__9_0", $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]));


    function $l$gc__cctor () {
      $thisType.$l$g9 = new $thisType();
    }; 

    $.Method({Static:true , Public:false}, ".cctor", 
      JSIL.MethodSignature.Void, 
      $l$gc__cctor
    );


    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm14.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

})();

