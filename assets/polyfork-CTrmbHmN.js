const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./rider-model-COApJUaE.js","./GLTFLoader-CoKGN0Qw.js","./throw-Czc8exEJ.js","./rider-board-DJUE_772.js"])))=>i.map(i=>d[i]);
import{$n as e,A as t,An as n,B as r,Bn as i,C as a,Ct as o,D as s,Dn as c,Dt as l,E as u,En as d,Et as f,F as p,Fn as m,Ft as h,G as g,Gn as _,H as v,Hn as y,I as b,In as x,It as S,J as C,L as w,Ln as T,M as E,N as D,Nn as O,O as k,On as A,P as ee,Pn as j,Q as te,Qn as M,R as N,Rn as ne,S as re,St as ie,T as P,Tn as ae,Tt as oe,U as F,Un as se,V as ce,Vn as le,W as ue,Wn as de,X as fe,Xn as pe,Y as me,Yn as he,Z as ge,Zn as _e,_ as ve,_t as ye,a as be,ar as xe,at as Se,b as Ce,bn as we,bt as Te,cr as Ee,ct as De,d as Oe,dr as ke,dt as I,er as L,et as Ae,f as je,fn as Me,fr as Ne,ft as R,gn as Pe,gt as Fe,h as z,hn as B,hr as Ie,ht as V,i as H,ir as Le,it as Re,j as ze,jn as Be,jt as Ve,k as He,kn as Ue,kt as We,l as Ge,lr as Ke,m as qe,mn as Je,mr as Ye,mt as U,nr as Xe,nt as Ze,or as Qe,ot as $e,p as W,pn as et,pr as tt,pt as nt,q as G,qn as rt,r as it,rr as at,rt as ot,sr as st,st as ct,t as lt,tr as ut,tt as dt,u as ft,ur as pt,ut as mt,v as ht,vn as gt,vt as _t,w as vt,wt as yt,x as bt,xt,y as St,yn as Ct,yt as wt,z as Tt,zn as Et}from"./GLTFLoader-CoKGN0Qw.js";import{a as Dt,i as Ot,r as kt,t as At}from"./throw-Czc8exEJ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function jt(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Mt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new a(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},envMapRotation:{value:new R},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new a(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new a(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new a(16777215)},opacity:{value:1},center:{value:new e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},Nt={basic:{uniforms:Ne([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:Ne([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new a(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:Ne([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new a(0)},specular:{value:new a(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:Ne([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new a(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:Ne([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new a(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:Ne([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:Ne([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:Ne([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:Ne([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:Ne([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:Ne([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:Ne([q.common,q.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:Ne([q.lights,q.fog,{color:{value:new a(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};Nt.physical={uniforms:Ne([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new a(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new a(0)},specularColor:{value:new a(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var Pt={r:0,b:0,g:0},Ft=new nt,It=new R;It.set(-1,0,0,0,1,0,0,0,1);function Lt(e,t,n,r,i,o){let s=new a(0),c=i===!0?0:1,u,f,p=null,m=0,h=null;function g(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function _(t){let r=!1,i=g(t);i===null?y(s,c):i&&i.isColor&&(y(i,1),r=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?n.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,o),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(t,n){let i=g(n);i&&(i.isCubeTexture||i.mapping===306)?(f===void 0&&(f=new U(new W(1,1,1),new A({name:`BackgroundCubeMaterial`,uniforms:xe(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute(`normal`),f.geometry.deleteAttribute(`uv`),f.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=i,f.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Ft.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(It),f.material.toneMapped=vt.getTransfer(i.colorSpace)!==d,(p!==i||m!==i.version||h!==e.toneMapping)&&(f.material.needsUpdate=!0,p=i,m=i.version,h=e.toneMapping),f.layers.enableAll(),t.unshift(f,f.geometry,f.material,0,0,null)):i&&i.isTexture&&(u===void 0&&(u=new U(new l(2,2),new A({name:`BackgroundMaterial`,uniforms:xe(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=i,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.toneMapped=vt.getTransfer(i.colorSpace)!==d,i.matrixAutoUpdate===!0&&i.updateMatrix(),u.material.uniforms.uvTransform.value.copy(i.matrix),(p!==i||m!==i.version||h!==e.toneMapping)&&(u.material.needsUpdate=!0,p=i,m=i.version,h=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null))}function y(t,r){t.getRGB(Pt,pt(e)),n.buffers.color.setClear(Pt.r,Pt.g,Pt.b,r,o)}function b(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,y(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,y(s,c)},render:_,addToRenderList:v,dispose:b}}function Rt(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function zt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Bt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Ye(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Ye(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Vt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new f,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ht=4,Ut=6,Wt=20,Gt=256,Kt=new yt,qt=new a,Jt=null,Yt=0,Xt=0,Zt=!1,Qt=new L,$t=new L,en=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qt}=i;Jt=this._renderer.getRenderTarget(),Yt=this._renderer.getActiveCubeFace(),Xt=this._renderer.getActiveMipmapLevel(),Zt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jt,Yt,Xt),this._renderer.xr.enabled=Zt,e.scissorTest=!1,rn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jt=this._renderer.getRenderTarget(),Yt=this._renderer.getActiveCubeFace(),Xt=this._renderer.getActiveMipmapLevel(),Zt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:C,format:h,colorSpace:ct,depthBuffer:!1},r=nn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tn(r)),this._blurMaterial=on(r,e,t),this._ggxMaterial=an(r,e,t)}return r}_compileMaterial(e){let t=new U(new z,e);this._renderer.compile(t,Kt)}_sceneToCubeUV(e,t,n,r,i){let a=new oe(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(qt),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U(new W,new V({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(qt),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;rn(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cn()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sn());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;rn(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Kt)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ht?n-d+Ht:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,rn(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Kt),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,rn(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Kt)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];rn(t,3*l*(r>this._lodMax-Ht?r-this._lodMax+Ht:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Kt)}};function tn(e){let t=[],n=[],r=e,i=e-Ht+1+Ut;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?$t.set(1,r,n):e===1?$t.set(-n,1,-r):e===2?$t.set(-n,r,1):e===3?$t.set(-1,r,-n):e===4?$t.set(-n,-1,r):$t.set(n,r,-1),$t.toArray(l,(e*6+t)*3)}}let u=new z;u.setAttribute(`position`,new qe(c,3)),u.setAttribute(`outputDirection`,new qe(l,3)),n.push(new U(u,null)),r>Ht&&r--}return{lodMeshes:n,sizeLods:t}}function nn(e,t,n){let r=new at(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function rn(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function an(e,t,n){return new A({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Gt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ln(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function on(e,t,n){return new A({name:`SphericalGaussianBlur`,defines:{SAMPLES:Wt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ln(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sn(){return new A({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cn(){return new A({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ln(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var un=class extends at{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new He(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new W(5,5,5),i=new A({name:`CubemapFromEquirect`,uniforms:xe(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Re),new s(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function dn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new un(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new en(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new en(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function fn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ie(`WebGLRenderer: `+e+` extension not supported.`),t}}}function pn(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?se:y)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function mn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function hn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Ee(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function gn(t,n,r){let i=new WeakMap,a=new ut;function o(o,s,c){let l=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u===void 0?0:u.length,f=i.get(s);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let t=s.morphAttributes.position!==void 0,r=s.morphAttributes.normal!==void 0,o=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[],p=0;t===!0&&(p=1),r===!0&&(p=2),o===!0&&(p=3);let m=s.attributes.position.count*p,h=1;m>n.maxTextureSize&&(h=Math.ceil(m/n.maxTextureSize),m=n.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new E(g,m,h,d);_.type=ue,_.needsUpdate=!0;let v=p*4;for(let e=0;e<d;e++){let n=c[e],i=l[e],s=u[e],d=m*h*4*e;for(let e=0;e<n.count;e++){let c=e*v;t===!0&&(a.fromBufferAttribute(n,e),g[d+c+0]=a.x,g[d+c+1]=a.y,g[d+c+2]=a.z,g[d+c+3]=0),r===!0&&(a.fromBufferAttribute(i,e),g[d+c+4]=a.x,g[d+c+5]=a.y,g[d+c+6]=a.z,g[d+c+7]=0),o===!0&&(a.fromBufferAttribute(s,e),g[d+c+8]=a.x,g[d+c+9]=a.y,g[d+c+10]=a.z,g[d+c+11]=s.itemSize===4?a.w:1)}}f={count:d,texture:_,size:new e(m,h)},i.set(s,f);function y(){_.dispose(),i.delete(s),s.removeEventListener(`dispose`,y)}s.addEventListener(`dispose`,y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,`morphTexture`,o.morphTexture,r);else{let e=0;for(let t=0;t<l.length;t++)e+=l[t];let n=s.morphTargetsRelative?1:1-e;c.getUniforms().setValue(t,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(t,`morphTargetInfluences`,l)}c.getUniforms().setValue(t,`morphTargetsTexture`,f.texture,r),c.getUniforms().setValue(t,`morphTargetsTextureSize`,f.size)}return{update:o}}function _n(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var vn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function yn(e,t,n,r,i,a){let o=new at(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new z;l.setAttribute(`position`,new F([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new F([0,2,0,0,2,0],2));let u=new Je({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new U(l,u),f=new yt(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new at(t,n,{type:C,depthBuffer:!1,stencilBuffer:!1}),c=new at(t,n,{type:C,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},vt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=vn[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var bn=new Et,xn=new b(1,1),Sn=new E,Cn=new ze,wn=new He,Tn=[],En=[],Dn=new Float32Array(16),On=new Float32Array(9),kn=new Float32Array(4);function An(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Tn[i];if(a===void 0&&(a=new Float32Array(i),Tn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function jn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Mn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Nn(e,t){let n=En[t];n===void 0&&(n=new Int32Array(t),En[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Pn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Fn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jn(n,t))return;e.uniform2fv(this.addr,t),Mn(n,t)}}function In(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(jn(n,t))return;e.uniform3fv(this.addr,t),Mn(n,t)}}function Ln(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jn(n,t))return;e.uniform4fv(this.addr,t),Mn(n,t)}}function Rn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(jn(n,r))return;kn.set(r),e.uniformMatrix2fv(this.addr,!1,kn),Mn(n,r)}}function zn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(jn(n,r))return;On.set(r),e.uniformMatrix3fv(this.addr,!1,On),Mn(n,r)}}function Bn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(jn(n,r))return;Dn.set(r),e.uniformMatrix4fv(this.addr,!1,Dn),Mn(n,r)}}function Vn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Hn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jn(n,t))return;e.uniform2iv(this.addr,t),Mn(n,t)}}function Un(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(jn(n,t))return;e.uniform3iv(this.addr,t),Mn(n,t)}}function Wn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jn(n,t))return;e.uniform4iv(this.addr,t),Mn(n,t)}}function Gn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Kn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jn(n,t))return;e.uniform2uiv(this.addr,t),Mn(n,t)}}function qn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(jn(n,t))return;e.uniform3uiv(this.addr,t),Mn(n,t)}}function Jn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jn(n,t))return;e.uniform4uiv(this.addr,t),Mn(n,t)}}function Yn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(xn.compareFunction=n.isReversedDepthBuffer()?518:515,a=xn):a=bn,n.setTexture2D(t||a,i)}function Xn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Cn,i)}function Zn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||wn,i)}function Qn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Sn,i)}function $n(e){switch(e){case 5126:return Pn;case 35664:return Fn;case 35665:return In;case 35666:return Ln;case 35674:return Rn;case 35675:return zn;case 35676:return Bn;case 5124:case 35670:return Vn;case 35667:case 35671:return Hn;case 35668:case 35672:return Un;case 35669:case 35673:return Wn;case 5125:return Gn;case 36294:return Kn;case 36295:return qn;case 36296:return Jn;case 35678:case 36198:case 36298:case 36306:case 35682:return Yn;case 35679:case 36299:case 36307:return Xn;case 35680:case 36300:case 36308:case 36293:return Zn;case 36289:case 36303:case 36311:case 36292:return Qn}}function er(e,t){e.uniform1fv(this.addr,t)}function tr(e,t){let n=An(t,this.size,2);e.uniform2fv(this.addr,n)}function nr(e,t){let n=An(t,this.size,3);e.uniform3fv(this.addr,n)}function rr(e,t){let n=An(t,this.size,4);e.uniform4fv(this.addr,n)}function ir(e,t){let n=An(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ar(e,t){let n=An(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function or(e,t){let n=An(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sr(e,t){e.uniform1iv(this.addr,t)}function cr(e,t){e.uniform2iv(this.addr,t)}function lr(e,t){e.uniform3iv(this.addr,t)}function ur(e,t){e.uniform4iv(this.addr,t)}function dr(e,t){e.uniform1uiv(this.addr,t)}function fr(e,t){e.uniform2uiv(this.addr,t)}function pr(e,t){e.uniform3uiv(this.addr,t)}function mr(e,t){e.uniform4uiv(this.addr,t)}function hr(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?xn:bn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function gr(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Cn,a[e])}function _r(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||wn,a[e])}function vr(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Sn,a[e])}function yr(e){switch(e){case 5126:return er;case 35664:return tr;case 35665:return nr;case 35666:return rr;case 35674:return ir;case 35675:return ar;case 35676:return or;case 5124:case 35670:return sr;case 35667:case 35671:return cr;case 35668:case 35672:return lr;case 35669:case 35673:return ur;case 5125:return dr;case 36294:return fr;case 36295:return pr;case 36296:return mr;case 35678:case 36198:case 36298:case 36306:case 35682:return hr;case 35679:case 36299:case 36307:return gr;case 35680:case 36300:case 36308:case 36293:return _r;case 36289:case 36303:case 36311:case 36292:return vr}}var br=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$n(t.type)}},xr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yr(t.type)}},Sr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Cr=/(\w+)(\])?(\[|\.)?/g;function wr(e,t){e.seq.push(t),e.map[t.id]=t}function Tr(e,t,n){let r=e.name,i=r.length;for(Cr.lastIndex=0;;){let a=Cr.exec(r),o=Cr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){wr(n,l===void 0?new br(s,e,t):new xr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Sr(s),wr(n,e)),n=e}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Tr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Dr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Or=37297,kr=0;function Ar(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var jr=new R;function Mr(e){vt._getMatrix(jr,vt.workingColorSpace,e);let t=`mat3( ${jr.elements.map(e=>e.toFixed(4))} )`;switch(vt.getTransfer(e)){case De:return[t,`LinearTransferOETF`];case d:return[t,`sRGBTransferOETF`];default:return Ye(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Nr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ar(e.getShaderSource(t),r)}return i}function Pr(e,t){let n=Mr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Fr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ir(e,t){let n=Fr[t];return n===void 0?(Ye(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Lr=new L;function Rr(){return vt.getLuminanceCoefficients(Lr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Lr.x.toFixed(4)}, ${Lr.y.toFixed(4)}, ${Lr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hr).join(`
`)}function Br(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hr(e){return e!==``}function Ur(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(e){return e.replace(Gr,Jr)}var qr=new Map;function Jr(e,t){let n=K[t];if(n===void 0){let e=qr.get(t);if(e!==void 0)n=K[e],Ye(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Kr(n)}var Yr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xr(e){return e.replace(Yr,Zr)}function Zr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Qr(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var $r={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ei(e){return $r[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ti={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ni(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ti[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ri={302:`ENVMAP_MODE_REFRACTION`};function ii(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ri[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ai={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function oi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ai[e.combine]||`ENVMAP_BLENDING_NONE`}function si(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ci(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ei(n),l=ni(n),u=ii(n),d=oi(n),f=si(n),p=zr(n),m=Br(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hr).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hr).join(`
`),_.length>0&&(_+=`
`)):(g=[Qr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hr).join(`
`),_=[Qr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:Ir(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,Pr(`linearToOutputTexel`,n.outputColorSpace),Rr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Hr).join(`
`)),o=Kr(o),o=Ur(o,n),o=Wr(o,n),s=Kr(s),s=Ur(s,n),s=Wr(s,n),o=Xr(o),s=Xr(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Dr(i,i.VERTEX_SHADER,y),S=Dr(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Nr(i,x,`vertex`),n=Nr(i,S,`fragment`);Ee(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Ye(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Er(i,h),T=Vr(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Or)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kr++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var li=0,ui=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new di(e),t.set(e,n)),n}},di=class{constructor(e){this.id=li++,this.code=e,this.usedTimes=0}};function fi(e){return e===1030||e===37490||e===36285}function pi(e,t,n,r,i,a){let o=new Ae,s=new ui,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Ye(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Nt[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,N=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,P=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,F=!!i.displacementMap,se=!!i.emissiveMap,ce=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,I=!!i.gradientMap,L=!!i.alphaMap,Ae=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let R={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:P,bumpMap:ae,normalMap:oe,displacementMap:F,emissiveMap:se,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&fi(i.normalMap.format),metalnessMap:ce,roughnessMap:le,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:I,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:L,alphaTest:Ae,alphaHash:je,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:P&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:F&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:ce&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:L&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||L),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&vt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&vt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return R.vertexUv1s=c.has(1),R.vertexUv2s=c.has(2),R.vertexUv3s=c.has(3),c.clear(),R}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Nt[t];n=de.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ci(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function mi(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function hi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _i(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||hi),r.length>1&&r.sort(t||gi),i.length>1&&i.sort(t||gi)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function vi(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _i,e.set(t,[i])):n>=r.length?(i=new _i,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function yi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new a};break;case`SpotLight`:n={position:new L,direction:new L,color:new a,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new a,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new a,groundColor:new a};break;case`RectAreaLight`:n={color:new a,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function bi(){let t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let r;switch(n.type){case`SunLight`:case`DirectionalLight`:r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e};break;case`SpotLight`:r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e};break;case`PointLight`:r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e,shadowCameraNear:1,shadowCameraFar:1e3}}return t[n.id]=r,r}}}var xi=0;function Si(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ci(e){let t=new yi,n=bi(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new nt,o=new nt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Si);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=xi++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function wi(e){let t=new Ci(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ti(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new wi(e),t.set(n,[a])):r>=i.length?(a=new wi(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ei=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Di=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Oi=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ki=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Ai=new nt,ji=new L,Mi=new L;function Ni(t,n,r){let i=new g,a=new e,o=new e,s=new ut,c=new Fe,l=new ye,u={},d=r.maxTextureSize,f={0:1,1:0,2:2},p=new A({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new e},radius:{value:4}},vertexShader:Ei,fragmentShader:Di}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new z;h.setAttribute(`position`,new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new U(h,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(e,n,r){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||e.length===0)return;this.type===2&&(Ye(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=t.getRenderTarget(),l=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),f=t.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=y!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=e.length;c<l;c++){let l=e[c],u=l.shadow;if(u===void 0){Ye(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;a.copy(u.mapSize);let m=u.getFrameExtents();a.multiply(m),o.copy(u.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/m.x),a.x=o.x*m.x,u.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/m.y),a.y=o.y*m.y,u.mapSize.y=o.y));let h=t.state.buffers.depth.getReversed();if(u.camera._reversedDepth=h,u.map===null||p===!0){if(u.map!==null&&(u.map.depthTexture!==null&&(u.map.depthTexture.dispose(),u.map.depthTexture=null),u.map.dispose()),this.type===3){if(l.isPointLight){Ye(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}u.map=new at(a.x,a.y,{format:Me,type:C,minFilter:Re,magFilter:Re,generateMipmaps:!1}),u.map.texture.name=l.name+`.shadowMap`,u.map.depthTexture=new b(a.x,a.y,ue),u.map.depthTexture.name=l.name+`.shadowMapDepth`,u.map.depthTexture.format=ee,u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=Te,u.map.depthTexture.magFilter=Te}else l.isPointLight?(u.map=new un(a.x),u.map.depthTexture=new k(a.x,he)):(u.map=new at(a.x,a.y),u.map.depthTexture=new b(a.x,a.y,he)),u.map.depthTexture.name=l.name+`.shadowMap`,u.map.depthTexture.format=ee,this.type===1?(u.map.depthTexture.compareFunction=h?518:515,u.map.depthTexture.minFilter=Re,u.map.depthTexture.magFilter=Re):(u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=Te,u.map.depthTexture.magFilter=Te);u.camera.updateProjectionMatrix()}u.map.isWebGLCubeRenderTarget!==!0&&(u.map.width!==a.x||u.map.height!==a.y)&&u.map.setSize(a.x,a.y);let g=u.map.isWebGLCubeRenderTarget?6:u.getViewportCount();l.isPointLight!==!0&&u.updateMatrices(l,r);for(let e=0;e<g;e++){let a=u.getCamera(e);if(l.isPointLight){let t=u.camera,n=u.matrix,r=l.distance||t.far;r!==t.far&&(t.far=r,t.updateProjectionMatrix()),ji.setFromMatrixPosition(l.matrixWorld),t.position.copy(ji),Mi.copy(t.position),Mi.add(Oi[e]),t.up.copy(ki[e]),t.lookAt(Mi),t.updateMatrixWorld(),n.makeTranslation(-ji.x,-ji.y,-ji.z),Ai.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),u._frustum.setFromProjectionMatrix(Ai,t.coordinateSystem,t.reversedDepth)}if(u.map.isWebGLCubeRenderTarget)t.setRenderTarget(u.map,e),t.clear();else{e===0&&(t.setRenderTarget(u.map),t.clear());let n=u.getViewport(e);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),f.viewport(s)}i=u.getFrustum(e),w(n,r,a,l,this.type)}u.isPointLightShadow!==!0&&this.type===3&&x(u,r),u.needsUpdate=!1}y=this.type,v.needsUpdate=!1,t.setRenderTarget(c,l,u)};function x(e,r){let i=n.update(_);p.defines.VSM_SAMPLES!==e.blurSamples&&(p.defines.VSM_SAMPLES=e.blurSamples,m.defines.VSM_SAMPLES=e.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),e.mapPass===null?e.mapPass=new at(a.x,a.y,{format:Me,type:C}):(e.mapPass.width!==e.map.width||e.mapPass.height!==e.map.height)&&e.mapPass.setSize(e.map.width,e.map.height),p.uniforms.shadow_pass.value=e.map.depthTexture,p.uniforms.resolution.value.set(e.map.width,e.map.height),p.uniforms.radius.value=e.radius,t.setRenderTarget(e.mapPass),t.clear(),t.renderBufferDirect(r,null,i,p,_,null),m.uniforms.shadow_pass.value=e.mapPass.texture,m.uniforms.resolution.value.set(e.map.width,e.map.height),m.uniforms.radius.value=e.radius,t.setRenderTarget(e.map),t.clear(),t.renderBufferDirect(r,null,i,m,_,null)}function S(e,n,r,i){let a=null,o=r.isPointLight===!0?e.customDistanceMaterial:e.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,t.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,T)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let e=t.properties.get(a);e.light=r}return a}function w(e,r,a,o,s){if(e.visible===!1)return;if(e.layers.test(r.layers)&&(e.isMesh||e.isLine||e.isPoints)&&(e.castShadow||e.receiveShadow&&s===3)&&(!e.frustumCulled||e.intersectsFrustum(i))){e.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,e.matrixWorld);let i=n.update(e),c=e.material;if(Array.isArray(c)){let n=i.groups;for(let l=0,u=n.length;l<u;l++){let u=n[l],d=c[u.materialIndex];if(d&&d.visible){let n=S(e,d,o,s);e.onBeforeShadow(t,e,r,a,i,n,u),t.renderBufferDirect(a,null,i,n,e,u),e.onAfterShadow(t,e,r,a,i,n,u)}}}else if(c.visible){let n=S(e,c,o,s);e.onBeforeShadow(t,e,r,a,i,n,null),t.renderBufferDirect(a,null,i,n,e,null),e.onAfterShadow(t,e,r,a,i,n,null)}}let c=e.children;for(let e=0,t=c.length;e<t;e++)w(c[e],r,a,o,s)}function T(e){e.target.removeEventListener(`dispose`,T);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Pi(e,t){function n(){let t=!1,n=new ut,r=null,i=new ut(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=we[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let o=new n,s=new r,c=new i,l=new WeakMap,u=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new a(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,j=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=N>=1);let re=null,ie={},P=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new ut().fromArray(P),F=new ut().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),c.setClear(0),le(e.DEPTH_TEST),s.setFunc(3),ve(!1),ye(1),le(e.CULL_FACE),ge(0);function le(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function ue(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function de(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return g!==t&&(e.useProgram(t),g=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(ue(e.BLEND),_=!1);else if(_===!1&&(le(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ee(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ee(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Ee(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Ee(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(me[n],me[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),s.setFunc(t.depthFunc),s.setTest(t.depthTest),s.setMask(t.depthWrite),o.setMask(t.colorWrite);let i=t.stencilWrite;c.setTest(i),i&&(c.setMask(t.stencilWriteMask),c.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),c.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function ye(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function be(t){t!==A&&(M&&e.lineWidth(t),A=t)}function xe(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(ee!==n||j!==r)&&(ee=n,j=r,s.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function De(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function I(){try{e.texSubImage2D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function L(){try{e.texSubImage3D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function R(){try{e.texImage2D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){Ee(`WebGLState:`,e)}}function Fe(t){return f[t]===void 0?e.getParameter(t):f[t]}function z(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function B(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Ie(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function V(t,n){let r=u.get(n);r===void 0&&(r=new WeakMap,u.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function H(t,n){let r=u.get(n).get(t);l.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),l.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},re=null,ie={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new a(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),o.reset(),s.reset(),c.reset()}return{buffers:{color:o,depth:s,stencil:c},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:Te,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:R,texImage3D:Pe,pixelStorei:z,getParameter:Fe,updateUBOMapping:V,uniformBlockBinding:H,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:I,texSubImage3D:L,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:B,viewport:Ie,reset:Le}}function Fi(t,n,r,i,a,o,s){let c=n.has(`WEBGL_multisampled_render_to_texture`)?n.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new e,d=new WeakMap,f=new Set,m,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):st(`canvas`)}function v(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);m===void 0&&(m=_(n,a));let o=t?_(n,a):m;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Ye(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Ye(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(e){t.generateMipmap(e)}function x(e){return e.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?t.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(e,r,i,a,o,s=!1){if(e!==null){if(t[e]!==void 0)return t[e];Ye(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let c;a&&(c=n.get(`EXT_texture_norm16`),c||Ye(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===t.RED&&(i===t.FLOAT&&(l=t.R32F),i===t.HALF_FLOAT&&(l=t.R16F),i===t.UNSIGNED_BYTE&&(l=t.R8),i===t.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===t.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===t.RED_INTEGER&&(i===t.UNSIGNED_BYTE&&(l=t.R8UI),i===t.UNSIGNED_SHORT&&(l=t.R16UI),i===t.UNSIGNED_INT&&(l=t.R32UI),i===t.BYTE&&(l=t.R8I),i===t.SHORT&&(l=t.R16I),i===t.INT&&(l=t.R32I)),r===t.RG&&(i===t.FLOAT&&(l=t.RG32F),i===t.HALF_FLOAT&&(l=t.RG16F),i===t.UNSIGNED_BYTE&&(l=t.RG8),i===t.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===t.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===t.RG_INTEGER&&(i===t.UNSIGNED_BYTE&&(l=t.RG8UI),i===t.UNSIGNED_SHORT&&(l=t.RG16UI),i===t.UNSIGNED_INT&&(l=t.RG32UI),i===t.BYTE&&(l=t.RG8I),i===t.SHORT&&(l=t.RG16I),i===t.INT&&(l=t.RG32I)),r===t.RGB_INTEGER&&(i===t.UNSIGNED_BYTE&&(l=t.RGB8UI),i===t.UNSIGNED_SHORT&&(l=t.RGB16UI),i===t.UNSIGNED_INT&&(l=t.RGB32UI),i===t.BYTE&&(l=t.RGB8I),i===t.SHORT&&(l=t.RGB16I),i===t.INT&&(l=t.RGB32I)),r===t.RGBA_INTEGER&&(i===t.UNSIGNED_BYTE&&(l=t.RGBA8UI),i===t.UNSIGNED_SHORT&&(l=t.RGBA16UI),i===t.UNSIGNED_INT&&(l=t.RGBA32UI),i===t.BYTE&&(l=t.RGBA8I),i===t.SHORT&&(l=t.RGBA16I),i===t.INT&&(l=t.RGBA32I)),r===t.RGB&&(i===t.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===t.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===t.UNSIGNED_INT_5_9_9_9_REV&&(l=t.RGB9_E5),i===t.UNSIGNED_INT_10F_11F_11F_REV&&(l=t.R11F_G11F_B10F)),r===t.RGBA){let e=s?De:vt.getTransfer(o);i===t.FLOAT&&(l=t.RGBA32F),i===t.HALF_FLOAT&&(l=t.RGBA16F),i===t.UNSIGNED_BYTE&&(l=e===`srgb`?t.SRGB8_ALPHA8:t.RGBA8),i===t.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===t.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===t.UNSIGNED_SHORT_4_4_4_4&&(l=t.RGBA4),i===t.UNSIGNED_SHORT_5_5_5_1&&(l=t.RGB5_A1)}return(l===t.R16F||l===t.R32F||l===t.RG16F||l===t.RG32F||l===t.RGBA16F||l===t.RGBA32F)&&n.get(`EXT_color_buffer_float`),l}function C(e,n){let r;return e?n===null||n===1014||n===1020?r=t.DEPTH24_STENCIL8:n===1015?r=t.DEPTH32F_STENCIL8:n===1012&&(r=t.DEPTH24_STENCIL8,Ye(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=t.DEPTH_COMPONENT24:n===1015?r=t.DEPTH_COMPONENT32F:n===1012&&(r=t.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),D(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&f.delete(t)}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),k(t)}function D(e){let t=i.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=h.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&O(e),Object.keys(r).length===0&&h.delete(n)}i.remove(e)}function O(e){let n=i.get(e);t.deleteTexture(n.__webglTexture);let r=e.source,a=h.get(r);delete a[n.__cacheKey],s.memory.textures--}function k(e){let n=i.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),i.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(n.__webglFramebuffer[e]))for(let r=0;r<n.__webglFramebuffer[e].length;r++)t.deleteFramebuffer(n.__webglFramebuffer[e][r]);else t.deleteFramebuffer(n.__webglFramebuffer[e]);n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer[e])}else{if(Array.isArray(n.__webglFramebuffer))for(let e=0;e<n.__webglFramebuffer.length;e++)t.deleteFramebuffer(n.__webglFramebuffer[e]);else t.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&t.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let e=0;e<n.__webglColorRenderbuffer.length;e++)n.__webglColorRenderbuffer[e]&&t.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);n.__webglDepthRenderbuffer&&t.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,n=r.length;e<n;e++){let n=i.get(r[e]);n.__webglTexture&&(t.deleteTexture(n.__webglTexture),s.memory.textures--),i.remove(r[e])}i.remove(e)}let A=0;function ee(){A=0}function j(){return A}function te(e){A=e}function M(){let e=A;return e>=a.maxTextures&&Ye(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+a.maxTextures),A+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ne(e,n){let a=i.get(e);if(e.isVideoTexture&&I(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&a.__version!==e.version){let t=e.image;if(t===null)Ye(`WebGLRenderer: Texture marked for update but no image data found.`);else if(t.complete===!1)Ye(`WebGLRenderer: Texture marked for update but image is incomplete`);else{fe(a,e,n);return}}else e.isExternalTexture&&(a.__webglTexture=e.sourceTexture?e.sourceTexture:null);r.bindTexture(t.TEXTURE_2D,a.__webglTexture,t.TEXTURE0+n)}function re(e,n){let a=i.get(e);e.isRenderTargetTexture===!1&&e.version>0&&a.__version!==e.version?fe(a,e,n):(e.isExternalTexture&&(a.__webglTexture=e.sourceTexture?e.sourceTexture:null),r.bindTexture(t.TEXTURE_2D_ARRAY,a.__webglTexture,t.TEXTURE0+n))}function P(e,n){let a=i.get(e);e.isRenderTargetTexture===!1&&e.version>0&&a.__version!==e.version?fe(a,e,n):r.bindTexture(t.TEXTURE_3D,a.__webglTexture,t.TEXTURE0+n)}function ae(e,n){let a=i.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&a.__version!==e.version?pe(a,e,n):r.bindTexture(t.TEXTURE_CUBE_MAP,a.__webglTexture,t.TEXTURE0+n)}let oe={[Ct]:t.REPEAT,[bt]:t.CLAMP_TO_EDGE,[wt]:t.MIRRORED_REPEAT},F={[Te]:t.NEAREST,[ie]:t.NEAREST_MIPMAP_NEAREST,[xt]:t.NEAREST_MIPMAP_LINEAR,[Re]:t.LINEAR,[$e]:t.LINEAR_MIPMAP_NEAREST,[Se]:t.LINEAR_MIPMAP_LINEAR},se={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function ce(e,r){if(r.type===1015&&n.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&Ye(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),t.texParameteri(e,t.TEXTURE_WRAP_S,oe[r.wrapS]),t.texParameteri(e,t.TEXTURE_WRAP_T,oe[r.wrapT]),(e===t.TEXTURE_3D||e===t.TEXTURE_2D_ARRAY)&&t.texParameteri(e,t.TEXTURE_WRAP_R,oe[r.wrapR]),t.texParameteri(e,t.TEXTURE_MAG_FILTER,F[r.magFilter]),t.texParameteri(e,t.TEXTURE_MIN_FILTER,F[r.minFilter]),r.compareFunction&&(t.texParameteri(e,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(e,t.TEXTURE_COMPARE_FUNC,se[r.compareFunction])),n.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&n.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){let o=n.get(`EXT_texture_filter_anisotropic`);t.texParameterf(e,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,a.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function le(e,n){let r=!1;e.__webglInit===void 0&&(e.__webglInit=!0,n.addEventListener(`dispose`,T));let i=n.source,a=h.get(i);a===void 0&&(a={},h.set(i,a));let o=N(n);if(o!==e.__cacheKey){a[o]===void 0&&(a[o]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[e.__cacheKey];i!==void 0&&(a[e.__cacheKey].usedTimes--,i.usedTimes===0&&O(n)),e.__cacheKey=o,e.__webglTexture=a[o].texture}return r}function ue(e,t,n){return Math.floor(Math.floor(e/n)/t)}function de(e,n,i,a){let o=e.updateRanges;if(o.length===0)r.texSubImage2D(t.TEXTURE_2D,0,0,0,n.width,n.height,i,a,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],i=t.start+t.count,a=ue(r.start,n.width,4),c=ue(t.start,n.width,4);r.start<=i+1&&a===c&&ue(r.start+r.count-1,n.width,4)===a?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=r.getParameter(t.UNPACK_ROW_LENGTH),l=r.getParameter(t.UNPACK_SKIP_PIXELS),u=r.getParameter(t.UNPACK_SKIP_ROWS);r.pixelStorei(t.UNPACK_ROW_LENGTH,n.width);for(let e=0,s=o.length;e<s;e++){let s=o[e],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),f=l;r.pixelStorei(t.UNPACK_SKIP_PIXELS,u),r.pixelStorei(t.UNPACK_SKIP_ROWS,d),r.texSubImage2D(t.TEXTURE_2D,0,u,d,f,1,i,a,n.data)}e.clearUpdateRanges(),r.pixelStorei(t.UNPACK_ROW_LENGTH,c),r.pixelStorei(t.UNPACK_SKIP_PIXELS,l),r.pixelStorei(t.UNPACK_SKIP_ROWS,u)}}function fe(e,n,s){let c=t.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(c=t.TEXTURE_2D_ARRAY),n.isData3DTexture&&(c=t.TEXTURE_3D);let l=le(e,n),u=n.source;r.bindTexture(c,e.__webglTexture,t.TEXTURE0+s);let d=i.get(u);if(u.version!==d.__version||l===!0){if(r.activeTexture(t.TEXTURE0+s),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let e=vt.getPrimaries(vt.workingColorSpace),i=n.colorSpace===``?null:vt.getPrimaries(n.colorSpace),a=n.colorSpace===``||e===i?t.NONE:t.BROWSER_DEFAULT_WEBGL;r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}r.pixelStorei(t.UNPACK_ALIGNMENT,n.unpackAlignment);let e=v(n.image,!1,a.maxTextureSize);e=L(n,e);let i=o.convert(n.format,n.colorSpace),m=o.convert(n.type),h=S(n.internalFormat,i,m,n.normalized,n.colorSpace,n.isVideoTexture);ce(c,n);let g,_=n.mipmaps,x=n.isVideoTexture!==!0,T=d.__version===void 0||l===!0,E=u.dataReady,D=w(n,e);if(n.isDepthTexture)h=C(n.format===p,n.type),T&&(x?r.texStorage2D(t.TEXTURE_2D,1,h,e.width,e.height):r.texImage2D(t.TEXTURE_2D,0,h,e.width,e.height,0,i,m,null));else if(n.isDataTexture){if(_.length>0){x&&T&&r.texStorage2D(t.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let e=0,n=_.length;e<n;e++)g=_[e],x?E&&r.texSubImage2D(t.TEXTURE_2D,e,0,0,g.width,g.height,i,m,g.data):r.texImage2D(t.TEXTURE_2D,e,h,g.width,g.height,0,i,m,g.data);n.generateMipmaps=!1}else x?(T&&r.texStorage2D(t.TEXTURE_2D,D,h,e.width,e.height),E&&de(n,e,i,m)):r.texImage2D(t.TEXTURE_2D,0,h,e.width,e.height,0,i,m,e.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){x&&T&&r.texStorage3D(t.TEXTURE_2D_ARRAY,D,h,_[0].width,_[0].height,e.depth);for(let a=0,o=_.length;a<o;a++)if(g=_[a],n.format!==1023){if(i!==null){if(x){if(E){if(n.layerUpdates.size>0){let e=Ke(g.width,g.height,n.format,n.type);for(let o of n.layerUpdates){let n=g.data.subarray(o*e/g.data.BYTES_PER_ELEMENT,(o+1)*e/g.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,a,0,0,o,g.width,g.height,1,i,n)}}else r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,a,0,0,0,g.width,g.height,e.depth,i,g.data)}}else r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,a,h,g.width,g.height,e.depth,0,g.data,0,0)}else Ye(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else x?E&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,a,0,0,0,g.width,g.height,e.depth,i,m,g.data):r.texImage3D(t.TEXTURE_2D_ARRAY,a,h,g.width,g.height,e.depth,0,i,m,g.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{x&&T&&r.texStorage2D(t.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let e=0,a=_.length;e<a;e++)g=_[e],n.format===1023?x?E&&r.texSubImage2D(t.TEXTURE_2D,e,0,0,g.width,g.height,i,m,g.data):r.texImage2D(t.TEXTURE_2D,e,h,g.width,g.height,0,i,m,g.data):i===null?Ye(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):x?E&&r.compressedTexSubImage2D(t.TEXTURE_2D,e,0,0,g.width,g.height,i,g.data):r.compressedTexImage2D(t.TEXTURE_2D,e,h,g.width,g.height,0,g.data)}}else if(n.isDataArrayTexture){if(x){if(T&&r.texStorage3D(t.TEXTURE_2D_ARRAY,D,h,e.width,e.height,e.depth),E){if(n.layerUpdates.size>0){let a=Ke(e.width,e.height,n.format,n.type);for(let o of n.layerUpdates){let n=e.data.subarray(o*a/e.data.BYTES_PER_ELEMENT,(o+1)*a/e.data.BYTES_PER_ELEMENT);r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,o,e.width,e.height,1,i,m,n)}n.clearLayerUpdates()}else r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,i,m,e.data)}}else r.texImage3D(t.TEXTURE_2D_ARRAY,0,h,e.width,e.height,e.depth,0,i,m,e.data)}else if(n.isData3DTexture)x?(T&&r.texStorage3D(t.TEXTURE_3D,D,h,e.width,e.height,e.depth),E&&r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,i,m,e.data)):r.texImage3D(t.TEXTURE_3D,0,h,e.width,e.height,e.depth,0,i,m,e.data);else if(n.isFramebufferTexture){if(T){if(x)r.texStorage2D(t.TEXTURE_2D,D,h,e.width,e.height);else{let n=e.width,a=e.height;for(let e=0;e<D;e++)r.texImage2D(t.TEXTURE_2D,e,h,n,a,0,i,m,null),n>>=1,a>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in t){let r=t.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),e.parentNode!==r){r.appendChild(e),f.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,e);else{let n=t.RGBA,r=t.RGBA,i=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,n,r,i,e)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(_.length>0){if(x&&T){let e=Ae(_[0]);r.texStorage2D(t.TEXTURE_2D,D,h,e.width,e.height)}for(let e=0,n=_.length;e<n;e++)g=_[e],x?E&&r.texSubImage2D(t.TEXTURE_2D,e,0,0,i,m,g):r.texImage2D(t.TEXTURE_2D,e,h,i,m,g);n.generateMipmaps=!1}else if(x){if(T){let n=Ae(e);r.texStorage2D(t.TEXTURE_2D,D,h,n.width,n.height)}E&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,i,m,e)}else r.texImage2D(t.TEXTURE_2D,0,h,i,m,e);y(n)&&b(c),d.__version=u.version,n.onUpdate&&n.onUpdate(n)}e.__version=n.version}function pe(e,n,s){if(n.image.length!==6)return;let c=le(e,n),l=n.source;r.bindTexture(t.TEXTURE_CUBE_MAP,e.__webglTexture,t.TEXTURE0+s);let u=i.get(l);if(l.version!==u.__version||c===!0){r.activeTexture(t.TEXTURE0+s);let e=vt.getPrimaries(vt.workingColorSpace),i=n.colorSpace===``?null:vt.getPrimaries(n.colorSpace),d=n.colorSpace===``||e===i?t.NONE:t.BROWSER_DEFAULT_WEBGL;r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(t.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=n.isCompressedTexture||n.image[0].isCompressedTexture,p=n.image[0]&&n.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(n.image[e],!0,a.maxCubemapSize):m[e]=p?n.image[e].image:n.image[e],m[e]=L(n,m[e]);let h=m[0],g=o.convert(n.format,n.colorSpace),_=o.convert(n.type),x=S(n.internalFormat,g,_,n.normalized,n.colorSpace),C=n.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=w(n,h);ce(t.TEXTURE_CUBE_MAP,n);let O;if(f){C&&T&&r.texStorage2D(t.TEXTURE_CUBE_MAP,D,x,h.width,h.height);for(let e=0;e<6;e++){O=m[e].mipmaps;for(let i=0;i<O.length;i++){let a=O[i];n.format===1023?C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,a.width,a.height,g,_,a.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,x,a.width,a.height,0,g,_,a.data):g===null?Ye(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?E&&r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,a.width,a.height,g,a.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,x,a.width,a.height,0,a.data)}}}else{if(O=n.mipmaps,C&&T){O.length>0&&D++;let e=Ae(m[0]);r.texStorage2D(t.TEXTURE_CUBE_MAP,D,x,e.width,e.height)}for(let e=0;e<6;e++)if(p){C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,m[e].width,m[e].height,g,_,m[e].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,x,m[e].width,m[e].height,0,g,_,m[e].data);for(let n=0;n<O.length;n++){let i=O[n].image[e].image;C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,n+1,0,0,i.width,i.height,g,_,i.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,n+1,x,i.width,i.height,0,g,_,i.data)}}else{C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,m[e]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,x,g,_,m[e]);for(let n=0;n<O.length;n++){let i=O[n];C?E&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,n+1,0,0,g,_,i.image[e]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,n+1,x,g,_,i.image[e])}}}y(n)&&b(t.TEXTURE_CUBE_MAP),u.__version=l.version,n.onUpdate&&n.onUpdate(n)}e.__version=n.version}function me(e,n,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=S(a.internalFormat,d,f,a.normalized,a.colorSpace),m=i.get(n),h=i.get(a);if(h.__renderTarget=n,!m.__hasExternalTextures){let e=Math.max(1,n.width>>u),i=Math.max(1,n.height>>u);l===t.TEXTURE_3D||l===t.TEXTURE_2D_ARRAY?r.texImage3D(l,u,p,e,i,n.depth,0,d,f,null):r.texImage2D(l,u,p,e,i,0,d,f,null)}r.bindFramebuffer(t.FRAMEBUFFER,e),ke(n)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,s,l,h.__webglTexture,0,Oe(n)):(l===t.TEXTURE_2D||l>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,s,l,h.__webglTexture,u),r.bindFramebuffer(t.FRAMEBUFFER,null)}function he(e,n,r){if(t.bindRenderbuffer(t.RENDERBUFFER,e),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),s=n.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ke(n)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe(n),o,n.width,n.height):r?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe(n),o,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,o,n.width,n.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,s,t.RENDERBUFFER,e)}else{let e=n.textures;for(let i=0;i<e.length;i++){let a=e[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=S(a.internalFormat,s,l,a.normalized,a.colorSpace);ke(n)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe(n),u,n.width,n.height):r?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe(n),u,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,u,n.width,n.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(e,n,a){let s=n.isWebGLCubeRenderTarget===!0;if(r.bindFramebuffer(t.FRAMEBUFFER,e),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=i.get(n.depthTexture);if(l.__renderTarget=n,(!l.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),s){if(l.__webglInit===void 0&&(l.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,T)),l.__webglTexture===void 0){l.__webglTexture=t.createTexture(),r.bindTexture(t.TEXTURE_CUBE_MAP,l.__webglTexture),ce(t.TEXTURE_CUBE_MAP,n.depthTexture);let e=o.convert(n.depthTexture.format),i=o.convert(n.depthTexture.type),a;n.depthTexture.format===1026?a=t.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(a=t.DEPTH24_STENCIL8);for(let r=0;r<6;r++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,a,n.width,n.height,0,e,i,null)}}else ne(n.depthTexture,0);let u=l.__webglTexture,d=Oe(n),f=s?t.TEXTURE_CUBE_MAP_POSITIVE_X+a:t.TEXTURE_2D,p=n.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)ke(n)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,p,f,u,0,d):t.framebufferTexture2D(t.FRAMEBUFFER,p,f,u,0);else if(n.depthTexture.format===1027)ke(n)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,p,f,u,0,d):t.framebufferTexture2D(t.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function _e(e){let n=i.get(e),a=e.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==e.depthTexture){let t=e.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),t){let e=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,t.removeEventListener(`dispose`,e)};t.addEventListener(`dispose`,e),n.__depthDisposeCallback=e}n.__boundDepthTexture=t}if(e.depthTexture&&!n.__autoAllocateDepthBuffer){if(a)for(let t=0;t<6;t++)ge(n.__webglFramebuffer[t],e,t);else{let t=e.texture.mipmaps;t&&t.length>0?ge(n.__webglFramebuffer[0],e,0):ge(n.__webglFramebuffer,e,0)}}else if(a){n.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(r.bindFramebuffer(t.FRAMEBUFFER,n.__webglFramebuffer[i]),n.__webglDepthbuffer[i]===void 0)n.__webglDepthbuffer[i]=t.createRenderbuffer(),he(n.__webglDepthbuffer[i],e,!1);else{let r=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[i];t.bindRenderbuffer(t.RENDERBUFFER,a),t.framebufferRenderbuffer(t.FRAMEBUFFER,r,t.RENDERBUFFER,a)}}else{let i=e.texture.mipmaps;if(i&&i.length>0?r.bindFramebuffer(t.FRAMEBUFFER,n.__webglFramebuffer[0]):r.bindFramebuffer(t.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=t.createRenderbuffer(),he(n.__webglDepthbuffer,e,!1);else{let r=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,r,t.RENDERBUFFER,i)}}r.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(e,n,r){let a=i.get(e);n!==void 0&&me(a.__webglFramebuffer,e,e.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),r!==void 0&&_e(e)}function ye(e){let n=e.texture,a=i.get(e),c=i.get(n);e.addEventListener(`dispose`,E);let l=e.textures,u=e.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=t.createTexture()),c.__version=n.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let e=0;e<6;e++)if(n.mipmaps&&n.mipmaps.length>0){a.__webglFramebuffer[e]=[];for(let r=0;r<n.mipmaps.length;r++)a.__webglFramebuffer[e][r]=t.createFramebuffer()}else a.__webglFramebuffer[e]=t.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){a.__webglFramebuffer=[];for(let e=0;e<n.mipmaps.length;e++)a.__webglFramebuffer[e]=t.createFramebuffer()}else a.__webglFramebuffer=t.createFramebuffer();if(d)for(let e=0,n=l.length;e<n;e++){let n=i.get(l[e]);n.__webglTexture===void 0&&(n.__webglTexture=t.createTexture(),s.memory.textures++)}if(e.samples>0&&ke(e)===!1){a.__webglMultisampledFramebuffer=t.createFramebuffer(),a.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=S(r.internalFormat,i,s,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),u=Oe(e);t.renderbufferStorageMultisample(t.RENDERBUFFER,u,c,e.width,e.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,t.RENDERBUFFER,a.__webglColorRenderbuffer[n])}t.bindRenderbuffer(t.RENDERBUFFER,null),e.depthBuffer&&(a.__webglDepthRenderbuffer=t.createRenderbuffer(),he(a.__webglDepthRenderbuffer,e,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(u){r.bindTexture(t.TEXTURE_CUBE_MAP,c.__webglTexture),ce(t.TEXTURE_CUBE_MAP,n);for(let r=0;r<6;r++)if(n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)me(a.__webglFramebuffer[r][i],e,n,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else me(a.__webglFramebuffer[r],e,n,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);y(n)&&b(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(d){for(let n=0,o=l.length;n<o;n++){let o=l[n],s=i.get(o),c=t.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(c=e.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(c,s.__webglTexture),ce(c,o),me(a.__webglFramebuffer,e,o,t.COLOR_ATTACHMENT0+n,c,0),y(o)&&b(c)}r.unbindTexture()}else{let i=t.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(i,c.__webglTexture),ce(i,n),n.mipmaps&&n.mipmaps.length>0)for(let r=0;r<n.mipmaps.length;r++)me(a.__webglFramebuffer[r],e,n,t.COLOR_ATTACHMENT0,i,r);else me(a.__webglFramebuffer,e,n,t.COLOR_ATTACHMENT0,i,0);y(n)&&b(i),r.unbindTexture()}e.depthBuffer&&_e(e)}function be(e){let t=e.textures;for(let n=0,a=t.length;n<a;n++){let a=t[n];if(y(a)){let t=x(e),n=i.get(a).__webglTexture;r.bindTexture(t,n),b(t),r.unbindTexture()}}}let xe=[],Ce=[];function we(e){if(e.samples>0){if(ke(e)===!1){let n=e.textures,a=e.width,o=e.height,s=t.COLOR_BUFFER_BIT,c=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,u=i.get(e),d=n.length>1;if(d)for(let e=0;e<n.length;e++)r.bindFramebuffer(t.FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,u.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=e.texture.mipmaps;f&&f.length>0?r.bindFramebuffer(t.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):r.bindFramebuffer(t.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let r=0;r<n.length;r++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(s|=t.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(s|=t.STENCIL_BUFFER_BIT)),d){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,u.__webglColorRenderbuffer[r]);let e=i.get(n[r]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}t.blitFramebuffer(0,0,a,o,0,0,a,o,s,t.NEAREST),l===!0&&(xe.length=0,Ce.length=0,xe.push(t.COLOR_ATTACHMENT0+r),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(xe.push(c),Ce.push(c),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ce)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xe))}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),d)for(let e=0;e<n.length;e++){r.bindFramebuffer(t.FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,u.__webglColorRenderbuffer[e]);let a=i.get(n[e]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,u.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,a,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&l){let n=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[n])}}}function Oe(e){return Math.min(a.maxSamples,e.samples)}function ke(e){let t=i.get(e);return e.samples>0&&n.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function I(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function L(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(vt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Ye(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Ee(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=M,this.resetTextureUnits=ee,this.getTextureUnits=j,this.setTextureUnits=te,this.setTexture2D=ne,this.setTexture2DArray=re,this.setTexture3D=P,this.setTextureCube=ae,this.rebindTextures=ve,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return r.buffers.depth.getReversed()}}function Ii(e,t){function n(n,r=``){let i,a=vt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Li=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ri=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ce(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new A({vertexShader:Li,fragmentShader:Ri,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new l(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bi=class extends r{constructor(t,n){super();let r=this,i=null,a=1,o=null,s=`local-floor`,c=1,l=null,u=null,d=null,f=null,m=null,g=null,v=typeof XRWebGLBinding<`u`,y=new zi,x={},S=n.getContextAttributes(),C=null,w=null,T=[],E=[],D=new e,O=null,k=null,A=new oe;A.viewport=new ut;let j=new oe;j.viewport=new ut;let te=[A,j],M=new Ge,N=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=T[e];return t===void 0&&(t=new Le,T[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=T[e];return t===void 0&&(t=new Le,T[e]=t),t.getGripSpace()},this.getHand=function(e){let t=T[e];return t===void 0&&(t=new Le,T[e]=t),t.getHandSpace()};function re(e){let t=E.indexOf(e.inputSource);if(t===-1)return;let n=T[t];n!==void 0&&(n.update(e.inputSource,e.frame,l||o),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){i.removeEventListener(`select`,re),i.removeEventListener(`selectstart`,re),i.removeEventListener(`selectend`,re),i.removeEventListener(`squeeze`,re),i.removeEventListener(`squeezestart`,re),i.removeEventListener(`squeezeend`,re),i.removeEventListener(`end`,ie),i.removeEventListener(`inputsourceschange`,P);for(let e=0;e<T.length;e++){let t=E[e];t!==null&&(E[e]=null,T[e].disconnect(t))}N=null,ne=null,y.reset();for(let e in x)delete x[e];if(t.setRenderTarget(C),m=null,f=null,d=null,i=null,w=null,pe.stop(),r.isPresenting=!1,t.setPixelRatio(O),t.setSize(D.width,D.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}r.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){a=e,r.isPresenting===!0&&Ye(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,r.isPresenting===!0&&Ye(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return f===null?m:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,n)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(e){if(i=e,i!==null){if(C=t.getRenderTarget(),i.addEventListener(`select`,re),i.addEventListener(`selectstart`,re),i.addEventListener(`selectend`,re),i.addEventListener(`squeeze`,re),i.addEventListener(`squeezestart`,re),i.addEventListener(`squeezeend`,re),i.addEventListener(`end`,ie),i.addEventListener(`inputsourceschange`,P),S.xrCompatible!==!0&&await n.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(D),v&&`createProjectionLayer`in XRWebGLBinding.prototype){let e=null,r=null,o=null;S.depth&&(o=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,e=S.stencil?p:ee,r=S.stencil?rt:he);let s={colorFormat:n.RGBA8,depthFormat:o,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(s),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new at(f.textureWidth,f.textureHeight,{format:h,type:_,depthTexture:new b(f.textureWidth,f.textureHeight,r,void 0,void 0,void 0,void 0,void 0,void 0,e),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,n,e),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new at(m.framebufferWidth,m.framebufferHeight,{format:h,type:_,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(s),pe.setContext(i),pe.start(),r.isPresenting=!0,r.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function P(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=E.indexOf(n);r>=0&&(E[r]=null,T[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=E.indexOf(n);if(r===-1){for(let e=0;e<T.length;e++)if(e>=E.length){E.push(n),r=e;break}else if(E[e]===null){E[e]=n,r=e;break}if(r===-1)break}let i=T[r];i&&i.connect(n)}}let ae=new L,F=new L;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(i===null)return;let t=e.near,n=e.far;y.texture!==null&&(y.depthNear>0&&(t=y.depthNear),y.depthFar>0&&(n=y.depthFar)),M.near=j.near=A.near=t,M.far=j.far=A.far=n,(N!==M.near||ne!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,ne=M.far),M.layers.mask=e.layers.mask|6,A.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let r=e.parent,a=M.cameras;le(M,r);for(let e=0;e<a.length;e++)le(a[e],r);a.length===2?se(M,A,j):M.projectionMatrix.copy(A.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),ue(e,M,r)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ve*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||m!==null)return c},this.setFoveation=function(e){c=e,f!==null&&(f.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)},this.getCameraTexture=function(e){return x[e]};let de=null;function fe(e,n){if(u=n.getViewerPose(l||o),g=n,u!==null){let e=u.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let n=!1;e.length!==M.cameras.length&&(M.cameras.length=0,n=!0);for(let r=0;r<e.length;r++){let i=e[r],a=null;if(m!==null)a=m.getViewport(i);else{let e=d.getViewSubImage(f,i);a=e.viewport,r===0&&(t.setRenderTargetTextures(w,e.colorTexture,e.depthStencilTexture),t.setRenderTarget(w))}let o=te[r];o===void 0&&(o=new oe,o.layers.enable(r),o.viewport=new ut,te[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),n===!0&&M.cameras.push(o)}let a=i.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&v){d=r.getBinding();let t=d.getDepthInformation(e[0]);t&&t.isValid&&t.texture&&y.init(t,i.renderState)}if(a&&a.includes(`camera-access`)&&v){t.state.unbindTexture(),d=r.getBinding();for(let t=0;t<e.length;t++){let n=e[t].camera;if(n){let e=x[n];e||(e=new ce,x[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<T.length;e++){let t=E[e],r=T[e];t!==null&&r!==void 0&&r.update(t,n,l||o)}de&&de(e,n),n.detectedPlanes&&r.dispatchEvent({type:`planesdetected`,data:n}),g=null}let pe=new jt;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},Vi=new nt,Hi=new R;Hi.set(-1,0,0,0,1,0,0,0,1);function Ui(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,pt(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Vi.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Hi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Wi(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Ee(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Ye(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Ye(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Gi=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function qi(){return Ki===null&&(Ki=new D(Gi,16,16,Me,C),Ki.name=`DFG_LUT`,Ki.minFilter=Re,Ki.magFilter=Re,Ki.wrapS=bt,Ki.wrapT=bt,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Ji=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=_}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=o;let h=p,v=new Set([S,et,gt]),y=new Set([_,he,M,rt,pe,_e]),b=new Uint32Array(4),x=new Int32Array(4),w=new L,T=null,E=null,D=[],O=[],k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,ee=!1,j=null,te=null,N=null,ne=null;this._outputColorSpace=ae;let re=0,ie=0,P=null,oe=-1,F=null,se=new ut,ce=new ut,le=null,ue=new a(0),de=0,fe=t.width,me=t.height,ge=1,ve=null,ye=null,be=new ut(0,0,fe,me),xe=new ut(0,0,fe,me),Ce=!1,we=new g,Te=!1,De=!1,Oe=new nt,I=new L,Ae=new ut,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ge:1}let R=n;function Pe(e,n){return t.getContext(e,n)}let Fe,z,B,Ie,V,H,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,U,Ze,$e,W,G;try{let e={alpha:!0,depth:r,stencil:i,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),R===null){let t=`webgl2`;if(R=Pe(t,e),R===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ee(`WebGLRenderer: `+e.message),e}function it(){Fe=new fn(R),Fe.init(),$e=new Ii(R,Fe),z=new Bt(R,Fe,e,$e),B=new Pi(R,Fe),z.reversedDepthBuffer&&f&&B.buffers.depth.setReversed(!0),te=R.createFramebuffer(),N=R.createFramebuffer(),ne=R.createFramebuffer(),Ie=new hn(R),V=new mi,H=new Fi(R,Fe,B,V,z,$e,Ie),Le=new dn(A),Re=new Mt(R),W=new Rt(R,Re),ze=new pn(R,Re,Ie,W),Be=new _n(R,ze,Re,W,Ie),Je=new gn(R,z,H),Ge=new Vt(V),Ve=new pi(A,Le,Fe,z,W,Ge),He=new Ui(A,V),Ue=new vi,We=new Ti(Fe),qe=new Lt(A,Le,B,Be,m,c),Ke=new Ni(A,Be,z),G=new Wi(R,Ie,z,B),U=new zt(R,Fe,Ie),Ze=new mn(R,Fe,Ie),Ie.programs=Ve.programs,A.capabilities=z,A.extensions=Fe,A.properties=V,A.renderLists=Ue,A.shadowMap=Ke,A.state=B,A.info=Ie}h!==1009&&(k=new yn(h,t.width,t.height,s,r,i));let ot=new Bi(A,R);this.xr=ot,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(fe,me,!1))},this.getSize=function(e){return e.set(fe,me)},this.setSize=function(e,n,r=!0){ot.isPresenting?Ye(`WebGLRenderer: Can't change size while VR device is presenting.`):(fe=e,me=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(fe*ge,me*ge).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,me=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(h===1009)Ee(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Ye(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}k.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),B.viewport(se.copy(be).multiplyScalar(ge).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),B.scissor(ce.copy(xe).multiplyScalar(ge).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){B.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=v.has(t)}if(e){let e=P.texture.type,t=y.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(b[0]=i,b[1]=a,b[2]=o,b[3]=r,R.clearBufferuiv(R.COLOR,0,b)):(x[0]=i,x[1]=a,x[2]=o,x[3]=r,R.clearBufferiv(R.COLOR,0,x))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),j=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),qe.dispose(),Ue.dispose(),We.dispose(),V.dispose(),Le.dispose(),Be.dispose(),W.dispose(),G.dispose(),Ve.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,yt),ot.removeEventListener(`sessionend`,bt),xt.stop()};function st(e){e.preventDefault(),ke(`WebGLRenderer: Context Lost.`),ee=!0}function ct(){ke(`WebGLRenderer: Context Restored.`),ee=!1;let e=Ie.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;it(),Ie.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function lt(e){Ee(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),V.remove(e)}function pt(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=K(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;W.setup(i,r,s,n,c);let h,g=U;if(c!==null&&(h=Re.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){j!==null&&e.isNodeMaterial&&j.setObject(r,e),Te===!0&&Ge.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),j!==null&&j.renderStart(e,t,n),E=We.get(n),E.init(t),O.push(E),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),E.setupLights(),j!==null&&j.updateLights(E.state.lightsArray),De=this.localClippingEnabled,Te=Ge.init(this.clippingPlanes,De),Te===!0&&Ge.setGlobalState(this.clippingPlanes,t),j!==null&&Ke.render(E.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),E=O.pop(),j!==null&&j.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function _t(e){ht&&ht(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new jt;xt.setAnimationLoop(_t),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){ht=e,ot.setAnimationLoop(e),e===null?xt.stop():xt.start()},ot.addEventListener(`sessionstart`,yt),ot.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Ee(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;j!==null&&j.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=k!==null&&(P===null||n)&&k.begin(A,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,P),E=We.get(e,O.length),E.init(t),E.state.textureUnits=H.getTextureUnits(),O.push(E),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(Oe,Xe,t.reversedDepth),De=this.localClippingEnabled,Te=Ge.init(this.clippingPlanes,De),T=Ue.get(e,D.length),T.init(),D.push(T),ot.enabled===!0&&ot.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,A.sortObjects)}St(e,t,0,A.sortObjects),T.finish(),j!==null&&j.updateLights(E.state.lightsArray),A.sortObjects===!0&&T.sort(ve,ye),Me=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Me&&qe.addToRenderList(T,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Ge.beginShadows();let i=E.state.shadowsArray;if(Ke.render(i,e,t),Te===!0&&Ge.endShadows(),(r&&k.hasRenderPass())===!1){let n=T.opaque,r=T.transmissive;if(E.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Me&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(T,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Me&&qe.render(e),Ct(T,e,t)}P!==null&&ie===0&&(H.updateMultisampleRenderTarget(P),H.updateRenderTargetMipmap(P)),r&&k.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),W.resetDefaultState(),oe=-1,F=null,O.pop(),O.length>0?(E=O[O.length-1],H.setTextureUnits(E.state.textureUnits),Te===!0&&Ge.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,D.pop(),T=D.length>0?D[D.length-1]:null,j!==null&&j.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)E.pushLightProbeGrid(e);else if(e.isLight)E.pushLight(e),e.castShadow&&E.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(we)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Be.update(e),a=e.material;a.visible&&T.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(we))){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&T.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&T.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;E.setupLightsView(n),Te===!0&&Ge.setGlobalState(A.clippingPlanes,n),r&&B.viewport(se.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);E.state.transmissionRenderTarget[r.id]=new at(1,1,{generateMipmaps:!0,type:e?C:_,minFilter:Se,samples:Math.max(4,z.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let a=E.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*A.transmissionResolutionScale,o.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),c=A.getActiveCubeFace(),l=A.getActiveMipmapLevel();A.setRenderTarget(a),A.getClearColor(ue),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),Me&&qe.render(n);let u=A.toneMapping;A.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),E.setupLightsView(r),Te===!0&&Ge.setGlobalState(A.clippingPlanes,r),Tt(e,n,r),H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a))}A.setRenderTarget(s,c,l),A.setClearColor(ue,de),d!==void 0&&(r.viewport=d),A.toneMapping=u}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){j!==null&&i.isNodeMaterial&&j.setObject(e,i),e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=je);let r=V.get(e),i=E.state.lights,a=E.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,E.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ve.getUniforms(e),j!==null&&e.isNodeMaterial&&j.build(e,n,s),e.onBeforeCompile(s,A),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),kt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=E.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Er.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];w.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(w))return n}return null}function K(e,t,n,r,i){t.isScene!==!0&&(t=je),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?A.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:vt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=E.state.lights;if(Te===!0&&(De===!0||e!==F)){let t=e===F&&r.id===oe;Ge.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=E.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),j&&r.isNodeMaterial&&j.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),D=v.uniforms;if(B.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==oe&&(oe=r.id,C=!0),v.needsLights){let e=At(E.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||F!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(R,`projectionMatrix`,e.projectionMatrix),T.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(R,I.setFromMatrixPosition(e.matrixWorld)),z.logarithmicDepthBuffer&&T.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(R,`sunShadowMap`,y.state.sunShadowMap,H),y.state.directionalShadowMap.length>0&&T.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,H),y.state.spotShadowMap.length>0&&T.setValue(R,`spotShadowMap`,y.state.spotShadowMap,H),y.state.pointShadowMap.length>0&&T.setValue(R,`pointShadowMap`,y.state.pointShadowMap,H)),i.isSkinnedMesh){T.setOptional(R,i,`bindMatrix`),T.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(R,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(T.setOptional(R,i,`batchingTexture`),T.setValue(R,`batchingTexture`,i._matricesTexture,H),T.setOptional(R,i,`batchingIdTexture`),T.setValue(R,`batchingIdTexture`,i._indirectTexture,H),T.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(R,`batchingColorTexture`,i._colorsTexture,H));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Je.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=qi()),C){if(T.setValue(R,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&q(D,w),a&&r.fog===!0&&He.refreshFogUniforms(D,a),He.refreshMaterialUniforms(D,r,ge,me,E.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Er.upload(R,Ot(v),D,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Er.upload(R,Ot(v),D,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(R,`center`,i.center),T.setValue(R,`modelViewMatrix`,i.modelViewMatrix),T.setValue(R,`normalMatrix`,i.normalMatrix),T.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];G.update(n,x),G.bind(n,x)}}return x}function q(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,re=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,B.viewport(se),B.scissor(ce),B.setScissorTest(le),oe=-1;return}if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(be).multiplyScalar(ge).floor(),ce.copy(xe).multiplyScalar(ge).floor(),le=Ce;if(n!==0&&(r=te),B.bindFramebuffer(R.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(se),B.scissor(ce),B.setScissorTest(le),i){let r=V.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}oe=-1};function Pt(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=z.textureFormatReadable(e.format),t.__typeReadable=z.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Ee(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){Ee(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Ee(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=P===null?null:V.get(P).__webglFramebuffer;B.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=P===null?null:V.get(P).__webglFramebuffer;B.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await tt(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(H.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),v=R.TEXTURE_2D),B.activeTexture(R.TEXTURE0),B.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(R.UNPACK_ROW_LENGTH),b=B.getParameter(R.UNPACK_IMAGE_HEIGHT),x=B.getParameter(R.UNPACK_SKIP_PIXELS),S=B.getParameter(R.UNPACK_SKIP_ROWS),C=B.getParameter(R.UNPACK_SKIP_IMAGES);B.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(R.UNPACK_SKIP_PIXELS,l),B.pixelStorei(R.UNPACK_SKIP_ROWS,u),B.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);B.bindFramebuffer(R.READ_FRAMEBUFFER,null),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(R.READ_FRAMEBUFFER,N),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);B.bindFramebuffer(R.READ_FRAMEBUFFER,null),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(R.UNPACK_ROW_LENGTH,y),B.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(R.UNPACK_SKIP_PIXELS,x),B.pixelStorei(R.UNPACK_SKIP_ROWS,S),B.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){re=0,ie=0,P=null,B.reset(),W.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Xe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}},Yi={type:`change`},Xi={type:`start`},Zi={type:`end`},Qi=new B,$i=new f,ea=Math.cos(70*I.DEG2RAD),ta=new L,na=2*Math.PI,ra={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ia=1e-6,aa=class extends u{constructor(t,n=null){super(t,n),this.state=ra.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:mt.ROTATE,MIDDLE:mt.DOLLY,RIGHT:mt.PAN},this.touches={ONE:ne.ROTATE,TWO:ne.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new We,this._lastTargetPosition=new L,this._quat=new We().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new m,this._sphericalDelta=new m,this._scale=1,this._panOffset=new L,this._rotateStart=new e,this._rotateEnd=new e,this._rotateDelta=new e,this._panStart=new e,this._panEnd=new e,this._panDelta=new e,this._dollyStart=new e,this._dollyEnd=new e,this._dollyDelta=new e,this._dollyDirection=new L,this._mouse=new e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sa.bind(this),this._onPointerDown=oa.bind(this),this._onPointerUp=ca.bind(this),this._onContextMenu=ha.bind(this),this._onMouseWheel=da.bind(this),this._onKeyDown=fa.bind(this),this._onTouchStart=pa.bind(this),this._onTouchMove=ma.bind(this),this._onMouseDown=la.bind(this),this._onMouseMove=ua.bind(this),this._interceptControlDown=ga.bind(this),this._interceptControlUp=_a.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=ra.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yi),this.update(),this.state=ra.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;ta.copy(t).sub(this.target),ta.applyQuaternion(this._quat),this._spherical.setFromVector3(ta),this.autoRotate&&this.state===ra.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=na:n>Math.PI&&(n-=na),r<-Math.PI?r+=na:r>Math.PI&&(r-=na),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(ta.setFromSpherical(this._spherical),ta.applyQuaternion(this._quatInverse),t.copy(this.target).add(ta),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=ta.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new L(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new L(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=ta.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Qi.origin.copy(this.object.position),Qi.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qi.direction))<ea?this.object.lookAt(this.target):($i.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qi.intersectPlane($i,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>ia||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ia||this._lastTargetPosition.distanceToSquared(this.target)>ia?(this.dispatchEvent(Yi),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?na/60/60*this.autoRotateSpeed:na/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ta.setFromMatrixColumn(t,0),ta.multiplyScalar(-e),this._panOffset.add(ta)}_panUp(e,t){this.screenSpacePanning===!0?ta.setFromMatrixColumn(t,1):(ta.setFromMatrixColumn(t,0),ta.crossVectors(this.object.up,ta)),ta.multiplyScalar(e),this._panOffset.add(ta)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;ta.copy(r).sub(this.target);let i=ta.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(na*this._rotateDelta.x/t.clientHeight),this._rotateUp(na*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(na*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-na*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(na*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-na*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(na*this._rotateDelta.x/t.clientHeight),this._rotateUp(na*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new e,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function oa(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function sa(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function ca(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Zi),this.state=ra.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function la(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ra.DOLLY;break;case mt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ra.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ra.ROTATE}break;case mt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ra.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ra.PAN}break;default:this.state=ra.NONE}this.state!==ra.NONE&&this.dispatchEvent(Xi)}function ua(e){switch(this.state){case ra.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ra.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ra.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function da(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===ra.NONE&&(e.preventDefault(),this.dispatchEvent(Xi),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Zi))}function fa(e){this.enabled!==!1&&this._handleKeyDown(e)}function pa(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ra.TOUCH_ROTATE;break;case ne.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ra.TOUCH_PAN;break;default:this.state=ra.NONE}break;case 2:switch(this.touches.TWO){case ne.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ra.TOUCH_DOLLY_PAN;break;case ne.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ra.TOUCH_DOLLY_ROTATE;break;default:this.state=ra.NONE}break;default:this.state=ra.NONE}this.state!==ra.NONE&&this.dispatchEvent(Xi)}function ma(e){switch(this._trackPointer(e),this.state){case ra.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ra.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ra.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ra.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ra.NONE}}function ha(e){this.enabled!==!1&&e.preventDefault()}function ga(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function _a(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function va(e,t=1){let n=e=>`${e[0]},${e[1]}`,r=new Map;for(let t of e)if(t.type!==`magic_carpet`)for(let e of[t.points[0],t.points[t.points.length-1]])r.set(n(e),(r.get(n(e))||0)+1);let i=(e,i)=>{if(r.get(n(e))<2)return e;let a=i[0]-e[0],o=i[1]-e[1],s=Math.hypot(a,o),c=20*t;return[e[0]+a/s*c,e[1]+o/s*c]};return e.map(e=>{if(e.type===`magic_carpet`)return null;let t=e.points,n=t.length-1;return[i(t[0],t[1]),i(t[n],t[n-1])]})}var ya={stations:[1127891899,1127891930],origin:[349.8,-403.45],objects:[{id:`summit:object-1`,label:`1`,kind:`yurt`,en:`Yurt`,zh:`传统蒙古包`,at:[24.4,-35],yaw:-.68,size:[3.3,3.3],round:!0,from:{A:[.3,.6038],B:[.8318,.6054],C:[.4385,.7265],D:[.602,.5234]},how:`A and D cast to 8 m of each other (D hits the roof, so lands north); the middle. Door turned to the plaza: a guess.`},{id:`summit:object-2`,label:`2`,kind:`signpost`,en:`Four-country signpost`,zh:`一眼望四国路牌`,at:[.5,-3.5],yaw:0,size:[2.6,2.6],round:!0,from:{A:[.4276,.5377],B:[.4029,.6311],C:[.3972,.4752],D:[.4742,.694]},how:`A, B and D cast within 4 m. Its arrows point the real ways: Russia north, Mongolia east, Kazakhstan west, China south.`},...[[-37.4,-5.2],[-43.6,-3.2],[-49.8,-1.2]].map((e,t)=>({id:`summit:object-3-set-${t+1}`,label:`3·${t+1}`,kind:`prayerWheels`,en:`Prayer wheels ${t+1} of 3`,zh:`转经轮 第${t+1}组`,at:e,yaw:.31,size:[2.7,.75],from:t?{}:{A:[.5645,.6639],B:[.16,.4847],C:[.5883,.4416],D:[.2853,.5441]},how:`The arrows mark the area only. Three sets in a row, 6.5 m apart, along the long roof seen in A and D (which cast to x -35 to -48), from G6 toward the ovoo; each set's own place and turn are estimates. Their fronts face the path out to the ovoo, so it passes them on your right.`})),{id:`summit:object-4`,label:`4`,kind:`ovoo`,en:`Ovoo and prayer flags`,zh:`敖包与经幡`,at:[-70,7],yaw:1.77,size:[3.4,3.4],round:!0,from:{A:[.6705,.7173],C:[.6184,.3498],D:[.1169,.5564]},how:`A's circle casts to (-76, 14), D's half in frame to (-68, 4); set between, 4 m off A and half out of D's frame as there. Steps face the path from G6.`},{id:`summit:object-5`,label:`5`,kind:`hut`,en:`Small wooden hut`,zh:`小木屋`,at:[-21.5,-19.5],yaw:.83,size:[1.8,1.5],from:{A:[.4617,.6968],B:[.366,.5081],C:[.6175,.5063],D:[.4003,.5114]},how:`A and D cast within 3 m, at the mast's foot. What it is for is not known.`},{id:`summit:object-6`,label:`6`,kind:`photoFrame`,en:`Giant photo frame`,zh:`巨型木相框`,at:[3.5,-24.5],yaw:-.06,size:[2.7,1],from:{A:[.3674,.5988],B:[.5783,.5925],C:[.4973,.5812],D:[.5128,.532]},how:`The user's later D arrow (on its top bar) cast to (3, -28), its base about 3 m nearer; B's face-on frame casts to (2, -21). Faces the plaza, its plane east–west as D and B see it.`},{id:`summit:object-7`,label:`7`,kind:`cabin`,en:`Coffee cabin`,zh:`咖啡小屋`,at:[-20,-57],yaw:.34,size:[5,4.75],from:{A:[.3813,.868],B:[.6073,.5595],C:[.9128,.763],D:[.4492,.3552]},how:`A and D cast within 2 m, out on the shoulder past the mast. Door to the way up from the plaza: a guess.`},{id:`summit:object-8`,label:`8`,kind:`swing`,en:`Two-seat swing`,zh:`双座秋千`,at:[7.5,-5],yaw:-.2,size:[2.9,.5],from:{A:[.3961,.4889],B:[.4877,.6696],C:[.3207,.5089],D:[.5301,.7116]},how:`A, B and D cast to x 5–12, z -6 to 2; drawn 3 m west of that so it clears the game's wider G7 station. Beam east–west as in A and D.`},...[[-4.3,-96,.05,[.5229,.2482]],[2.5,-105.5,-.02,[.5449,.2312]],[37,-109,-.33,[.6421,.2692]]].map(([e,t,n,r],i)=>({id:`summit:object-9-pod-${i+1}`,label:`9${`abc`[i]}`,kind:`pod`,en:`Dome pod ${`abc`[i]}`,zh:`穹顶帐篷 ${`abc`[i]}`,at:[e,t],yaw:n,size:[2.3,2.3],round:!0,from:{D:r},how:`D only, from a pick of each pod (the arrow marks the three together), cast onto the shoulder raised for them; a, b, c left to right in D.`})),{id:`summit:helper-mast`,label:`M`,kind:`mast`,en:`Telecoms mast`,zh:`通信杆`,at:[-28,-25.3],yaw:0,size:[.7,.7],from:{},how:`Not one of the nine: fitted as a free point with camera D (base and top), and A agrees within 2 m. A landmark for checking the views.`}],terrain:{terrace:{lines:[[[-22,5,0],[0,-4,0],[21,-6,0]],[[-26,-24,0],[-6,-10,0]]],r0:14,r1:30},ridge:{line:[[-28,-3,.3],[-53,-.5,.4],[-62,5,2],[-70,7,3]],r0:3,r1:12},shoulder:{line:[[-24,-24,0],[-13,-42,-3],[-16,-58,-5],[-8,-80,-6.5],[-2,-98,-7.5],[14,-106,-7.5],[37,-109,-8]],r0:5,r1:16},knoll:{at:[28,-52],axis:[.6,-.8],half:30,nw:11,se:22,height:4}}},ba=ya.objects.map(e=>e.id),xa=e=>ya.objects.find(t=>t.id===e),Sa=`./data/`;function Ca(e,{min:t,max:n}){let r=new Uint16Array(e),i=new Float32Array(r.length),a=(n-t)/65535;for(let e=0;e<r.length;e++)i[e]=t+r[e]*a;return i}var wa=`edits/`;async function Ta(e){try{let t=await fetch(e+`edits/edits.json`,{cache:`no-store`});return!t.ok||!t.headers.get(`content-type`)?.includes(`json`)?null:await t.json()}catch{return null}}async function Ea({edits:e=!1}={}){let t=await(await fetch(Sa+`world.json`)).json(),n=e?await Ta(Sa):null,r=n?{...t.detail,...n.detail,file:wa+n.detail.file}:t.detail,[i,a]=await Promise.all([r,t.backdrop].map(e=>e&&fetch(Sa+e.file,{cache:n?`no-store`:`default`}).then(e=>e.arrayBuffer()))),o=new Da(r.size,r.cells,Ca(i,r),r.center),s={runs:t.runs,lifts:t.lifts};return n&&(t.runs=n.runs,n.lifts&&(t.lifts=n.lifts),o.setHoles(n.tileCells,n.holes),Ba(n.places)),Pa(t.lifts),{meta:t,edits:n,baked:s,detail:o,backdrop:a&&new Da(t.backdrop.size,t.backdrop.cells,Ca(a,t.backdrop))}}var Da=class{constructor(e,t,n,r=[0,0]){this.size=e,this.cells=t,this.verts=t+1,this.step=e/t,this.half=e/2,this.center=r,this.x0=r[0]-this.half,this.z0=r[1]-this.half,this.h=n,this.setHoles(10,[])}setHoles(e,t){this.tileCells=e,this.tiles=Math.ceil(this.cells/e),this.tileSize=e*this.step,this.holes=new Uint8Array(this.tiles*this.tiles);for(let e of t)this.holes[e]=1;this.hasHoles=t.length>0}tileAt(e,t){let n=Math.floor((e-this.x0)/this.tileSize),r=Math.floor((t-this.z0)/this.tileSize);return n<0||r<0||n>=this.tiles||r>=this.tiles?-1:r*this.tiles+n}holeAt(e,t){if(!this.hasHoles)return!1;let n=this.tileAt(e,t);return n>=0&&this.holes[n]===1}cellIsHole(e,t){return this.hasHoles&&this.holes[Math.floor(t/this.tileCells)*this.tiles+Math.floor(e/this.tileCells)]===1}inside(e,t,n=0){return Math.abs(e-this.center[0])<this.half-n&&Math.abs(t-this.center[1])<this.half-n}heightAt(e,t){let n=this.verts,r=(e-this.x0)/this.step,i=(t-this.z0)/this.step;r=Math.min(Math.max(r,0),this.cells-1e-6),i=Math.min(Math.max(i,0),this.cells-1e-6);let a=Math.floor(r),o=Math.floor(i),s=r-a,c=i-o,l=o*n+a,u=this.h;return(u[l]*(1-s)+u[l+1]*s)*(1-c)+(u[l+n]*(1-s)+u[l+n+1]*s)*c}normalAt(e,t,n=new L){let r=this.heightAt(e-2,t),i=this.heightAt(e+2,t),a=this.heightAt(e,t-2),o=this.heightAt(e,t+2);return n.set(r-i,4,a-o).normalize()}},Oa=class{constructor(e,t,n=4,r=60,i=[0,0]){this.size=t,this.cell=n,this.half=t/2,this.x0=i[0]-this.half,this.z0=i[1]-this.half,this.n=Math.round(t/n)+1,this.maxDist=r,this.dist=new Float32Array(this.n*this.n).fill(r),this.run=new Int16Array(this.n*this.n).fill(-1),this.seg=new Uint16Array(this.n*this.n),this.lines=e.map(({points:e})=>{let t=new Float32Array(e.length);for(let n=1;n<e.length;n++)t[n]=t[n-1]+Math.hypot(e[n][0]-e[n-1][0],e[n][1]-e[n-1][1]);return{p:e,cum:t}}),e.forEach((e,t)=>{let n=e.points;for(let e=0;e<n.length-1;e++)this.#e(n[e],n[e+1],t,e)})}#e(e,t,n,r){let{cell:i,n:a,maxDist:o}=this,s=Math.min(e[0],t[0])-o-this.x0,c=Math.max(e[0],t[0])+o-this.x0,l=Math.min(e[1],t[1])-o-this.z0,u=Math.max(e[1],t[1])+o-this.z0,d=Math.max(0,Math.floor(s/i)),f=Math.min(a-1,Math.ceil(c/i)),p=Math.max(0,Math.floor(l/i)),m=Math.min(a-1,Math.ceil(u/i)),h=t[0]-e[0],g=t[1]-e[1],_=h*h+g*g||1;for(let t=p;t<=m;t++){let o=t*i+this.z0;for(let s=d;s<=f;s++){let c=s*i+this.x0,l=((c-e[0])*h+(o-e[1])*g)/_;l=Math.max(0,Math.min(1,l));let u=e[0]+h*l-c,d=e[1]+g*l-o,f=Math.sqrt(u*u+d*d),p=t*a+s;f<this.dist[p]&&(this.dist[p]=f,this.run[p]=n,this.seg[p]=r)}}}distAt(e,t){let{cell:n,n:r}=this,i=(e-this.x0)/n,a=(t-this.z0)/n;i=Math.min(Math.max(i,0),r-1.0001),a=Math.min(Math.max(a,0),r-1.0001);let o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s,u=s*r+o,d=this.dist;return(d[u]*(1-c)+d[u+1]*c)*(1-l)+(d[u+r]*(1-c)+d[u+r+1]*c)*l}runAt(e,t){let{cell:n,n:r}=this,i=Math.round((e-this.x0)/n),a=Math.round((t-this.z0)/n);return i<0||a<0||i>=r||a>=r?-1:this.run[a*r+i]}coordsAt(e,t,n={}){let{cell:r,n:i}=this,a=Math.round((e-this.x0)/r),o=Math.round((t-this.z0)/r),s=o*i+a;if(n.run=a<0||o<0||a>=i||o>=i?-1:this.run[s],n.run<0)return n;let{p:c,cum:l}=this.lines[n.run],u=1/0;for(let r=Math.max(0,this.seg[s]-1);r<=Math.min(c.length-2,this.seg[s]+1);r++){let i=c[r],a=c[r+1],o=a[0]-i[0],s=a[1]-i[1],d=o*o+s*s||1,f=Math.max(0,Math.min(1,((e-i[0])*o+(t-i[1])*s)/d)),p=e-i[0]-o*f,m=t-i[1]-s*f,h=Math.hypot(p,m);h<u&&(u=h,n.along=l[r]+f*Math.sqrt(d),n.off=o*m-s*p<0?-h:h)}return n}},ka=[{id:`east`,zh:`东区服务大厅`,en:`East Service Centre`,ele:1439,x:710,z:4410,faceTo:[610,4280],roof:`#5f8064`,lift:`1号索道`},{id:`west`,zh:`西区服务大厅`,en:`West Service Centre`,ele:1383,x:-1240,z:4640,faceTo:[-1183,4512],roof:`#4a5661`,lift:`3号索道`}],Aa={zh:`温泉`,en:`Hot spring`,x:638,z:4536,faceTo:[710,4410],clearing:10},ja={pickup:[-16,33],snowmobile:[28,31],jetson:[4,52]};function Ma(e){let t=va(e),n=ya.stations.map(n=>{let r=e.findIndex(e=>String(e.id)===String(n));return r>=0&&t[r]});if(!n[0]||!n[1])return null;let r=null;for(let e of n[0])for(let t of n[1]){let n=Math.hypot(e[0]-t[0],e[1]-t[1]);(!r||n<r.d)&&(r={d:n,a:e,b:t})}let{a:i,b:a}=r;return{origin:[(i[0]+a[0])/2,(i[1]+a[1])/2],stations:[i,a]}}var Na=ya.origin;function Pa(e){Na=Ma(e)?.origin??ya.origin}var Fa=[...ka.map(e=>[`lodge:${e.id}`,e]),[`onsen`,Aa]],Ia=new Map(Fa.map(([e,t])=>[e,{x:t.x,z:t.z,faceTo:[...t.faceTo]}])),La=[...Fa.map(([e])=>e),...Object.keys(ja).map(e=>`vehicle:${e}`),...ba],Ra={};function za(e){if(Ra[e])return{...Ra[e]};let[t,n]=e.split(`:`);if(t===`summit`){let{at:t,yaw:n}=xa(e);return{x:Na[0]+t[0],z:Na[1]+t[1],yaw:n}}if(t===`vehicle`){let{x:e,z:t,yaw:r}=za(`lodge:east`),[i,a]=ja[n],o=Math.cos(r),s=Math.sin(r);return{x:e+i*o+a*s,z:t-i*s+a*o,yaw:r}}let{x:r,z:i,faceTo:a}=Ia.get(e);return{x:r,z:i,yaw:Math.atan2(a[0]-r,a[1]-i)}}function Ba(e={}){Ra=Object.fromEntries(Object.entries(e).filter(([e])=>La.includes(e)));for(let[e,t]of Fa){let n=Ia.get(e);if(!Ra[e]){Object.assign(t,{x:n.x,z:n.z,faceTo:[...n.faceTo]});continue}let{x:r,z:i,yaw:a}=Ra[e],o=Math.hypot(n.faceTo[0]-n.x,n.faceTo[1]-n.z);Object.assign(t,{x:r,z:i,faceTo:[r+Math.sin(a)*o,i+Math.cos(a)*o]})}}var Va={snow:new a(`#fbfaf4`),snowShade:new a(`#eef1ec`),groomed:new a(`#e6eef0`),hollow:new a(`#cbdce2`),crest:new a(`#ffffff`),rock:new a(`#5f6265`),rockDark:new a(`#4f5357`),forest:new a(`#4f6f5e`),forestDark:new a(`#3e5a4f`)};function Ha(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Ua(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Ha(n,r),l=Ha(n+1,r),u=Ha(n,r+1),d=Ha(n+1,r+1);return(c*(1-o)+l*o)*(1-s)+(u*(1-o)+d*o)*s}function Wa(e,t,n,{skirt:r=!0,tiles:i=1,lodDistance:a=0,nearDistance:o=0,corduroy:s=!1,castShadow:c=!1}={}){let l=o?[1,2,4]:a?[1,2]:[1],u=Ga(e,t,n,s),d=H({vertexColors:!0},{hatch:1,snow:1,piste:+!!s}),f=new G,p=e=>{let t=new U(e,d);return t.receiveShadow=!0,t.castShadow=c,f.add(t),t},m=(t,n)=>p(Ja(e,u,t.range,l[n],n>0)),h=Math.ceil(e.cells/i),g=[];for(let t=0;t<i;t++)for(let n=0;n<i;n++){let r=n*h,i=Math.min(e.cells,r+h),a=t*h,s=Math.min(e.cells,a+h);if(r>=i||a>=s)continue;let c={range:[r,a,i,s],meshes:[]};l.forEach((e,t)=>{t===0&&o||(c.meshes[t]=m(c,t))});let u=c.meshes.find(Boolean).geometry;u.computeBoundingBox(),c.box=u.boundingBox,g.push(c)}r&&f.add(new U(Ya(e,u),d));let _=e=>l.length===1?0:e>a?l.length-1:o&&e>o?1:0;return f.update=e=>{let t=null,n=1/0;for(let r of g){let i=r.box.distanceToPoint(e),a=_(i);r.meshes[a]||(i<n&&(t=r,n=i),a=1),r.meshes.forEach((e,t)=>e&&(e.visible=t===a)),o&&r.meshes[0]&&i>o*1.5&&(f.remove(r.meshes[0]),r.meshes[0].geometry.dispose(),r.meshes[0]=void 0)}t&&(t.meshes[0]=m(t,0),t.meshes[1].visible=!1)},a&&f.update(new L(1/0,0,0)),f}function Ga(e,t,n,r){let{h:i,verts:o,cells:s,step:c}=e,l=new a,u={},d=(r,a,d,f,p,m,h,g)=>{let _=e.x0+r*c,v=i[a*o+r],y=e.z0+a*c;p[f*3]=_,p[f*3+1]=v,p[f*3+2]=y;let b=Math.max(0,r-d),x=Math.min(s,r+d),S=Math.max(0,a-d),C=Math.min(s,a+d),w=(i[a*o+b]-i[a*o+x])/((x-b)*c),T=(i[S*o+r]-i[C*o+r])/((C-S)*c),E=1/Math.hypot(w,1,T);m[f*3]=w*E,m[f*3+1]=E,m[f*3+2]=T*E;let D=Ka(_,v,y,E,t.distAt(_,y),n,l),O=Math.max(1,Math.round(8/c)),k=(i[a*o+Math.max(0,r-O)]+i[a*o+Math.min(s,r+O)]+i[Math.max(0,a-O)*o+r]+i[Math.min(s,a+O)*o+r]-4*v)/(O*c)**2;if(k>0?l.lerp(Va.hollow,I.smoothstep(k,.005,.03)*.8):l.lerp(Va.crest,I.smoothstep(-k,.005,.03)*.9),h[f*3]=l.r,h[f*3+1]=l.g,h[f*3+2]=l.b,g){t.coordsAt(_,y,u);let e=d*c,n=u.run,r=n>=0&&t.runAt(_-e,y)===n&&t.runAt(_+e,y)===n&&t.runAt(_,y-e)===n&&t.runAt(_,y+e)===n;g[f*3]=r?u.off:0,g[f*3+1]=r?u.along:0,g[f*3+2]=r?D:0}};return d.corduroy=r,d}function Ka(e,t,n,r,i,a,o){let s=Math.acos(Math.min(1,r))*180/Math.PI,c=Ua(e*.02,n*.02);o.copy(Va.snow).lerp(Va.snowShade,c*.6);let l=1-I.smoothstep(i,14,18);o.lerp(Va.groomed,l*.9);let u=I.smoothstep(s+(c-.5)*22,44,62)*(1-l);return u>0&&o.lerp(Ua(e*.08,n*.08)>.5?Va.rock:Va.rockDark,u),t<a&&i>21&&o.lerp(Va.snowShade,.5),l}function qa(e,t,n){let r=[];for(let i=e;i<t;i+=n)r.push(i);return r.push(t),r}function Ja(e,t,[n,r,i,a],o,s){let c=qa(n,i,o),l=qa(r,a,o),u=c.length,d=l.length,f=[];if(s){for(let e=0;e<u-1;e++)f.push(e);for(let e=0;e<d-1;e++)f.push(e*u+u-1);for(let e=u-1;e>0;e--)f.push((d-1)*u+e);for(let e=d-1;e>0;e--)f.push(e*u)}let p=u*d+f.length,m={position:new Float32Array(p*3),normal:new Float32Array(p*3),color:new Float32Array(p*3)};t.corduroy&&(m.aPiste=new Float32Array(p*3));let{position:h,normal:g,color:_,aPiste:v}=m;for(let e=0;e<d;e++)for(let n=0;n<u;n++)t(c[n],l[e],o,e*u+n,h,g,_,v);for(let e of Object.values(m))f.forEach((t,n)=>e.set(e.subarray(t*3,t*3+3),(u*d+n)*3));f.forEach((e,t)=>h[(u*d+t)*3+1]-=6);let b=new z;for(let[e,t]of Object.entries(m))b.setAttribute(e,new qe(t,3));let x=[];for(let t=0;t<d-1;t++)for(let n=0;n<u-1;n++){if(e.cellIsHole(c[n],l[t]))continue;let r=t*u+n,i=r+1,a=r+u,o=a+1;x.push(r,a,i,i,a,o)}return f.forEach((e,t)=>{let n=(t+1)%f.length;x.push(e,f[n],u*d+t,f[n],u*d+n,u*d+t)}),b.setIndex(p>65535?new se(x,1):new y(x,1)),b}function Ya(e,t){let n=e.cells,r=[];for(let e=0;e<=n;e++)r.push([e,0]);for(let e=1;e<=n;e++)r.push([n,e]);for(let e=n-1;e>=0;e--)r.push([e,n]);for(let e=n-1;e>=0;e--)r.push([0,e]);let i=r.length*2,a=new Float32Array(i*3),o=new Float32Array(i*3),s=new Float32Array(i*3),c=[];r.forEach(([e,n],r)=>{t(e,n,1,2*r,a,o,s,null);for(let e=0;e<3;e++)a[(2*r+1)*3+e]=a[2*r*3+e]-(e===1?120:0),o[(2*r+1)*3+e]=o[2*r*3+e],s[(2*r+1)*3+e]=s[2*r*3+e]*.9;r&&c.push(2*r-2,2*r,2*r-1,2*r,2*r+1,2*r-1)});let l=new z;return l.setAttribute(`position`,new qe(a,3)),l.setAttribute(`color`,new qe(s,3)),l.setAttribute(`normal`,new qe(o,3)),l.setIndex(c),l}var Xa={height:[1.4,2.5],width:[6,10],fade:[12,45],ends:40},Za=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Qa(e,t,n,r=[]){let i=e.cells*2,a=i+1,o=e.step/2;if(n.cell!==o||n.n!==a||n.x0!==e.x0||n.z0!==e.z0)throw Error(`raiseBanks: the piste field must be on the 4 m grid`);let s=new Float32Array(a*a);for(let t=0;t<a;t++)for(let n=0;n<a;n++)s[t*a+n]=e.heightAt(e.x0+n*o,e.z0+t*o);let c=17+Xa.width[1],[l,u]=[c+Xa.fade[0],c+Xa.fade[1]],d=new Float32Array(a*a);t.forEach((r,s)=>{let{p:c,cum:f}=n.lines[s],p=f[f.length-1],[m,h]=[c[0],c[c.length-1]].map(e=>eo(e,t,s));for(let t=0;t<c.length-1;t++){let n=c[t],r=c[t+1],s=r[0]-n[0],g=r[1]-n[1],_=Math.hypot(s,g)||1,v=Math.max(0,Math.floor((Math.min(n[0],r[0])-u-e.x0)/o)),y=Math.min(i,Math.ceil((Math.max(n[0],r[0])+u-e.x0)/o)),b=Math.max(0,Math.floor((Math.min(n[1],r[1])-u-e.z0)/o)),x=Math.min(i,Math.ceil((Math.max(n[1],r[1])+u-e.z0)/o));for(let r=b;r<=x;r++){let i=e.z0+r*o;for(let c=v;c<=y;c++){let v=e.x0+c*o,y=Math.max(0,Math.min(1,((v-n[0])*s+(i-n[1])*g)/(_*_))),b=Math.hypot(n[0]+s*y-v,n[1]+g*y-i);if(b>=u)continue;let x=f[t]+y*_,S=1-Za(l,u,b);m&&(S*=Za(0,Xa.ends,x)),h&&(S*=Za(0,Xa.ends,p-x));let C=r*a+c;S>d[C]&&(d[C]=S)}}}});for(let t of r){let n=Math.max(0,Math.floor((t.x-t.r1-e.x0)/o)),r=Math.min(i,Math.ceil((t.x+t.r1-e.x0)/o)),s=Math.max(0,Math.floor((t.z-t.r1-e.z0)/o)),c=Math.min(i,Math.ceil((t.z+t.r1-e.z0)/o));for(let i=s;i<=c;i++)for(let s=n;s<=r;s++)d[i*a+s]*=Za(t.r0,t.r1,Math.hypot(e.x0+s*o-t.x,e.z0+i*o-t.z))}let[f,p]=Xa.height,[m,h]=Xa.width;for(let t=0;t<a;t++)for(let r=0;r<a;r++){let i=t*a+r;if(!d[i])continue;let c=e.x0+r*o,l=e.z0+t*o,u=f+(p-f)*Ua(c*.011+3.7,l*.011),g=m+(h-m)*Ua(c*.013,l*.013+9.1);s[i]+=u*d[i]*Za(17,17+g,n.dist[i])}let g=new Da(e.size,i,s,e.center),_=[];return e.holes.forEach((e,t)=>e&&_.push(t)),g.setHoles(e.tileCells*2,_),g}var $a=e=>[...e.flatMap(e=>[e.points[0],e.points[e.points.length-1]].map(([e,t])=>({x:e,z:t,r0:20,r1:50}))),...ka.map(({x:e,z:t})=>({x:e,z:t,r0:70,r1:120})),{x:Aa.x,z:Aa.z,r0:15,r1:35}];function eo([e,t],n,r){return!n.some((n,i)=>i!==r&&n.points.some((n,r,i)=>{let a=i[r+1];if(!a)return Math.hypot(n[0]-e,n[1]-t)<22;let o=a[0]-n[0],s=a[1]-n[1],c=Math.max(0,Math.min(1,((e-n[0])*o+(t-n[1])*s)/(o*o+s*s||1)));return Math.hypot(n[0]+o*c-e,n[1]+s*c-t)<22}))}var to=e=>Math.min(1,Math.max(0,e)),no=(e,t,n)=>{let r=to((n-e)/(t-e));return r*r*(3-2*r)};function ro(e,t,n){let r=1/0,i=0;for(let a=0;a<e.length-1;a++){let o=e[a],s=e[a+1],c=s[0]-o[0],l=s[1]-o[1],u=to(((t-o[0])*c+(n-o[1])*l)/(c*c+l*l||1)),d=Math.hypot(o[0]+c*u-t,o[1]+l*u-n);d<r&&(r=d,i=o[2]+(s[2]-o[2])*u)}return{d:r,dy:i}}function io({at:e,axis:t,half:n,nw:r,se:i,height:a},o,s){let c=o-e[0],l=s-e[1],u=c*t[0]+l*t[1],d=c*t[1]-l*t[0],f=(u/n)**2+(d/(d>0?r:i))**2;return f<1?a*(1-f)**2:0}function ao(e,t){let n=Ma(t);if(!n)return null;let[r,i]=n.origin,a=(e.heightAt(...n.stations[0])+e.heightAt(...n.stations[1]))/2,o=ya.terrain,s=[...o.terrace.lines.map(e=>[e,o.terrace]),[o.ridge.line,o.ridge],[o.shoulder.line,o.shoulder]],c=e.verts,l=e.step,u=(t,n)=>[Math.max(0,Math.floor((t-170-n)/l)),Math.min(e.cells,Math.ceil((t+170-n)/l))],[d,f]=u(r,e.x0),[p,m]=u(i,e.z0);for(let t=p;t<=m;t++)for(let n=d;n<=f;n++){let u=e.x0+n*l-r,d=e.z0+t*l-i,f=t*c+n,p=e.h[f];for(let[e,t]of s){let{d:n,dy:r}=ro(e,u,d);n<t.r1&&(p+=(a+r-p)*(1-no(t.r0,t.r1,n)))}e.h[f]=p+io(o.knoll,u,d)}for(let t of ya.objects){let{x:n,z:r}=za(t.id),i=(t.round?t.size[0]:Math.hypot(...t.size))+.6*l,a=i+l,o=e.heightAt(n,r),s=1;for(let t=0;t<8;t++)for(let a of[i*.5,i])o+=e.heightAt(n+Math.cos(t*Math.PI/4)*a,r+Math.sin(t*Math.PI/4)*a),s++;let u=o/s,[d,f]=[Math.max(0,Math.floor((n-a-e.x0)/l)),Math.min(e.cells,Math.ceil((n+a-e.x0)/l))],[p,m]=[Math.max(0,Math.floor((r-a-e.z0)/l)),Math.min(e.cells,Math.ceil((r+a-e.z0)/l))];for(let t=p;t<=m;t++)for(let o=d;o<=f;o++){let s=Math.hypot(e.x0+o*l-n,e.z0+t*l-r),d=t*c+o;s<a&&(e.h[d]+=(u-e.h[d])*(1-no(i,a,s)))}}return{...n,plaza:a}}var oo=(e,t=0)=>H({color:e},{rim:t}),J={felt:oo(`#f2eee4`),feltRoof:oo(`#e6dfd0`),band:oo(`#a8432f`),door:oo(`#c4572f`),crown:oo(`#7d5a3c`),timber:oo(`#c98a3e`),board:oo(`#efe3c8`),gold:oo(`#d8a73e`,1),stone:oo(`#9d978c`),stoneDark:oo(`#7d786f`),pole:oo(`#6b5136`),logs:oo(`#b98b5d`),hutRoof:oo(`#6c5a48`),frame:oo(`#7b5230`),pale:oo(`#e6dac5`),shingle:oo(`#a09583`),dark:oo(`#34302d`),post:oo(`#987a5c`),seat:oo(`#c4463a`),rope:oo(`#3d3a36`),orange:oo(`#e2742c`,1),steel:oo(`#4b5157`),mast:oo(`#e3e6e8`),panel:oo(`#c9cfd3`)},so=H({vertexColors:!0,side:2},{hatch:0}),co=H({vertexColors:!0,flatShading:!0},{rim:1}),lo=(e,t,n)=>new W(e,t,n);function Y(e,t,n,r=0,i=0,a=0){let o=new U(t,n);return o.position.set(r,i,a),o.castShadow=o.receiveShadow=!0,e.add(o),o}function uo(e,t,n){return e.userData.solids=t,e.userData.height=n,e}var fo=(e,t)=>[0,Math.PI/4].map(n=>({x:0,z:0,yaw:n,hw:e,hd:e,top:t}));function po(t,n,r,i,a,o,s,c){let l=r/2+o,u=Math.atan2(a,r/2);for(let e of[-1,1]){let r=Y(t,lo(n+2*o,.12,l/Math.cos(u)),s,0,i+a-l/2*Math.tan(u)+.06,e*l/2);r.rotation.x=e*u}let d=new Ue([new e(-r/2,0),new e(r/2,0),new e(0,a)]);Y(t,new v(d,{depth:n,bevelEnabled:!1}).rotateY(Math.PI/2).translate(-n/2,i,0),c)}var mo={R:3.2,wall:2.1,door:[.62,1.95],gap:.85,seat:[0,-1.75]},ho=H({color:`#f2eee4`,side:2},{rim:0}),go=H({color:`#e6dfd0`,side:2},{rim:0});function _o(){let e=new G,{R:n,wall:r,door:[i,a],gap:o}=mo,s=Math.asin(i/n),c=Math.PI*2-2*s;Y(e,new t(n,n,r,32,1,!0,s,c),ho,0,r/2,0),Y(e,new t(n+.03,n+.03,.28,32,1,!0,s,c),J.band,0,r-.3,0),Y(e,new P(n+.2,1.5,32,1,!0),go,0,r+.75,0),Y(e,new t(.5,.55,.3,12),J.crown,0,r+1.45,0);let l=Math.sqrt(n*n-i*i);for(let t of[-1,1])Y(e,lo(.12,a,.16),J.door,t*i,a/2,l);Y(e,lo(2*i+.12,.12,.16),J.door,0,a+.06,l),Y(e,lo(2*i,r-a-.12,.06),J.felt,0,(r+a+.12)/2,l);let u=new G;u.position.set(-i,0,l+.05),u.rotation.y=-2.3,Y(u,lo(2*i-.08,a-.06,.06),J.door,i-.04,(a-.06)/2,0),e.add(u);let d=Math.cos(u.rotation.y),f=Math.sin(u.rotation.y);Y(e,new t(n-.3,n-.3,.025,32),J.band,0,.0125,0),Y(e,new t(n-.75,n-.75,.03,32),vo,0,.015,0);let[p,m]=mo.seat;Y(e,new t(.55,.56,.04,20),yo,p,.05,m+.08),Y(e,lo(.5,.3,.4),J.crown,p-.85,.15,m+.15),Y(e,new t(.06,.08,.13,10),J.gold,p-.85,.365,m+.15);let h=Math.asin(o/n),g=(Math.PI*2-2*h)/14,_=[];for(let e=0;e<14;e++){let t=h+(e+.5)*g;_.push({x:Math.sin(t)*(n-.05),z:Math.cos(t)*(n-.05),yaw:t,hw:n*Math.tan(g/2)+.05,hd:.15,top:r+1.6})}return _.push({x:-i+i*d,z:l+.05-i*f,yaw:u.rotation.y,hw:i,hd:.05,top:a}),_.push({x:p-.85,z:m+.15,hw:.25,hd:.2,top:.3},{x:p,z:m+.1,hw:.5,hd:.45,top:1.1}),uo(e,_,r+1.6)}var vo=oo(`#d8a73e`),yo=oo(`#2f5a8a`),bo=[{dir:[0,-1],y:4.6,colors:[`#2e5fb0`,`#d8352a`]},{dir:[1,0],y:4.15,colors:[`#c8342c`,`#2550a0`]},{dir:[-1,0],y:4.15,colors:[`#33a9dc`,`#f2c230`]},{dir:[0,1],y:4.6,colors:[`#d8352a`,`#f2c230`]}];function xo(){let e=new G,n=6.2,r=3.2,i=2.4;Y(e,lo(.38,n,.38),J.timber,0,n/2,0);for(let t of[-1,1])Y(e,lo(.3,1.3,.3),J.timber,t*.42,6.55,0).rotation.z=-t*.7;let a=[];for(let t=0;t<4;t++){let n=Math.PI/4+t*Math.PI/2,o=Math.sin(n),s=Math.cos(n),c=Y(e,lo(.26,Math.hypot(i,r),.26),J.timber,o*i/2,r/2,s*i/2);c.rotation.order=`YXZ`,c.rotation.set(-Math.atan2(i,r),n,0),a.push({x:o*2.6999999999999997/2,z:s*2.6999999999999997/2,yaw:n,hw:.17,hd:i/2,top:r})}for(let{dir:n,y:r,colors:i}of bo){let a=new G;a.position.y=r,a.rotation.y=Math.atan2(n[0],n[1]),Y(a,lo(.1,.34,1.25),J.board,0,0,.82),Y(a,lo(.11,.34,.32),oo(i[0]),0,0,1.6),Y(a,new t(0,.2,.34,3).rotateX(Math.PI/2).rotateZ(Math.PI/2),oo(i[1]),0,0,1.86),e.add(a)}return uo(e,[{x:0,z:0,hw:.25,hd:.25,top:7.2},...a],7.2)}var So={scale:5.5,posts:.448,depth:.027,top:.526},Co=null;function wo(){return Co??=new lt().loadAsync(`./models/prayer-wheels/prayer-wheels.glb`).then(e=>{let t=e.scene,n=new Map;return t.traverse(e=>{if(!e.isMesh)return;let t=/^wheel_/.test(e.name);if(t){e.geometry.computeBoundingBox();let t=e.geometry.boundingBox.getCenter(new L);e.geometry.translate(-t.x,0,-t.z),e.geometry.computeBoundingBox(),e.position.x+=t.x,e.position.z+=t.z}let r=`${e.material.uuid}${t}`;n.has(r)||n.set(r,H({map:e.material.map,color:16777215,side:e.material.side},{rim:+!!t})),e.material=n.get(r),e.castShadow=e.receiveShadow=!0}),t}),Co}function To(){let e=new G,t=So.scale;return e.userData.wheels=[],e.userData.ready=wo().then(n=>{let r=n.clone();r.scale.setScalar(t),r.traverse(n=>{if(!/^wheel_/.test(n.name))return;let r=n.geometry.boundingBox;e.userData.wheels.push({mesh:n,x:n.position.x*t,r:(r.max.x-r.min.x+r.max.z-r.min.z)/4*t})}),e.userData.wheels.sort((e,t)=>e.x-t.x),e.add(r)}),uo(e,[{x:0,z:0,hw:(So.posts+.01)*t,hd:So.depth*t,top:So.top*t}],So.top*t)}var Eo=[`#2f6fc0`,`#f4f2ea`,`#cf3b2e`,`#3f9a52`,`#f0c23a`].map(e=>new a(e));function Do(){let e=new G,n=0;for(let[r,i]of[[3.3,.8],[2.5,.75],[1.75,.7]])Y(e,new t(r-.15,r,i,11),n?J.stone:J.stoneDark,0,n+i/2,0),n+=i;Y(e,new P(1.1,.9,9),J.stone,0,n+.45,0),Y(e,new t(.07,.1,4.6,6),J.pole,0,n+2.3,0),Y(e,new P(.18,.6,6),J.gold,0,n+4.9,0);for(let t=0;t<3;t++)Y(e,lo(1.6,(t+1)*.27,.45),J.stoneDark,0,(t+1)*.135,3.3+(2.5-t)*.45);let r=new L(0,n+4.2,0),i=[],a=[];for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=new L(Math.sin(t)*5.2,.05,Math.cos(t)*5.2);a.push(r,n);let o=n.clone().sub(r).normalize();for(let e=0;e<7;e++){let t=r.clone().lerp(n,.12+e*.11),a=new z().setFromPoints([t,t.clone().addScaledVector(o,.3),t.clone().addScaledVector(o,.3).setY(t.y-.26),t.clone().setY(t.y-.26)]);a.setIndex([0,1,2,0,2,3]);let s=Eo[e%5];a.setAttribute(`color`,new F([s,s,s,s].flatMap(e=>e.toArray()),3)),i.push(a)}}let o=it(i);return o.computeVertexNormals(),Y(e,o,so).castShadow=!1,e.add(new ot(new z().setFromPoints(a),new Ze({color:`#4a3f36`}))),uo(e,[...fo(3.3,n+5),{x:0,z:3.95,hw:.8,hd:.7,top:.8}],n+5.2)}function Oo(){let e=new G,t=3.6,n=2.4;return Y(e,lo(t,n,3),J.logs,0,n/2,0),po(e,t,3,n,1.1,.3,J.hutRoof,J.logs),Y(e,lo(.9,1.85,.08),J.dark,.6,.93,1.52),Y(e,lo(.8,.6,.08),J.dark,-.9,1.4,1.52),uo(e,[{x:0,z:0,hw:1.9000000000000001,hd:1.6,top:3.5}],3.5)}function ko(){let e=new G,t=.34,n=.28,r=.24,i=3.58;for(let r of[-1,1]){let a=r*2.4699999999999998;Y(e,lo(t,i,n),J.frame,a,i/2,0),Y(e,lo(t*.9,.2,1.9),J.frame,a,.1,0);for(let n of[-1,1])Y(e,lo(t*.6,1.45,.16),J.frame,a,.62,n*.48).rotation.x=n*.68}Y(e,lo(5.279999999999999,t,n),J.frame,0,i-t/2,0),Y(e,lo(4.6,r,n),J.frame,0,r/2,0);let a=new V({map:zo(`云霄峰 2800`),transparent:!0,alphaTest:.5,side:2}),o=new U(new l(2.6,.55),a);return o.position.set(0,3.24-.42,0),e.add(o),uo(e,[-1,1].map(e=>({x:e*2.4699999999999998,z:0,hw:.22000000000000003,hd:.95,top:i})),i)}var Ao={scale:10,floor:.042,room:[-.42,.436,-.25,.16],door:[-.09,.136]},jo=[[-.455,Ao.door[0],.16,.25,.32],[Ao.door[1],.463,.16,.25,.32],[-.455,-.42,-.31,.25,.32],[.436,.463,-.31,.25,.32],[-.455,-.1,-.31,-.25,.32],[.15,.463,-.31,-.25,.32],[-.135,-.1,-.4,-.25,.35],[.15,.185,-.4,-.25,.35],[-.135,.185,-.4,-.381,.35],[-.42,-.19,-.25,-.17,.15],[-.27,-.19,-.17,-.05,.15],{at:[-.2925,-.1475],yaw:-Math.PI/4,hw:.064,hd:.032,top:.15},[-.19,-.125,-.24,-.17,.14],[-.22,-.16,.01,.14,.26],[-.1,-.035,-.32,-.26,.14],[-.1,-.05,-.385,-.335,.16],[.06,.4,-.25,-.175,.14],[-.437,-.096,.25,.335,.14],[.189,.436,.25,.335,.14],[-.18,-.07,.25,.37,.22],{at:[.163,.337],yaw:Math.atan2(.054,.162),hw:.012,hd:.086,top:.32},[.385,.495,.305,.425,.15],[-.45,-.135,-.37,-.29,.14],[.185,.46,-.37,-.29,.14]],Mo=()=>Ao.floor*Ao.scale-.03;function No(){let e=new G,t=Ao.scale,n=e=>e*t-Mo(),r=jo.map(e=>Array.isArray(e)?{x:(e[0]+e[1])/2*t,z:(e[2]+e[3])/2*t,hw:(e[1]-e[0])/2*t,hd:(e[3]-e[2])/2*t,top:n(e[4])}:{x:e.at[0]*t,z:e.at[1]*t,yaw:e.yaw,hw:e.hw*t,hd:e.hd*t,top:n(e.top)});return e.userData.ready=new lt().loadAsync(`./models/coffee-cabin/coffee-cabin.glb`).then(n=>{let r=n.scene;r.scale.setScalar(t),r.position.y=-Mo(),r.traverse(e=>{if(e.isLight){if(!/^Interior/.test(e.name)){e.visible=!1;return}e.distance*=t,e.intensity*=t*t*Po,e.decay=2;return}if(!e.isMesh)return;let n=e.material,r=n.transparent||n.opacity<1||/glass/i.test(n.name);n.emissive&&n.emissive.getHex()>0?e.material=new V({color:n.emissive.clone().multiplyScalar(Math.min(1,n.emissiveIntensity??1))}):(e.material=r?H({color:n.color,transparent:!0,opacity:n.opacity,depthWrite:!1,side:n.side},{hatch:0}):H({map:n.map,color:n.map?16777215:n.color,side:n.side}),e.castShadow=!r,e.receiveShadow=!0)}),e.add(r)}),uo(e,r,n(.8))}var Po=1;function Fo(){let e=new G,n=2.65,r=3.4;for(let i of[-1,1])Y(e,new t(.15,.17,r,8),J.post,i*n,r/2,0);Y(e,new t(.13,.13,5.8,8),J.post,0,3.35,0).rotation.z=Math.PI/2;for(let t of[-1,1]){Y(e,lo(.75,.07,.38),J.seat,t*1.25,.55,0);for(let n of[-.32,.32])Y(e,lo(.035,2.75,.035),J.rope,t*1.25+n,1.925,0)}return uo(e,[-1,1].map(e=>({x:e*n,z:0,hw:.22,hd:.22,top:r})),r)}function Io(){let e=new G,n=2.3,r=2.2,i=.9,o=new fe(n,1).scale(1,i,1),s=o.attributes.position,c=[],l=new a(`#2e3a45`),u=new a(`#e2742c`);for(let e=0;e<s.count;e+=3){let t=(s.getY(e)+s.getY(e+1)+s.getY(e+2))/3>n*i*.55?l:u;for(let e=0;e<3;e++)c.push(t.r,t.g,t.b)}o.setAttribute(`color`,new F(c,3)),Y(e,o,co,0,4.27-.35,0),Y(e,new t(n*.85,n*.7,.45,12),J.steel,0,2.4000000000000004,0);let d=[];for(let n=0;n<4;n++){let i=Math.PI/4+n*Math.PI/2,a=Math.sin(i)*1.45,o=Math.cos(i)*1.45;Y(e,new t(.11,.2,1.8000000000000003,8),J.steel,a,1.35,o),Y(e,new t(.22,.26,.5,8),J.orange,a,.25,o),d.push({x:a,z:o,hw:.27,hd:.27,top:r})}let f=Math.hypot(r,.8),p=Math.atan2(-.8,r);for(let t of[-1,1])Y(e,lo(.05,f,.05),J.steel,t*.28,r/2,1.7).rotation.x=p;for(let t=1;t<=5;t++)Y(e,lo(.56,.04,.05),J.steel,0,t/6*r,2.1-t/6*.8);return uo(e,d,5.99)}function Lo(){let e=new G;Y(e,lo(1.4,.5,1.4),J.stoneDark,0,.25,0),Y(e,new t(.32,.5,26,8),J.mast,0,13,0);for(let t=0;t<3;t++){let n=t*Math.PI*2/3;Y(e,lo(.35,2.2,.12),J.panel,Math.sin(n)*.48,22.5,Math.cos(n)*.48).rotation.y=n,Y(e,lo(.3,1.2,.1),J.panel,Math.sin(n+1)*.5,18,Math.cos(n+1)*.5).rotation.y=n+1}for(let n=0;n<6;n++){let r=n*Math.PI/3;Y(e,new t(.03,.03,1.6,4),J.steel,Math.sin(r)*.3,26.6,Math.cos(r)*.3).rotation.set(Math.cos(r)*.5,0,-Math.sin(r)*.5)}return uo(e,[{x:0,z:0,hw:.75,hd:.75,top:27}],27.4)}var Ro={yurt:_o,signpost:xo,prayerWheels:To,ovoo:Do,hut:Oo,photoFrame:ko,cabin:No,swing:Fo,pod:Io,mast:Lo};function zo(e){let t=document.createElement(`canvas`);t.width=512,t.height=108;let n=t.getContext(`2d`);n.fillStyle=`#e2b54a`,n.strokeStyle=`#5a3d1c`,n.lineWidth=6,n.textAlign=`center`,n.textBaseline=`middle`,n.font=`700 84px "PingFang SC", "Patrick Hand SC", sans-serif`,n.strokeText(e,256,58),n.fillText(e,256,58);let r=new ve(t);return r.colorSpace=ae,r}function Bo(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`);n.beginPath(),n.arc(64,64,58,0,Math.PI*2),n.fillStyle=e===`M`?`#5c6a73`:`#c8402f`,n.fill(),n.lineWidth=7,n.strokeStyle=`#fbfaf5`,n.stroke(),n.fillStyle=`#fbfaf5`,n.textAlign=`center`,n.textBaseline=`middle`,n.font=`700 ${e.length>1?54:78}px "Patrick Hand SC", sans-serif`,n.fillText(e,64,68);let r=new ve(t);r.colorSpace=ae;let i=new x(new T({map:r,depthTest:!1,depthWrite:!1,sizeAttenuation:!1}));return i.scale.set(.05,.05,1),i.renderOrder=10,i}function Vo(e,{labels:t=!1,keep:n=()=>!0}={}){let r=new G;r.name=`summit`;let i=new G;i.visible=t,r.add(i);let a=[],o=new Map,s=[];for(let t of ya.objects){let{x:c,z:l,yaw:u}=za(t.id),[d,f]=t.round?[t.size[0],t.size[0]]:t.size;if(!n({x:c,z:l,yaw:u,hw:d,hd:f}))continue;let p=new G;p.name=t.id,p.userData={id:t.id,label:t.label},p.position.set(c,e.heightAt(c,l),l),p.rotation.y=u;let m=Ro[t.kind]();m.name=`placeholder`,m.userData.ready&&s.push(m.userData.ready),p.add(m),r.add(p),o.set(t.id,p);let h=Math.cos(u),g=Math.sin(u);for(let e of m.userData.solids)a.push({id:t.id,x:c+e.x*h+e.z*g,z:l-e.x*g+e.z*h,yaw:u+(e.yaw??0),hw:e.hw,hd:e.hd,top:p.position.y+e.top});let _=Bo(t.label);_.position.set(c,p.position.y+m.userData.height+1.5,l),i.add(_)}return{group:r,footprints:a,byId:o,tags:i,ready:Promise.all(s)}}var Ho={smooth:3,slope:.12,straight:12,depth:3,bank:.02,shore:50,pad:5},Uo=[[0,9,.03,0],[.45,5.5,.02,1.7],[-.55,3.7,.012,4.1],[.18,14,.022,2.6]],Wo=Math.atan2(.38,.92),Go=Uo.map(([e,t,n,r])=>{let i=2*Math.PI/t,a=Wo+e;return{kx:Math.cos(a)*i,kz:Math.sin(a)*i,w:Math.sqrt(9.81*i),a:n,p:r}}),Ko=Uo.reduce((e,t)=>e+t[2],0);function qo(e,t,n){let r=0;for(let i of Go)r+=i.a*Math.sin(i.kx*e+i.kz*t-i.w*n+i.p);return r}var Jo={shallow:`#86cfc9`,deep:`#3f8ea6`,sky:`#c4e4ea`,ripple:`#e6f5f2`,foam:`#fbfaf4`,ink:`#3d6f7a`},Yo=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Xo(e,t){let n=e;for(let e=0;e<t;e++)n=n.flatMap(([e,t],r)=>{let[i,a]=n[(r+1)%n.length];return[[.75*e+.25*i,.75*t+.25*a],[.25*e+.75*i,.25*t+.75*a]]});return n}function Zo(e,t,n){let r=!1;for(let i=0,a=e.length-1;i<e.length;a=i++){let[o,s]=e[i],[c,l]=e[a];s>n!=l>n&&t<(c-o)*(n-s)/(l-s)+o&&(r=!r)}return r}function Qo(e,t,n,r){let i=1/0,a=0,o=0,s=1,c=0;for(let r=0;r<e.length;r++){let[l,u]=e[r],[d,f]=e[(r+1)%e.length],p=d-l,m=f-u,h=Math.max(0,Math.min(1,((t-l)*p+(n-u)*m)/(p*p+m*m||1))),g=l+p*h,_=u+m*h,v=Math.hypot(g-t,_-n);v<i&&(i=v,a=g,o=_,s=p,c=m)}let l=Zo(e,t,n),u=t-a,d=n-o,f=Math.hypot(u,d);if(f>1e-6)u/=f*(l?-1:1),d/=f*(l?-1:1);else{let r=Math.hypot(s,c)||1;u=c/r,d=-s/r,Zo(e,t+u*.1,n+d*.1)&&(u=-u,d=-d)}return r.d=l?-i:i,r.nx=u,r.nz=d,r}function $o(e,t=[]){let n=Math.max(2*e.step,Ho.straight),r=n+Ho.shore,i={d:0,nx:0,nz:0},a=(e,t)=>{if(t<0){let n=-t;return e-Math.min(n,Ho.straight)*Ho.slope-(Ho.depth-Ho.straight*Ho.slope)*Yo(Ho.straight,Ho.straight*3.5,n)}return e+Math.min(t,Ho.straight)*Ho.slope+Math.max(0,t-Ho.straight)*Ho.bank};return t.map(t=>{let o=Xo(t.points,Ho.smooth),s=[];o.forEach(([t,n],r)=>{let[i,a]=o[(r+1)%o.length],c=Math.max(1,Math.round(Math.hypot(i-t,a-n)/2));for(let r=0;r<c;r++)s.push(e.heightAt(t+(i-t)*r/c,n+(a-n)*r/c))}),s.sort((e,t)=>e-t);let c=s[s.length>>1],l=o.map(e=>e[0]),u=o.map(e=>e[1]),d=[Math.min(...l),Math.min(...u),Math.max(...l),Math.max(...u)],f=e.verts,p=e.step,m=Math.max(0,Math.floor((d[0]-r-e.x0)/p)),h=Math.min(e.cells,Math.ceil((d[2]+r-e.x0)/p)),g=Math.max(0,Math.floor((d[1]-r-e.z0)/p)),_=Math.min(e.cells,Math.ceil((d[3]+r-e.z0)/p));for(let t=g;t<=_;t++)for(let s=m;s<=h;s++){let{d:l}=Qo(o,e.x0+s*p,e.z0+t*p,i),u=t*f+s;if(l>=r)continue;let d=a(c,l);e.h[u]=d+(e.h[u]-d)*Yo(n,r,l)}return{id:t.id,name:t.name,outline:o,level:c,box:d}})}function es(e,t,n){for(let r of e)if(t>r.box[0]&&t<r.box[2]&&n>r.box[1]&&n<r.box[3]&&Zo(r.outline,t,n))return r;return null}function ts(e,t){return Object.create(e,{heightAt:{value:(n,r)=>{let i=e.heightAt(n,r),a=es(t,n,r);return a?Math.max(i,a.level):i}}})}var ns={lake:null,d:0,nx:0,nz:0};function rs(e,t,n,r=20){for(let i of e){let e=i.box;if(!(t<e[0]-r||t>e[2]+r||n<e[1]-r||n>e[3]+r)&&(Qo(i.outline,t,n,ns),ns.d<r))return ns.lake=i,ns}return null}function is(e,t){let n=([e,n])=>Math.min(...t.map(({points:t})=>Math.min(...t.slice(1).map((r,i)=>{let a=t[i],o=r[0]-a[0],s=r[1]-a[1],c=I.clamp(((e-a[0])*o+(n-a[1])*s)/(o*o+s*s||1),0,1);return Math.hypot(a[0]+o*c-e,a[1]+s*c-n)})))),r=e.outline[0],i=1/0;for(let t of e.outline){let e=n(t);e<i&&(i=e,r=t)}let a=(e.box[0]+e.box[2])/2,o=(e.box[1]+e.box[3])/2,s=Math.hypot(a-r[0],o-r[1]),{nx:c,nz:l}=rs([e],r[0]+(a-r[0])/s,r[1]+(o-r[1])/s,5),u=1.8;return{x:r[0]-c*u,z:r[1]-l*u,dx:-c,dz:-l}}var as=64;function os(t){let n=new G;n.name=`Lakes`;let r=[];for(let i of t){let t=ls(i.outline,Ho.pad).map(([t,n])=>new e(t,n)),a=ss(t.length+as);cs(a,t,[],i.level),a.computeBoundingSphere();let o=ds(i.outline),s=new U(a,o);s.name=`lake:${i.id}`,s.receiveShadow=!0,n.add(s);let c=i.box,l=Ho.pad;r.push({lake:i,geo:a,outline:t,mat:o,on:e=>e[0].x>c[0]-l&&e[0].x<c[2]+l&&e[0].y>c[1]-l&&e[0].y<c[3]+l,cut:!1})}return{group:n,update(e,t=[]){for(let n of r){n.mat.userData.uniforms.uTime.value=e;let r=as,i=t.filter(e=>e.length>2&&e.length<=r&&n.on(e)&&(r-=e.length)>=0);(i.length||n.cut)&&(cs(n.geo,n.outline,i,n.lake.level),n.cut=i.length>0)}},setSky(e){for(let t of r)t.mat.userData.uniforms.uSky.value.copy(e)}}}function ss(e){let t=new z;t.setAttribute(`position`,new qe(new Float32Array(e*3),3).setUsage(N));let n=new Float32Array(e*3);for(let t=0;t<e;t++)n[t*3+1]=1;return t.setAttribute(`normal`,new qe(n,3)),t.setIndex(new qe(new Uint16Array(e*3+12),1).setUsage(N)),t}function cs(e,t,n,r){let i=Be.triangulateShape(t,n),a=t.concat(...n),o=e.attributes.position,s=e.index,c=s.array;a.forEach((e,t)=>o.setXYZ(t,e.x,r,e.y)),i.forEach(([e,t,n],r)=>{let i=(a[t].y-a[e].y)*(a[n].x-a[e].x)-(a[t].x-a[e].x)*(a[n].y-a[e].y)>0;c[r*3]=e,c[r*3+1]=i?t:n,c[r*3+2]=i?n:t}),e.setDrawRange(0,i.length*3),o.needsUpdate=!0,s.needsUpdate=!0}function ls(e,t){let n=e.length;return e.map(([r,i],a)=>{let[o,s]=e[(a+n-1)%n],[c,l]=e[(a+1)%n],u=l-s,d=-(c-o),f=Math.hypot(u,d)||1;return u/=f,d/=f,Zo(e,r+u*.5,i+d*.5)&&(u=-u,d=-d),[r+u*t,i+d*t]})}var us=`
float wHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float wNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(i), wHash(i + vec2(1, 0)), u.x), mix(wHash(i + vec2(0, 1)), wHash(i + vec2(1, 1)), u.x), u.y);
}
float waves(vec2 p, float t) {
  return ${Go.map(e=>`${e.a.toFixed(4)} * sin(dot(vec2(${e.kx.toFixed(5)}, ${e.kz.toFixed(5)}), p) - ${e.w.toFixed(5)} * t + ${e.p.toFixed(3)})`).join(`
    + `)};
}
`;function ds(t){let n=H({color:`#ffffff`},{hatch:0}),r=n.onBeforeCompile,i=[...t,t[0]].map(([t,n])=>new e(t,n)),o={uTime:{value:0},uOutline:{value:i},uShallow:{value:new a(Jo.shallow)},uDeep:{value:new a(Jo.deep)},uSky:{value:new a(Jo.sky)},uRipple:{value:new a(Jo.ripple)},uFoam:{value:new a(Jo.foam)},uInk:{value:new a(Jo.ink)}};return n.userData.uniforms=o,n.onBeforeCompile=(e,t)=>{r(e,t),Object.assign(e.uniforms,o),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        #define LAKE_N ${i.length}
        uniform vec2 uOutline[LAKE_N];
        uniform float uTime;
        uniform vec3 uShallow, uDeep, uSky, uRipple, uFoam, uInk;
        ${us}
        float shoreDist(vec2 p) {
          float d = 1e9;
          for (int i = 0; i < LAKE_N - 1; i++) {
            vec2 a = uOutline[i], ba = uOutline[i + 1] - a, pa = p - a;
            d = min(d, length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0)));
          }
          return d;
        }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        {
          vec2 p = vTWorld.xz;
          float d = shoreDist(p), t = uTime;
          float far = smoothstep(120.0, 600.0, length(vViewPosition));
          // Deeper toward the middle, mottled by slow drifting noise.
          float m = wNoise(p * 0.035 + t * 0.01) * 0.6 + wNoise(p * 0.12 - t * 0.02) * 0.4;
          vec3 col = mix(uShallow, uDeep, clamp(smoothstep(2.0, 32.0, d) * 0.85 + (m - 0.5) * 0.35, 0.0, 1.0));
          // The sky in it, toward the far shore: two flat steps, as the toon tones are.
          vec3 V = normalize(cameraPosition - vTWorld);
          float graze = 1.0 - clamp(V.y, 0.0, 1.0);
          float gw = max(fwidth(graze), 1e-4);
          col = mix(col, uSky, (smoothstep(0.82 - gw, 0.82 + gw, graze) * 0.35 + smoothstep(0.93 - gw, 0.93 + gw, graze) * 0.3));
          // The crests, where the waves the boat rocks on rise highest, broken up.
          float w = waves(p, t) * ${(1/Ko).toFixed(4)} + (wNoise(p * 0.22 + vec2(t * 0.12, -t * 0.05)) - 0.5) * 0.9;
          float ww = max(fwidth(w), 1e-4);
          float crest = 1.0 - smoothstep(ww * 0.6, ww * 1.8, abs(w - 0.62));
          crest *= smoothstep(0.35, 0.6, wNoise(p * 0.6 + t * 0.07));
          col = mix(col, uRipple, crest * 0.8 * (1.0 - far));
          // Glints of sun among them, small, and more toward the far shore.
          float g = wNoise(p * 5.0 + vec2(t * 1.1, t * 0.5)) * wNoise(p * 1.3 - vec2(t * 0.4, -t * 0.3));
          float gl = max(fwidth(g), 1e-4);
          col = mix(col, vec3(1.0), smoothstep(0.7 - gl, 0.7 + gl, g) * smoothstep(0.45, 0.85, graze) * (1.0 - far));
          // Lapping at the shore: foam that breathes in and out, an ink line at
          // its edge, and a fainter line following it in.
          float wob = wNoise(p * 0.3) * 6.0;
          float lap = 0.9 + 0.5 * sin(t * 1.1 + wob), lap2 = 2.6 + 0.9 * sin(t * 1.1 - 1.3 + wob);
          float fw = max(fwidth(d), 1e-3);
          float foam = 1.0 - smoothstep(lap - fw, lap + fw, d);
          float line2 = (1.0 - smoothstep(fw * 0.5, fw * 1.6, abs(d - lap2))) * (0.45 + 0.35 * sin(t * 1.1 - 1.3 + wob));
          col = mix(col, uFoam, max(foam, line2) * (1.0 - far * 0.5));
          float ink = 1.0 - smoothstep(fw * 0.5, fw * 1.8, abs(d - lap));
          col = mix(col, uInk, ink * 0.5 * (1.0 - far * 0.7));
          diffuseColor.rgb = col;
        }`)},n.customProgramCacheKey=()=>`lake-water-${i.length}`,n}var fs=new a(`#4d7560`),ps=new a(`#3d6352`),ms=new a(`#f6f7f2`),hs=new a(`#6b5248`),gs=11.8,_s=[`spruce`,`larch`,`pine`,`birch`],vs={spruce:{far:new a(`#46705f`),snow:1,fill:.75,trunk:.45},larch:{far:new a(`#76665d`),snow:.3,fill:.7,trunk:.45},pine:{far:new a(`#3f6650`),snow:1,fill:.8,trunk:.5},birch:{far:new a(`#7b675b`),snow:.25,fill:.6,trunk:.3}};function ys(e,t){let n=e.index?e.toNonIndexed():e,r=n.attributes.position,i=new Float32Array(r.count*3),o=new a;for(let e=0;e<r.count/3;e++){t(o,(r.getY(e*3)+r.getY(e*3+1)+r.getY(e*3+2))/3,e);for(let t=0;t<3;t++)o.toArray(i,(e*3+t)*3)}return n.setAttribute(`color`,new qe(i,3)),n.computeVertexNormals(),n}function bs(e,t,n,r,i,a,o){let s=new P(e,t,r,a,!0),c=s.attributes.position;for(let e=0;e<c.count;e++)if(c.getY(e)<-t/2+.01){let t=Math.atan2(c.getZ(e),c.getX(e)),n=1+.12*Math.sin(t*5+i*3);c.setX(e,c.getX(e)*n),c.setZ(e,c.getZ(e)*n),c.setY(e,c.getY(e)-.25*Math.abs(Math.sin(t*2.5+i)))}return s.rotateY(i),s.translate(0,n,0),ys(s,(e,r,i)=>{let a=(r-(n-t/2))/t;o(e,a>.6||a>.3&&i%3==0,i)})}function xs(e){let n=[];if(!e){let e=new t(.22,.32,3,5,1,!0).translate(0,1.5,0);n.push(ys(e,e=>e.copy(hs)))}let r=e?(e,t,n)=>e.setRGB(+!!t,n%2,0):(e,t,n)=>e.copy(t?ms:n%2?fs:ps);(e?[[2.7,7,4.6],[1.7,5.8,8.8]]:[[2.8,4.6,3.8],[2.1,4.4,7],[1.3,3.8,9.9]]).forEach(([t,i,a],o)=>n.push(bs(t,i,a,e?6:7,o*1.3,e?1:2,r)));let i=it(n.map(e=>(e.deleteAttribute(`uv`),e)));return e&&i.scale(1/2.7,1/gs,1/2.7),i.computeBoundingSphere(),i}function Ss(){let e=H({vertexColors:!0},{hatch:1}),t=e.onBeforeCompile,n=ms.clone();return e.onBeforeCompile=(e,r)=>{t(e,r),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aSnow;`).replace(`#include <color_vertex>`,`vColor = vec4(mix(instanceColor.rgb * (1.0 - 0.18 * color.g), vec3(${n.r}, ${n.g}, ${n.b}), color.r * aSnow), 1.0);`)},e.customProgramCacheKey=()=>`tree-far`,e}async function Cs(){let e=await new lt().loadAsync(`./models/trees/trees.glb`),t=Object.fromEntries(_s.map(e=>[e,[]])),n=new Map;e.scene.traverse(e=>{let r=e.isMesh&&e.name.match(/^(\w+)-(\w+)_lod(\d)$/);if(!r||!t[r[1]])return;let i=`${r[1]}-${r[2]}`;if(!n.has(i)){let e={};n.set(i,e),t[r[1]].push(e)}let a=e.geometry.index?e.geometry.toNonIndexed():e.geometry,o=a.attributes.color,s=new Float32Array(o.count*3);for(let e=0;e<o.count;e++)s.set([o.getX(e),o.getY(e),o.getZ(e)],e*3);let c=new z;c.setAttribute(`position`,a.attributes.position),c.setAttribute(`color`,new qe(s,3)),c.computeVertexNormals(),c.computeBoundingBox(),n.get(i)[`lod${r[3]}`]=c});for(let e of Object.values(t))for(let t of e){let e=t.lod0.boundingBox;t.height=e.max.y,t.radius=Math.max(-e.min.x,e.max.x,-e.min.z,e.max.z)}return t}function ws(){let e=xs(0);return Object.fromEntries(_s.map(t=>[t,[{lod0:e,lod1:e,height:gs,radius:2.8}]]))}var Ts={treeline:2350,spacing:10,density:.25,get clearings(){return[...ka.map(e=>({x:e.x,z:e.z,r:110})),{x:Aa.x,z:Aa.z,r:Aa.clearing}]}};function Es(e){let t=e.map(e=>[e.points[0],e.points[e.points.length-1]]);return(e,n)=>{let r=1/0;for(let[i,a]of t){let t=a[0]-i[0],o=a[1]-i[1],s=((e-i[0])*t+(n-i[1])*o)/(t*t+o*o);s=Math.max(0,Math.min(1,s)),r=Math.min(r,Math.hypot(i[0]+t*s-e,i[1]+o*s-n))}return r}}var Ds=19,Os=9,ks=I.smoothstep;function As(e){let t=Math.hypot(e.x,e.z);return{north:t>1e-4?-e.z/t:0,steep:ks(t,.04,.2)}}function js(e,t,{north:n,steep:r}){return I.lerp(.6,I.lerp(.2,1.5,ks(n,-.7,.5)),r)*(.35+.65*ks(Ua(e*.004+7,t*.004-3),.3,.7))}function Ms(e,t,n,{north:r,steep:i},a){let o=1-ks(n,1380,1520),s=ks(n,1950,2250),c=Math.max(0,r)*i,l=[(.25+1.1*c+.5*o)*(1-.8*s),1,.05+1.3*s+a,.02+1.2*o*(1-c)].map((n,r)=>n*(.3+1.4*Ua(e*.005+r*31,t*.005-r*17))),u=zs(e*.37+1.9,t*1.1)*l.reduce((e,t)=>e+t);for(let e=0;e<l.length;e++)if((u-=l[e])<0)return e;return 1}function Ns(e,t,n,{treeline:r,spacing:i=10,density:a=.5,clearings:o=[],area:s=null}){let c=Es(n),l=new L,u=Math.ceil(e.size/i),d=(e,t)=>Math.max(0,Math.ceil((e-t)/i)),f=(e,t)=>Math.min(u-1,Math.floor((e-t)/i)),[p,m,h,g]=s?[d(s[0],e.x0),d(s[1],e.z0),f(s[2],e.x0),f(s[3],e.z0)]:[0,0,u-1,u-1],_=[];for(let n=m;n<=g;n++){let s=e.z0+n*i;for(let d=p;d<=h;d++){let f=e.x0+d*i,p=f+(zs(f,s)-.5)*i*.9,m=s+(zs(s+3.3,f)-.5)*i*.9;if(!e.inside(p,m,30)||e.holeAt(p,m))continue;let h=e.heightAt(p,m),g=r+(Ua(p*.006,m*.006)-.5)*160;if(h>g)continue;let v=ks(h,g-120,g);if(zs(p*1.7,m)<v*.85||t.distAt(p,m)<Ds+zs(p,m*1.3)*6||c(p,m)<Os||(e.normalAt(p,m,l),l.y<.78)||Ua(p*.012+40,m*.012)<.42)continue;let y=As(l);if(zs(p+5.1,m*.7)>a*js(p,m,y)||o.some(e=>Math.hypot(p-e.x,m-e.z)<e.r))continue;let b=Ms(p,m,h,y,v);_.push(Fs(n*u+d,p,m,(.75+zs(m,p*2.1)*.55)*(1-v*.4),b))}}return _}function Ps(e,t,n){if(!n)return{trees:e,removed:[]};let r=n.removed instanceof Set?n.removed:new Set(n.removed||[]),i=[],a=[];for(let t of e)(r.has(t.id)?a:i).push(t);let o=new L;return(n.added||[]).forEach(([e,n,r],a)=>{if(!t.inside(e,n)||t.holeAt(e,n))return;let s=Ms(e,n,t.heightAt(e,n),As(t.normalAt(e,n,o)),0);i.push(Fs(-1-a,e,n,r,s))}),{trees:i,removed:a}}function Fs(e,t,n,r,i){return{id:e,x:t,z:n,s:r,sp:i,v:zs(t*2.3,n+5.7),sy:r*(.9+zs(t+2,n)*.3),rot:zs(t,n+9)*Math.PI*2}}function Is(e,t,n,r=null){return Ps(Ns(e,t,n,{...Ts,density:r?.density??Ts.density}),e,r).trees}function Ls(e,t,n,r,{scale:i,cell:a,per:o=i*i,keepOff:s=[],room:c=12}){let l=2.8*(i-1),u=Es(r),d=Math.ceil(t.size/a),f=new Map;for(let n of e){let e=Math.floor((n.z-t.z0)/a)*d+Math.floor((n.x-t.x0)/a);f.has(e)||f.set(e,[]),f.get(e).push(n)}let p=(e,t,n,r)=>{let i=Math.cos(e.yaw),a=Math.sin(e.yaw),o=t-e.x,s=n-e.z;return Math.abs(o*i-s*a)<e.hw+r&&Math.abs(o*a+s*i)<e.hd+r},m=[];for(let[e,r]of f){let f=t.x0+e%d*a,h=t.z0+Math.floor(e/d)*a;if(zs(f+1.7,h+4.1)*o>=r.length)continue;let g=f+zs(f,h)*a,_=h+zs(h+3.3,f)*a,v=null,y=1/0;for(let e of r){let t=Math.hypot(e.x-g,e.z-_);if(t>=y||n.distAt(e.x,e.z)<Ds+l||u(e.x,e.z)<Os+l)continue;let r=2.8*e.s*i+c;s.some(t=>p(t,e.x,e.z,r))||(v=e,y=t)}v&&m.push(Fs(v.id,v.x,v.z,v.s*i,v.sp))}return m}function Rs(e,t,{models:n=null,chunk:r=250,lodDistance:i=450,hiDistance:o=160}={}){n??=ws();let s=xs(1),c=H({vertexColors:!0},{hatch:1}),l=Ss(),u=_s.map(e=>n[e]),d=0;for(let e of u)for(let t of e)d+=t.lod0.attributes.position.count+t.lod1.attributes.position.count;let f=new ft(2048,d,0,c),p=u.map(e=>e.map(e=>[f.addGeometry(e.lod0),f.addGeometry(e.lod1)]));f.castShadow=!0,f.receiveShadow=!1,f.frustumCulled=!1;let m=r,h=new Map,g=new Map,_=new L(0,1,0),v=new We,y=new L,b=new L;for(let n of t){let t=u[n.sp],r=Math.floor(n.v*t.length)%t.length,i=t[r],a=vs[_s[n.sp]];v.setFromAxisAngle(_,n.rot),b.set(n.x,e.heightAt(n.x,n.z)-.3,n.z);let o=new nt().compose(b,v,y.set(n.s,n.sy,n.s)),s=i.radius*a.fill*n.s,c=new nt().compose(b,v,y.set(s,i.height*n.sy,s)),l=`${Math.floor(n.x/m)},${Math.floor(n.z/m)}`,d=h.get(l);d||h.set(l,d=[]),d.push({m:o,fm:c,pos:b.clone(),geo:p[n.sp][r],kind:a});let f=`${Math.floor(n.x/10)},${Math.floor(n.z/10)}`,x=g.get(f);x||g.set(f,x=[]),x.push({x:n.x,z:n.z,r:a.trunk*n.s+.15,top:b.y+i.height*n.sy})}let x=t.length,S=new G;S.add(f);let C=new a,w=e=>{let t=new z;for(let[e,n]of Object.entries(s.attributes))t.setAttribute(e,n);t.setAttribute(`aSnow`,new ge(Float32Array.from(e,e=>e.kind.snow),1)),t.boundingSphere=s.boundingSphere;let n=new te(t,l,e.length);return e.forEach((e,t)=>{n.setMatrixAt(t,e.fm),n.setColorAt(t,C.copy(e.kind.far).multiplyScalar(.92+.16*zs(e.pos.x,e.pos.z*1.3)))}),n.castShadow=!1,n.receiveShadow=!1,n.computeBoundingSphere(),S.add(n),n},T=new Map;for(let[t,n]of h){let[r,i]=t.split(`,`).map(Number),a=new L((r+.5)*m,0,(i+.5)*m);a.y=e.heightAt(a.x,a.z);let o=`${Math.floor(r/4)},${Math.floor(i/4)}`,s=T.get(o);s||T.set(o,s={chunks:[],trees:[]}),s.chunks.push({center:a,trees:n,lo:w(n),ids:null,lods:null}),s.trees.push(...n)}for(let[t,n]of T){let[r,i]=t.split(`,`).map(Number);n.center=new L((r+.5)*m*4,0,(i+.5)*m*4),n.center.y=e.heightAt(n.center.x,n.center.z),n.lo=w(n.trees)}let E=i+m*4*.75;console.log(`forest: ${x} trees in ${h.size} chunks, ${T.size} far batches`);let D=(e,t)=>e<o?0:e>o+20?1:t,O=new Set;function k(e,t){let n=f.instanceCount+e.trees.length;n>f.maxInstanceCount&&f.setInstanceCount(Math.max(n,Math.ceil(f.maxInstanceCount*1.5))),e.ids=new Int32Array(e.trees.length),e.lods=new Uint8Array(e.trees.length),e.trees.forEach((n,r)=>{let i=D(n.pos.distanceTo(t),1);e.ids[r]=f.addInstance(n.geo[i]),e.lods[r]=i,f.setMatrixAt(e.ids[r],n.m)}),O.add(e)}function A(e){for(let t of e.ids)f.deleteInstance(t);e.ids=e.lods=null,O.delete(e)}let ee=new L(1/0,0,0);return{group:S,count:x,farMeshes:[...T.values()].flatMap(e=>[e.lo,...e.chunks.map(e=>e.lo)]),update(e){let t=!1;for(let n of T.values()){let r=n.center.distanceTo(e)>E;n.lo.visible=r;for(let a of n.chunks){let n=!r&&a.center.distanceTo(e)<i;if(a.lo.visible=!r&&!n,n&&!a.ids)k(a,e);else if(!n&&a.ids)A(a);else continue;t=!0}}if(!(!t&&ee.distanceToSquared(e)<16)){ee.copy(e);for(let t of O)t.trees.forEach((n,r)=>{let i=D(n.pos.distanceTo(e),t.lods[r]);i!==t.lods[r]&&(t.lods[r]=i,f.setGeometryIdAt(t.ids[r],n.geo[i]))})}},hit(e,t,n){let r=Math.floor(e/10),i=Math.floor(t/10);for(let a=i-1;a<=i+1;a++)for(let i=r-1;i<=r+1;i++){let r=g.get(`${i},${a}`);if(r)for(let i of r){let r=e-i.x,a=t-i.z,o=n+i.r;if(r*r+a*a<o*o)return i}}return null}}}function zs(e,t){let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)}var Bs={steel:H({color:`#9aa3a6`}),dark:H({color:`#3a4249`}),cabin:H({color:`#f0c24a`},{rim:1}),cabinRed:H({color:`#d9604c`},{rim:1}),cabinGray:H({color:`#aeb5b8`},{rim:1}),glass:H({color:`#2f4752`}),wall:H({color:`#d8cfc0`}),roof:H({color:`#4f6f7a`}),wood:H({color:`#9b7458`}),cable:new Ze({color:`#2a3138`})},Vs={easy:`#4f8fd6`,novice:`#4f8fd6`,intermediate:`#d9534a`,advanced:`#23303a`,expert:`#23303a`,freeride:`#f08a24`};function Hs(e,n,r){let i=new G,a=new U(new W(e,r,n),Bs.wall);a.position.y=r/2;let o=new U(new t(.01,e*.75,2.6,4,1),Bs.roof);o.rotation.y=Math.PI/4,o.scale.set(1,1,n/e),o.position.y=r+1.3;let s=new U(new W(e*.5,r*.55,.3),Bs.glass);s.position.set(0,r*.28,n/2);for(let e of[a,o,s])e.castShadow=!0,e.receiveShadow=!0,i.add(e);return i}var Us={"6号索道":`gray`,"2号索道":`yellow`},Ws={red:null,yellow:`#f0c24a`,gray:`#aeb5b8`},Gs=e=>Us[e]||`red`,Ks=4.2,qs=3,Js=18,Ys=`./models/lifts/`,Xs=null;function Zs(){return Xs||=(async()=>{let e=new lt,[t,n,r]=await Promise.all([`cabin`,`chair`,`station`].map(t=>e.loadAsync(`${Ys}${t}.glb`).then(Qs))),i=$s(t.geometry,Ks),a=r.geometry;a.computeBoundingBox();let o=a.boundingBox,s=Js/(o.max.z-o.min.z);a.translate(-(o.min.x+o.max.x)/2,-o.min.y,-(o.min.z+o.max.z)/2).scale(s,s,s),a.computeBoundingBox();let c=(e,t)=>H({map:t,side:e.side},{rim:1});return{cabin:i,cabinMats:Object.fromEntries(Object.entries(Ws).map(([e,n])=>[e,c(t.material,n?ec(t.material.map,n):t.material.map)])),chair:$s(n.geometry,qs),chairMat:c(n.material,n.material.map),station:a,stationMat:H({map:r.material.map}),stationHalfWidth:a.boundingBox.max.x,stationHeight:a.boundingBox.max.y}})()}function Qs(e){let t=null;return e.scene.updateMatrixWorld(!0),e.scene.traverse(e=>{e.isMesh&&!t&&(t=e)}),{geometry:t.geometry.clone().applyMatrix4(t.matrixWorld),material:t.material}}function $s(e,t){e.computeBoundingBox();let{min:n,max:r}=e.boundingBox,i=t/(r.y-n.y),a=(r.y-(r.y-n.y)*.05)*i;e.scale(i,i,i);let o=new L(1/0,1/0,1/0),s=o.clone().negate(),c=new L,l=e.attributes.position;for(let e=0;e<l.count;e++)c.fromBufferAttribute(l,e),!(c.y<a)&&(o.min(c),s.max(c));return e.translate(-(o.x+s.x)/2,-(o.y+s.y)/2,-(o.z+s.z)/2)}function ec(e,t){let n=e.image,r=document.createElement(`canvas`);r.width=n.width,r.height=n.height;let i=r.getContext(`2d`);i.drawImage(n,0,0);let o=i.getImageData(0,0,r.width,r.height),s=o.data,c={};new a(t).getRGB(c,ae);for(let e=0;e<s.length;e+=4){let t=s[e],n=Math.max(s[e+1],s[e+2]),r=I.smoothstep(t?(t-n)/t:0,.3,.6);if(!r)continue;let i=Math.min(t/225,1.1);s[e]+=(c.r*255*i-t)*r,s[e+1]+=(c.g*255*i-s[e+1])*r,s[e+2]+=(c.b*255*i-s[e+2])*r}i.putImageData(o,0,0);let l=new ve(r);for(let t of[`flipY`,`colorSpace`,`wrapS`,`wrapT`,`magFilter`,`minFilter`,`anisotropy`])l[t]=e[t];return l}function tc(e,t){let n=e.match(/(\d+)号/)?.[1];if(!n)return null;let r={red:`#d9604c`,yellow:`#f0c24a`,gray:`#aeb5b8`,chair:`#4f6f7a`}[t],i=t===`red`||t===`chair`?`#fbfaf5`:`#23303a`,a=document.createElement(`canvas`);a.width=a.height=256;let o=a.getContext(`2d`);o.beginPath(),o.arc(128,128,116,0,Math.PI*2),o.fillStyle=r,o.fill(),o.lineWidth=14,o.strokeStyle=`#23303a`,o.stroke(),o.fillStyle=i,o.textAlign=`center`,o.textBaseline=`middle`,o.font=`700 168px "Patrick Hand SC", sans-serif`,o.fillText(n,128,140);let s=new ve(a);return s.colorSpace=ae,s.anisotropy=4,new T({map:s,alphaTest:.5})}var nc=6,rc=14,ic=5;function ac(e,n,{scale:r=1,stationScale:i=r,spacing:a=1,speed:s=5}={}){let c=new G,l=[],u=[],d=[],f=[],p=[],m=[],h=it([new t(.35,.5,1,6).translate(0,.5,0)]),g=new W(7.5,.4,.5),_=[],v=[],y=new o,b=va(n,i),S=(e,t,n,r,i,a,o=a)=>{y.position.set(t,n,r),y.rotation.set(0,i,0),y.scale.set(a,o,a),y.updateMatrix(),e.push(y.matrix.clone())};for(let[t,o]of n.entries()){if(o.type===`magic_carpet`){let t=oc(e,o,i);c.add(t.mesh),u.push(t);continue}let[n,s]=b[t],h=new L(n[0],e.heightAt(n[0],n[1]),n[1]),g=new L(s[0],e.heightAt(s[0],s[1]),s[1]),y=new L(g.x-h.x,0,g.z-h.z),C=y.length();y.normalize();let w=new L(-y.z,0,y.x),T=Math.atan2(y.x,y.z),E=o.type===`gondola`,D=(E?13:9)*r,O=E?Gs(o.name):`chair`,k=o.name&&tc(o.name,O);for(let[e,t]of[[h,0],[g,Math.PI]]){let n=new G;if(n.add(Hs(14,18,7)),n.scale.setScalar(i),n.position.copy(e),n.rotation.y=T+t,c.add(n),p.push(n),k){let e=new x(k);e.scale.setScalar(nc),e.position.set(0,rc,ic),n.add(e),m.push(e)}f.push({x:e.x,z:e.z,yaw:T,hw:7*i,hd:9*i,top:e.y+12*i})}let A=Math.max(2,Math.round(C/140)),ee=[];for(let t=0;t<=A;t++){let n=t/A,i=h.x+(g.x-h.x)*n,a=h.z+(g.z-h.z)*n,o=e.heightAt(i,a);ee.push(new L(i,o+D,a)),t!==0&&t!==A&&(S(_,i,o-.5,a,0,r,D+1),S(v,i,o+D+.3,a,T+Math.PI/2,r))}ee[0].y=h.y+6*r,ee[A].y=g.y+6*r;let j=[-3*r,3*r].map(e=>ee.map(t=>t.clone().addScaledVector(w,e)));for(let e of j)c.add(new dt(new z().setFromPoints(e),Bs.cable));let te=j.map(e=>{let t=[0];for(let n=1;n<e.length;n++)t.push(t[n-1]+e[n].distanceTo(e[n-1]));return t});d.push({id:o.id,name:o.name,type:o.type,a:h,b:g,cable:j[0],acc:te[0]});let M=(E?55:25)*a,N=Math.floor(te[0][te[0].length-1]/M);for(let e=0;e<2;e++)for(let t=0;t<N;t++){let n=O;l.push({kind:n,lane:j[e],acc:te[e],s:t*M,up:e===0,yaw:T})}}let C=(e,t,n)=>{let r=new te(e,t,n);return r.castShadow=!0,r.frustumCulled=!1,c.add(r),r};for(let[e,t,n]of[[h,Bs.steel,_],[g,Bs.dark,v]]){if(!n.length)continue;let r=C(e,t,n.length);n.forEach((e,t)=>r.setMatrixAt(t,e))}let w={};for(let e of[`red`,`yellow`,`gray`,`chair`]){let t=l.filter(t=>t.kind===e);if(!t.length)continue;let n=C(uc(e),sc,t.length);t.forEach((e,t)=>{e.mesh=n,e.index=t}),w[e]=n}Zs().then(e=>{for(let[t,n]of Object.entries(w))n.geometry=t===`chair`?e.chair:e.cabin,n.material=t===`chair`?e.chairMat:e.cabinMats[t];for(let t of p){let n=new U(e.station,e.stationMat);n.castShadow=n.receiveShadow=!0,t.children[0].removeFromParent(),t.add(n)}for(let t of m)t.position.y=e.stationHeight+nc*.75;for(let t of f)t.hw=e.stationHalfWidth*i}).catch(e=>console.warn(`Lift models failed to load; keeping the box stand-ins.`,e));let T=new L;return{group:c,lines:d,footprints:f,update(e){for(let t of u)t.tex.offset.y=(t.tex.offset.y-e*t.rate)%1;for(let t of l){let n=t.acc[t.acc.length-1];t.s=(t.s+e*s)%n;let i=t.up?t.s:n-t.s,a=1;for(;a<t.acc.length-1&&t.acc[a]<i;)a++;let o=(i-t.acc[a-1])/(t.acc[a]-t.acc[a-1]);T.lerpVectors(t.lane[a-1],t.lane[a],o),y.position.copy(T),y.rotation.set(0,t.yaw+(t.up?0:Math.PI),Math.sin(t.s*.3)*.03),y.scale.setScalar(r),y.updateMatrix(),t.mesh.setMatrixAt(t.index,y.matrix)}for(let e of Object.values(w))e.instanceMatrix.needsUpdate=!0}}}function oc(e,t,n){let r=document.createElement(`canvas`);r.width=16,r.height=64;let i=r.getContext(`2d`);i.fillStyle=`#3a4249`,i.fillRect(0,0,16,64),i.fillStyle=`#9aa3a6`,i.fillRect(0,0,16,10);let a=new ve(r);a.wrapT=Ct,a.colorSpace=ae;let o=.6*n,s=.3*n,c=[],l=t.points;for(let e=0;e<l.length-1;e++){let t=Math.hypot(l[e+1][0]-l[e][0],l[e+1][1]-l[e][1]);for(let n=0;n<t;n+=4)c.push([l[e][0]+(l[e+1][0]-l[e][0])*n/t,l[e][1]+(l[e+1][1]-l[e][1])*n/t])}c.push(l[l.length-1]);let u=[],d=[],f=[],p=0;c.forEach(([t,n],r)=>{let i=c[Math.max(0,r-1)],a=c[Math.min(c.length-1,r+1)],l=Math.hypot(a[0]-i[0],a[1]-i[1])||1,m=-(a[1]-i[1])/l,h=(a[0]-i[0])/l;r&&(p+=Math.hypot(t-c[r-1][0],n-c[r-1][1])/(o*3));for(let r of[-1,1]){let i=t+m*o*r,a=n+h*o*r;u.push(i,e.heightAt(i,a)+s,a),d.push((r+1)/2,p)}if(r){let e=r*2;f.push(e-2,e,e-1,e-1,e,e+1)}});let m=new z;m.setAttribute(`position`,new F(u,3)),m.setAttribute(`uv`,new F(d,2)),m.setIndex(f),m.computeVertexNormals();let h=new U(m,H({map:a,side:2},{hatch:0}));return h.receiveShadow=!0,{mesh:h,tex:a,rate:1/(o*3)}}var sc=H({vertexColors:!0},{rim:1}),cc=new Map;function lc(e,t,n,r,i){e.translate(n,r,i);let o=new a(t),s=e.attributes.position.count;return e.setAttribute(`color`,new F(Array.from({length:s*3},(e,t)=>o.toArray()[t%3]),3)),e}function uc(e){if(cc.has(e))return cc.get(e);let t=e===`chair`?[lc(new W(.1,2,.1),Bs.dark.color,0,-1,0),lc(new W(2.4,.15,.7),Bs.steel.color,0,-2,0),lc(new W(2.4,.7,.1),Bs.steel.color,0,-1.65,-.35)]:[lc(new W(.12,2.2,.12),Bs.dark.color,0,-1.1,0),lc(new W(1.9,2,2.2),{red:Bs.cabinRed,yellow:Bs.cabin,gray:Bs.cabinGray}[e].color,0,-3.1,0),lc(new W(1.95,.8,1.7),Bs.glass.color,0,-2.7,0),lc(new W(1.7,.25,2),Bs.dark.color,0,-2,0)],n=it(t);return cc.set(e,n),n}function dc(e,n){let r=new t(.05,.05,1.8,5).translate(0,.9,0),i=new t(.07,.07,.45,5).translate(0,1.6,0),a=new Map;for(let t of n){let n=t.points,r=0;for(let i=0;i<n.length-1;i++){let o=n[i][0],s=n[i][1],c=n[i+1][0],l=n[i+1][1],u=Math.hypot(c-o,l-s),d=-(l-s)/u,f=(c-o)/u;for(let n=r;n<u;n+=35){let i=n/u,p=o+(c-o)*i,m=s+(l-s)*i;for(let n of[-1,1]){let r=p+d*n*18,i=m+f*n*18,o=Vs[t.difficulty]||Vs.intermediate;a.has(o)||a.set(o,[]),a.get(o).push([r,e.heightAt(r,i),i])}r=n+35-u}r<0&&(r=0)}}let o=new G,s=H({color:`#e9a23b`}),c=new nt;for(let[e,t]of a){let n=H({color:e}),a=new te(r,s,t.length),l=new te(i,n,t.length);t.forEach(([e,t,n],r)=>{c.makeTranslation(e,t-.1,n),a.setMatrixAt(r,c),l.setMatrixAt(r,c)}),a.computeBoundingSphere(),l.computeBoundingSphere(),o.add(a,l)}return o}function fc(e,t,n){let r=document.createElement(`canvas`);r.width=1024,r.height=256;let i=r.getContext(`2d`);i.fillStyle=t,i.fillRect(0,0,r.width,r.height),i.strokeStyle=`#23303a`,i.lineWidth=14,i.strokeRect(7,7,r.width-14,r.height-14),i.fillStyle=n,i.textAlign=`center`,i.textBaseline=`middle`,i.font=`700 104px "Patrick Hand SC", "PingFang SC", sans-serif`,i.fillText(e[0],r.width/2,e[1]?100:128),e[1]&&(i.font=`56px "Patrick Hand SC", sans-serif`,i.fillText(e[1],r.width/2,196));let a=new ve(r);return a.colorSpace=ae,a.anisotropy=4,a}function pc(e,{x:n,z:r,faceTo:i,roof:a,zh:o,en:s,ele:c},{scale:u=1}={}){let d=new G,f=Math.atan2(i[0]-n,i[1]-r),p=1/0,m=-1/0,h=Math.cos(f),g=Math.sin(f);for(let t=-.5;t<=.5;t+=.125)for(let i=-.5;i<=.5;i+=.25){let a=t*96*1.3*u,o=i*34*1.6*u,s=e.heightAt(n+a*h+o*g,r-a*g+o*h);p=Math.min(p,s),m=Math.max(m,s)}d.position.set(n,m,r),d.rotation.y=f,d.scale.setScalar(u);let _=(m-p)/u+2,v=H({color:a},{rim:1}),y=(e,t,n,r,i)=>{let a=new U(e,t);return a.position.set(n,r,i),a.castShadow=!0,a.receiveShadow=!0,d.add(a),a};y(new W(120,_,51),Bs.wall,0,-_/2+.4,0),y(new W(96,10,34),Bs.wall,0,5,0),y(new W(82.56,6,.6),Bs.glass,0,4.2,17),y(new W(90.24,7,24.48),Bs.wood,0,13.5,-2.04);let b=(e,t,n)=>{let r=y(new W(e,1.2,32.3),v,t,17.3+Math.tan(Math.abs(n))*e*.5,-1.36);r.rotation.z=n};b(51.84,-23.04,-.16),b(48,24,.11),y(new W(22,1,9),v,11.52,6.2,21.2);for(let e of[-9,9])y(new t(.4,.4,6,6),Bs.dark,11.52+e,3,25);let x=new U(new l(34,8.5),new V({map:fc([o,`${s} · ${c} m`],`#fbfaf5`,`#23303a`)}));return x.position.set(-17.28,13.6,10.299999999999999),d.add(x),d.userData.footprint={x:n,z:r,yaw:f,hw:60*u,hd:25.5*u,top:m+20*u},d}function mc(e,n,r,i,a){let o=new G,s=e.heightAt(n.x,n.z);o.position.set(n.x,s,n.z),o.rotation.y=Math.atan2(r.x,r.z);let c=H({color:a},{rim:1});for(let e of[-9,9]){let n=new U(new t(.6,.75,6.5,8).translate(0,3.25,0),c);n.position.x=e,n.castShadow=!0,o.add(n)}let u=new U(new W(20,2.6,.9),c);u.position.y=7.2,u.castShadow=!0;let d=fc(i,`#fbfaf5`,`#23303a`),f=new U(new l(14,3.5),new V({map:d}));f.position.set(0,7.2,.5);let p=f.clone();return p.rotation.y=Math.PI,p.position.z=-.5,o.add(u,f,p),o.userData.footprint={x:n.x,z:n.z,yaw:o.rotation.y,hw:9.75,hd:.75},o}var hc=`./models/onsen/`,gc=7.2,_c=6,vc=.66,yc=3,bc={x:-.04,y:.48,from:.1,lip:.488},xc={x:3.3,z:.12},Sc=.15,Cc={x:.6,shore:3.5,stone:3.3,water:2.45},wc={deep:`#86cbbf`,pale:`#b3e3d8`,foam:`#f3faf6`},Tc=new L(.22,0,.12);function Ec(t,{x:n,z:r,faceTo:i}){let o=new G;o.name=`Onsen`;let s=Math.atan2(i[0]-n,i[1]-r);o.rotation.y=s;let c=(e,i,a)=>{let o=1/0,c=Math.cos(s),l=Math.sin(s);for(let s=-a;s<=a;s+=a/4)for(let u=-a;u<=a;u+=a/4){if(s*s+u*u>a*a*1.05)continue;let d=e+s,f=i+u;o=Math.min(o,t.heightAt(n+d*c+f*l,r-d*l+f*c))}return o},l=c(0,0,gc/2)-.05;o.position.set(n,l,r),o.updateMatrixWorld(!0);let u=(e,t)=>new L(e,0,t).applyMatrix4(o.matrixWorld),d=(e,t)=>new L(e,0,t).transformDirection(o.matrixWorld),f=(e,t,n,r,i)=>{let a=u(e,t);return{kind:`onsen`,x:a.x,z:a.z,yaw:s,hw:n,hd:r,top:l+i}},p=[f(0,0,gc*.48,gc*.48,1.7),f(xc.x+.6,xc.z,.86,1.16,yc*.95)],m={uTime:{value:0},uFall:{value:new e},uDrift:{value:new e},uSoak:{value:new L},uDeep:{value:new a(wc.deep)},uPale:{value:new a(wc.pale)},uFoam:{value:new a(wc.foam)}},h=d(0,1).multiplyScalar(.18);m.uDrift.value.set(h.x,h.z);let g=Vc(o);o.add(g);let _=null,v=Rc,y={group:o,footprints:p,waterY:l+vc,seat:{x:0,z:0,dx:1,dz:0},exit:null,way:null,fall:null,floorAt:()=>null,near(e,t){return Math.hypot(e-n,t-r)<5.4},puff(e){_=e,v=0,g.visible=!0},update(e,t,n){m.uTime.value=t;let r=1-Math.exp(-e*2),i=m.uSoak.value;n?i.set(n.x,n.z,i.z+(1-i.z)*r):i.z-=i.z*r,g.visible&&=(v<zc&&o.worldToLocal(g.material.uniforms.uOrigin.value.copy(_).add(Bc)),v+=e,g.material.uniforms.uAge.value=v,v<Rc)},ready:null},b=u(0,4.9),x=d(0,1);return y.exit={x:b.x,z:b.z,dx:x.x,dz:x.z},Dc(y,u(-1.6,0),d(1,0)),y.ready=Promise.all([`stone-arena`,`cave-rock`].map(e=>new lt().loadAsync(`${hc}${e}.glb`))).then(([n,r])=>{let i=Oc(n,[gc,_c,gc]);o.add(kc(i));let a=c(xc.x+.6,xc.z,1.2)-.08-l,s=new nt().compose(new L(xc.x,a,xc.z),new We().setFromAxisAngle(new L(0,1,0),-Math.PI/2),new L(yc,yc,yc));o.add(kc(Oc(r,[1,1,1]).applyMatrix4(s)));let f=Ac(i,gc/2,.05),p=Mc(f),h=new L;y.floorAt=(e,t)=>{o.worldToLocal(h.set(e,0,t));let n=f.at(h.x,h.z);return n<0?null:l+n};let g=(e,t)=>u(Cc.x,e).setY(t),_=u(Cc.x,Cc.shore),v=d(0,-1);y.way={shore:_.setY(t.heightAt(_.x,_.z)),stone:g(Cc.stone,l+f.at(Cc.x,Cc.stone)),water:g(Cc.water,l+f.at(Cc.x,Cc.water)),dx:v.x,dz:v.z};let b=new U(Nc(p),Fc(m));b.position.y=vc,b.receiveShadow=!0,o.add(b);let x=p.radius(Math.PI);Dc(y,u(p.center.x-x+.55,p.center.y),d(1,0));let S=e=>new L(bc.x,bc.y+.012,e).applyMatrix4(s),C=S(bc.from),w=S(bc.lip),T=w.clone().sub(C).setY(0).normalize(),E=[C,C.clone().lerp(w,.5),w],D=w.y-.51,O=Math.sqrt(2*D/9.81);for(let e=1;e<=6;e++){let t=e/6*O;E.push(w.clone().addScaledVector(T,1.1*t).add(new L(0,-4.905*t*t,0)))}let k=E[E.length-1],A=k.clone().applyMatrix4(o.matrixWorld);m.uFall.value.set(A.x,A.z),y.fall=A;let ee=new U(new le(new St(E,!1,`centripetal`),48,.1,8,!1),Ic(m));ee.castShadow=!0,o.add(ee);let j=Lc(p,new e(k.x,k.z),m,o);o.add(j)}),y}function Dc(e,t,n){e.seat={x:t.x,z:t.z,dx:n.x,dz:n.z}}function Oc(e,t){let n=null;e.scene.updateMatrixWorld(!0),e.scene.traverse(e=>{e.isMesh&&!n&&(n=e)});let r=n.geometry.clone().applyMatrix4(n.matrixWorld);r.computeBoundingBox();let i=r.boundingBox;return r.translate(-(i.min.x+i.max.x)/2,-i.min.y,-(i.min.z+i.max.z)/2).scale(...t),r.userData.map=n.material.map,r.userData.side=n.material.side,r}function kc(e){let t=new U(e,H({map:e.userData.map,side:e.userData.side}));return t.castShadow=!0,t.receiveShadow=!0,t}function Ac(e,t,n){let r=Math.ceil(2*t/n),i=new Float32Array(r*r).fill(-1),a=e.attributes.position,o=e.index,s=o?o.count:a.count,c=new L,l=new L,u=new L,d=e=>Math.floor((e+t)/n),f=(e,t,n)=>{if(e<0||t<0||e>=r||t>=r)return;let a=t*r+e;n>i[a]&&(i[a]=n)};for(let e=0;e<s;e+=3){c.fromBufferAttribute(a,o?o.getX(e):e),l.fromBufferAttribute(a,o?o.getX(e+1):e+1),u.fromBufferAttribute(a,o?o.getX(e+2):e+2);for(let e of[c,l,u])f(d(e.x),d(e.z),e.y);let i=(l.z-u.z)*(c.x-u.x)+(u.x-l.x)*(c.z-u.z);if(Math.abs(i)<1e-9)continue;let s=Math.max(0,d(Math.min(c.x,l.x,u.x))),p=Math.min(r-1,d(Math.max(c.x,l.x,u.x))),m=Math.max(0,d(Math.min(c.z,l.z,u.z))),h=Math.min(r-1,d(Math.max(c.z,l.z,u.z)));for(let e=m;e<=h;e++)for(let r=s;r<=p;r++){let a=(r+.5)*n-t,o=(e+.5)*n-t,s=((l.z-u.z)*(a-u.x)+(u.x-l.x)*(o-u.z))/i,d=((u.z-c.z)*(a-u.x)+(c.x-u.x)*(o-u.z))/i,p=1-s-d;s<-1e-4||d<-1e-4||p<-1e-4||f(r,e,s*c.y+d*l.y+p*u.y)}}return{at(e,t){let n=d(e),a=d(t);return n<0||a<0||n>=r||a>=r?-1:i[a*r+n]}}}var jc=96;function Mc(t){let n=(e,n)=>t.at(e,n)>.67,r=0,i=0,a=0;for(let e=-7.2*.4;e<=gc*.4;e+=.1)for(let t=-7.2*.4;t<=gc*.4;t+=.1)Math.hypot(e,t)<gc*.4&&!n(e,t)&&(r+=e,i+=t,a++);let o=new e(r/a,i/a),s=gc*.38,c=[];for(let e=0;e<jc;e++){let t=e/jc*Math.PI*2,r=Math.cos(t),i=Math.sin(t),a=.3;for(;a<s&&!n(o.x+r*a,o.y+i*a);)a+=.03;c.push(a)}let l=(e,t)=>e[(t+jc)%jc],u=c.map((e,t)=>[-2,-1,0,1,2].map(e=>l(c,t+e)).sort((e,t)=>e-t)[2]),d=u.map((e,t)=>(l(u,t-1)+2*u[t]+l(u,t+1))/4);return{center:o,r:d,radius(e){let t=I.euclideanModulo(e,Math.PI*2)/(Math.PI*2)*jc,n=Math.floor(t);return I.lerp(l(d,n),l(d,n+1),t-n)}}}function Nc(e){let t=[0,0,0],n=[e.r.reduce((e,t)=>e+t,0)/jc],r=[];t[0]=e.center.x,t[2]=e.center.y;for(let r=1;r<=14;r++){let i=1-(1-r/14)**1.6;for(let r=0;r<jc;r++){let a=r/jc*Math.PI*2,o=e.r[r]+Sc;t.push(e.center.x+Math.cos(a)*o*i,0,e.center.y+Math.sin(a)*o*i),n.push((1-i)*o-Sc)}}let i=(e,t)=>e===0?0:1+(e-1)*jc+t%jc;for(let e=0;e<jc;e++)r.push(0,i(1,e+1),i(1,e));for(let e=1;e<14;e++)for(let t=0;t<jc;t++){let n=i(e,t),a=i(e,t+1),o=i(e+1,t),s=i(e+1,t+1);r.push(n,a,o,a,s,o)}let a=new z;return a.setAttribute(`position`,new F(t,3)),a.setAttribute(`normal`,new F(t.map((e,t)=>+(t%3==1)),3)),a.setAttribute(`shore`,new F(n,1)),a.setIndex(r),a.computeBoundingSphere(),a}var Pc=`
float oHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float oNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(oHash(i), oHash(i + vec2(1, 0)), u.x), mix(oHash(i + vec2(0, 1)), oHash(i + vec2(1, 1)), u.x), u.y);
}
`;function Fc(e){let t=H({color:`#ffffff`},{hatch:0}),n=t.onBeforeCompile;return t.onBeforeCompile=(t,r)=>{n(t,r),Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute float shore;
varying float vShore;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vShore = shore;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
        varying float vShore;
        uniform float uTime;
        uniform vec2 uFall, uDrift;
        uniform vec3 uSoak, uDeep, uPale, uFoam;
        ${Pc}`).replace(`#include <color_fragment>`,`#include <color_fragment>
        {
          vec2 p = vTWorld.xz;
          vec2 d = p - uFall;
          float r = length(d);
          vec2 flow = d / max(r, 0.6) * 0.45 + uDrift;
          float ph = uTime * 0.16;
          float t0 = fract(ph), t1 = fract(ph + 0.5);
          vec2 q0 = (p - flow * t0 * 2.5) * 1.1, q1 = (p - flow * t1 * 2.5) * 1.1 + 17.3;
          float n0 = oNoise(q0 + oNoise(q0 * 0.5) * 1.6), n1 = oNoise(q1 + oNoise(q1 * 0.5) * 1.6);
          float n = mix(n0, n1, abs(1.0 - 2.0 * t0));
          vec3 col = mix(uDeep, uPale, smoothstep(0.6, 0.63, n));
          float foam = smoothstep(0.8, 0.83, n) * (1.0 - smoothstep(0.6, 2.4, r));
          // Rings from the landing, and round a soaking rider.
          float ring = smoothstep(0.82, 0.88, fract(r * 1.5 - uTime * 0.8)) * (1.0 - smoothstep(0.3, 2.0, r));
          float rs = length(p - uSoak.xy);
          float ring2 = smoothstep(0.84, 0.9, fract(rs * 2.2 - uTime * 0.45)) * (1.0 - smoothstep(0.25, 1.1, rs)) * step(0.32, rs) * uSoak.z;
          col = mix(col, uPale, max(ring, ring2));
          // White water where the stream lands, and foam along the shore.
          float wob = oNoise(p * 4.0 + uTime * 1.7) - 0.5;
          float splash = 1.0 - smoothstep(0.22, 0.3, r + wob * 0.18);
          float shoreF = 1.0 - smoothstep(0.05, 0.09, vShore + (oNoise(p * 2.6 + uTime * 0.25) - 0.5) * 0.12);
          col = mix(col, uFoam, max(max(foam, splash), shoreF));
          diffuseColor.rgb = col;
        }`)},t.customProgramCacheKey=()=>`onsen-water`,t}function Ic(e){return new A({uniforms:{...de.clone(q.fog),uTime:e.uTime,uPale:e.uPale,uFoam:e.uFoam,uLitTint:be.uLitTint,uShadowTint:be.uShadowTint},fog:!0,vertexShader:`
      #include <fog_pars_vertex>
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <fog_pars_fragment>
      uniform float uTime;
      uniform vec3 uPale, uFoam, uLitTint, uShadowTint;
      varying vec2 vUv;
      ${Pc}
      void main() {
        float n = oNoise(vec2(vUv.x * 14.0 - uTime * 5.0, vUv.y * 6.0));
        vec3 col = mix(uPale, uFoam, smoothstep(0.55, 0.6, n));
        // White where it pours off the lip and churns into the pool.
        col = mix(col, uFoam, smoothstep(0.85, 0.95, vUv.x));
        gl_FragColor = vec4(col * mix(uShadowTint, uLitTint, 0.8), 1.0);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`})}function Lc(e,t,n,r){let i=[],a=Uc(20261020),o=t=>{let n=a()*Math.PI*2,r=Math.sqrt(a())*e.radius(n)*t;return[e.center.x+Math.cos(n)*r,vc,e.center.y+Math.sin(n)*r]};for(let e=0;e<28;e++)i.push([o(.85),5+a()*3,1.2+a()*.8,1+a()*.8,.32]);for(let e=0;e<10;e++)i.push([[t.x+(a()-.5)*.5,vc,t.y+(a()-.5)*.5],3+a()*2,1.6+a(),.8+a()*.6,.4]);for(let e=0;e<12;e++){let e=o(.4);e[1]+=2.5+a()*2,i.push([e,12+a()*6,12+a()*4,3+a()*2.5,.26])}let s=[[-1,-1],[1,-1],[1,1],[-1,1]],c=[],l=[],u=[],d=[],f=[];i.forEach(([e,t,n,r,i],o)=>{let p=a();for(let o of s)c.push(...e),l.push(...o),u.push(p,t,n,r),d.push(i,a()*10);let m=o*4;f.push(m,m+1,m+2,m,m+2,m+3)});let p=new z;p.setAttribute(`position`,new F(c,3)),p.setAttribute(`corner`,new F(l,2)),p.setAttribute(`seed`,new F(u,4)),p.setAttribute(`shape`,new F(d,2)),p.setIndex(f),p.boundingSphere=new O(new L(0,9,0),18);let m=Tc.clone().applyQuaternion(r.quaternion.clone().invert()),h=new A({uniforms:{...de.clone(q.fog),uTime:n.uTime,uWind:{value:m},uShadowTint:be.uShadowTint},fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      #include <fog_pars_vertex>
      attribute vec2 corner;
      attribute vec4 seed; // phase, life (s), rise (m), size (m)
      attribute vec2 shape; // opacity, a random offset for the blob's outline
      uniform float uTime;
      uniform vec3 uWind;
      varying vec2 vCorner;
      varying float vAlpha, vKey, vLife;
      void main() {
        float life = fract(uTime / seed.y + seed.x);
        vec3 c = position;
        c.y += seed.z * (1.0 - (1.0 - life) * (1.0 - life)); // quick off the water, slowing as it goes
        c += uWind * life * seed.y;
        c.x += sin(uTime * 0.7 + shape.y) * 0.15 * life;
        float size = seed.w * (0.35 + 0.65 * sqrt(life));
        vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
        mvPosition.xy += corner * size * 0.5;
        gl_Position = projectionMatrix * mvPosition;
        vCorner = corner;
        // Puffs thin out close to the camera, so steam never whites out the view from the water.
        vAlpha = shape.x * smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.45, 1.0, life)) * smoothstep(1.5, 5.0, -mvPosition.z);
        vKey = shape.y;
        vLife = life;
        #include <fog_vertex>
      }`,fragmentShader:Hc}),g=new U(p,h);return g.name=`Steam`,g.renderOrder=2,g}var Rc=1.5,zc=.5,Bc=new L(0,.55,0);function Vc(e){let t=Uc(20261021),n=[[-1,-1],[1,-1],[1,1],[-1,1]],r=[],i=[],a=[],o=[],s=[];for(let e=0;e<26;e++){let c=t()*Math.PI*2,l=.2+t()*.45,u=[Math.cos(c)*l,-.35+t()*1.4,Math.sin(c)*l],d=[e<18?0:t()*.25,.8+t()*.4,.4+t()*.6,1.3+t()*.8],f=t()*10;for(let e of n)r.push(...u),i.push(...e),a.push(...d),o.push(f);let p=e*4;s.push(p,p+1,p+2,p,p+2,p+3)}let c=new z;c.setAttribute(`position`,new F(r,3)),c.setAttribute(`corner`,new F(i,2)),c.setAttribute(`seed`,new F(a,4)),c.setAttribute(`key`,new F(o,1)),c.setIndex(s);let l=Tc.clone().applyQuaternion(e.quaternion.clone().invert()),u=new A({uniforms:{...de.clone(q.fog),uAge:{value:Rc},uOrigin:{value:new L},uWind:{value:l},uShadowTint:be.uShadowTint},fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      #include <fog_pars_vertex>
      attribute vec2 corner;
      attribute vec4 seed; // delay (s), life (s), rise (m), size (m)
      attribute float key; // a random offset for the blob's outline
      uniform float uAge;
      uniform vec3 uOrigin, uWind;
      varying vec2 vCorner;
      varying float vAlpha, vKey, vLife;
      void main() {
        float t = uAge - seed.x;
        float life = clamp(t / seed.y, 0.0, 1.0);
        vec3 c = uOrigin + position * (1.0 + 0.5 * life); // spreading as it goes
        c.y += seed.z * (1.0 - (1.0 - life) * (1.0 - life));
        c += uWind * max(t, 0.0);
        float size = seed.w * (0.6 + 0.4 * sqrt(life));
        vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
        mvPosition.xy += corner * size * 0.5;
        gl_Position = projectionMatrix * mvPosition;
        vCorner = corner;
        // Full almost at once, so it hides the change, and thinning soon after;
        // thinner still near the camera, so it doesn't white out the view from the water.
        vAlpha = step(0.0, t) * smoothstep(0.0, 0.06, life) * (1.0 - smoothstep(0.35, 1.0, life)) * smoothstep(1.0, 2.4, -mvPosition.z);
        vKey = key;
        vLife = life;
        #include <fog_vertex>
      }`,fragmentShader:Hc}),d=new U(c,u);return d.name=`Puff`,d.renderOrder=2,d.frustumCulled=!1,d.visible=!1,d}var Hc=`
  #include <fog_pars_fragment>
  uniform vec3 uShadowTint;
  varying vec2 vCorner;
  varying float vAlpha, vKey, vLife;
  ${Pc}
  void main() {
    float d = length(vCorner) + (oNoise(vCorner * 2.2 + vKey) - 0.5) * 0.45;
    float body = 1.0 - smoothstep(0.62, 0.68, d);
    if (body * vAlpha < 0.01) discard;
    float core = 1.0 - smoothstep(0.32, 0.38, d + vCorner.y * 0.25);
    vec3 col = mix(mix(vec3(1.0), uShadowTint, 0.35), vec3(1.0), core);
    col = mix(col * mix(uShadowTint, vec3(1.0), 0.7), col, smoothstep(0.0, 0.4, vLife));
    gl_FragColor = vec4(col, body * vAlpha * (0.75 + 0.25 * core));
    #include <colorspace_fragment>
    #include <fog_fragment>
  }`;function Uc(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Wc=`./models/truck/pickup.glb`,Gc=5.6,Kc=class{constructor(){this.root=new G,this.root.name=`Truck`,this.body=new G,this.root.add(this.body),this.wheels=[],this.dims=null,this.footprint={kind:`pickup`,x:0,z:0,yaw:0,hw:0,hd:0},this.marks=[],this.exits=[],this.ready=new lt().loadAsync(Wc).then(e=>this.#e(e)),this.lean={pitch:0,roll:0,vp:0,vr:0}}#e(e){let t=null;e.scene.updateMatrixWorld(!0),e.scene.traverse(e=>{e.isMesh&&!t&&(t=e)});let n=t.geometry.clone().applyMatrix4(t.matrixWorld);n.computeBoundingBox();let r=n.boundingBox,i=Gc/(r.max.z-r.min.z);n.translate(-(r.min.x+r.max.x)/2,-r.min.y,-(r.min.z+r.max.z)/2).scale(i,i,i),n.computeBoundingBox();let a=n.boundingBox.getSize(new L),o=H({map:t.material.map,side:t.material.side},{rim:1}),s=Yc(n),c=(e,t,n)=>{let r=new U(t,o);return n&&r.position.copy(n).negate(),r.castShadow=!0,r.receiveShadow=!0,e.add(r),r};c(this.body,s.body);for(let e of s.wheels){let t=new G;t.position.copy(e.centre);let n=new G;t.add(n),c(n,e.spin,e.centre),e.fixed&&c(t,e.fixed,e.centre),this.root.add(t),this.wheels.push({steer:t,spin:n,front:e.centre.z>0})}let l=s.wheels.filter(e=>e.centre.z>0),u=s.wheels.filter(e=>e.centre.z<=0),d=(e,t)=>e.reduce((e,n)=>e+n.centre[t],0)/Math.max(1,e.length),f=s.wheels.length?d(s.wheels,`y`):.45;this.dims={length:a.z,height:a.y,halfWidth:s.bodyHalfWidth,halfLength:a.z/2,wheelbase:s.wheels.length===4?d(l,`z`)-d(u,`z`):a.z*.62,axleZ:s.wheels.length===4?(d(l,`z`)+d(u,`z`))/2:0,track:s.wheels.length===4?Math.abs(l[0].centre.x-l[1].centre.x):s.bodyHalfWidth*1.6,wheelRadius:f},this.body.position.z=this.dims.axleZ?-this.dims.axleZ:0;for(let e of this.wheels)e.steer.position.z-=this.dims.axleZ;this.footprint.hw=this.dims.halfWidth,this.footprint.hd=this.dims.halfLength;let p=this.dims;return this.marks=[-1,1].map(e=>({along:-p.wheelbase/2,left:e*p.track/2,width:.4})),this.exits=[[.4,p.halfWidth+.9],[.4,-p.halfWidth-.9],[-p.halfLength-1.2,0],[p.halfLength+1.2,0]].map(([e,t])=>({along:e,left:t})),this}update(e,t){this.root.position.copy(t.pos),this.root.quaternion.copy(t.quat);let n=this.lean;qc(n,e,I.clamp(-t.accel*.006,-.06,.06),I.clamp(t.lateral*.008,-.07,.07)),this.body.rotation.set(n.pitch,0,n.roll);for(let e of this.wheels)e.front&&(e.steer.rotation.y=t.steer),e.spin.rotation.x=t.roll;this.footprint.x=t.pos.x,this.footprint.z=t.pos.z,this.footprint.yaw=t.yaw,this.footprint.top=t.pos.y+this.dims.height}};function qc(e,t,n,r){e.vp+=((n-e.pitch)*90-e.vp*12)*t,e.vr+=((r-e.roll)*90-e.vr*12)*t,e.pitch+=e.vp*t,e.roll+=e.vr*t}function Jc(e,t,n){if(!n.length)return null;let r=new z;for(let[t,n]of Object.entries(e.attributes))r.setAttribute(t,n);let i=new Uint32Array(n.length*3);return n.forEach((e,n)=>i.set([t[e],t[e+1],t[e+2]],n*3)),r.setIndex(new qe(i,1)),r}function Yc(e){let t=e.attributes.position,n=e.index?e.index.array:Array.from({length:t.count},(e,t)=>t),r=t.count,i=new Int32Array(r),a=new Map;for(let e=0;e<r;e++){let n=`${t.getX(e).toFixed(4)},${t.getY(e).toFixed(4)},${t.getZ(e).toFixed(4)}`,r=a.get(n);i[e]=r??e,r===void 0&&a.set(n,e)}let o=Int32Array.from({length:r},(e,t)=>t),s=e=>{for(;o[e]!==e;)e=o[e]=o[o[e]];return e};for(let e=0;e<n.length;e+=3){let t=s(i[n[e]]);for(let r of[n[e+1],n[e+2]]){let e=s(i[r]);t!==e&&(o[e]=t)}}let c=new Map;for(let e=0;e<n.length;e+=3){let r=s(i[n[e]]),a=c.get(r);a||c.set(r,a={tris:[],box:new je}),a.tris.push(e);for(let r=0;r<3;r++)a.box.expandByPoint(new L().fromBufferAttribute(t,n[e+r]))}let l=[...c.values()],u=new L,d=new L,f=l.filter(e=>(e.box.getSize(u),e.box.min.y<u.y*.1&&Math.abs(u.y-u.z)<u.y*.15&&u.x<u.y*.8&&u.y>.3)).sort((e,t)=>t.tris.length-e.tris.length).slice(0,4),p=l.reduce((e,t)=>t.tris.length>e.tris.length?t:e),m=Math.max(-p.box.min.x,p.box.max.x);if(f.length!==4)return console.warn(`Truck: found ${f.length} tyres, not 4; the wheels won't turn.`),{body:e,wheels:[],bodyHalfWidth:m};let h=f.map(e=>({c:e,centre:e.box.getCenter(new L),r:e.box.getSize(u).y/2,spin:[],fixed:[]})),g=[];for(let e of l){e.box.getCenter(d);let t=h.find(t=>t.c===e||Math.sign(d.x)===Math.sign(t.centre.x)&&Math.abs(d.x)>Math.abs(t.centre.x)-t.r*.8&&e.box.min.y>t.centre.y-t.r-.01&&e.box.max.y<t.centre.y+t.r+.01&&e.box.min.z>t.centre.z-t.r-.01&&e.box.max.z<t.centre.z+t.r+.01);t?t.c===e||Math.hypot(d.y-t.centre.y,d.z-t.centre.z)<t.r*.15?t.spin.push(...e.tris):t.fixed.push(...e.tris):g.push(...e.tris)}let _=t=>Jc(e,n,t);return{body:_(g),wheels:h.map(e=>({centre:e.centre,spin:_(e.spin),fixed:_(e.fixed)})),bodyHalfWidth:m}}var Xc=`./models/snowmobile/snowmobile.glb`,Zc=2.6,Qc={seat:[-.06,.281],grips:[.135,.375,.155],boards:[.02,.107,.135],skis:[.275,.17],track:[-.195,.102]},$c=class{constructor(){this.root=new G,this.root.name=`Snowmobile`,this.body=new G,this.root.add(this.body),this.saddle=new o,this.saddle.rotation.y=Math.PI,this.body.add(this.saddle),this.skis=[],this.seat=null,this.dims=null,this.footprint={kind:`snowmobile`,x:0,z:0,yaw:0,hw:0,hd:0},this.marks=[],this.exits=[],this.lean={pitch:0,roll:0,vp:0,vr:0},this.ready=new lt().loadAsync(Xc).then(e=>this.#e(e))}#e(e){let t=null;e.scene.updateMatrixWorld(!0),e.scene.traverse(e=>{e.isMesh&&!t&&(t=e)});let n=t.geometry.clone().applyMatrix4(t.matrixWorld);n.computeBoundingBox();let r=n.boundingBox,i=Zc/(r.max.x-r.min.x);n.translate(-(r.min.x+r.max.x)/2,-r.min.y,-(r.min.z+r.max.z)/2).rotateY(-Math.PI/2).scale(i,i,i),n.computeBoundingBox();let a=n.boundingBox.getSize(new L),o=(e,t,n)=>new L(-n*i,t*i,e*i),s=Qc.skis[0]*i,c=Qc.track[0]*i,l=this.dims={length:a.z,height:a.y,halfWidth:a.x/2,halfLength:a.z/2,wheelbase:s-c,axleZ:(s+c)/2,track:2*Qc.skis[1]*i,wheelRadius:.2},u=H({map:t.material.map,side:t.material.side},{rim:1}),d=el(n,i),f=(e,t,n)=>{let r=new U(t,u);return n&&r.position.copy(n).negate(),r.castShadow=!0,r.receiveShadow=!0,e.add(r),r};f(this.body,d.body),this.body.position.z=-l.axleZ,d.skis.forEach((e,t)=>{if(!e)return;let n=o(Qc.skis[0],0,t?Qc.skis[1]:-Qc.skis[1]),r=new G;r.position.copy(n),r.position.z-=l.axleZ,f(r,e,n),this.root.add(r),this.skis.push(r)});let p=([e,t,n])=>[o(e,t,-n),o(e,t,n)];this.seat={hips:o(Qc.seat[0],Qc.seat[1],0),feet:p(Qc.boards),grips:p(Qc.grips)},this.footprint.hw=l.halfWidth,this.footprint.hd=l.halfLength,this.marks=[{along:-l.wheelbase/2,left:0,width:2*Qc.track[1]*i},...[-1,1].map(e=>({along:l.wheelbase/2,left:e*l.track/2,width:.12}))];let m=Qc.seat[0]*i-l.axleZ;return this.exits=[[m,l.halfWidth+.7],[m,-l.halfWidth-.7],[-l.halfLength-1,0],[l.halfLength+1,0]].map(([e,t])=>({along:e,left:t})),this}update(e,t){this.root.position.copy(t.pos),this.root.quaternion.copy(t.quat),qc(this.lean,e,I.clamp(-t.accel*.008,-.07,.07),I.clamp(t.lateral*.005,-.05,.05)),this.body.rotation.set(this.lean.pitch,0,this.lean.roll);for(let e of this.skis)e.rotation.y=t.steer;this.footprint.x=t.pos.x,this.footprint.z=t.pos.z,this.footprint.yaw=t.yaw,this.footprint.top=t.pos.y+this.dims.height}};function el(e,t){let n=e.attributes.position,r=e.index?e.index.array:Array.from({length:n.count},(e,t)=>t),i=e=>n.getZ(e)>.17*t&&n.getY(e)<.12*t&&Math.abs(n.getX(e))>.105*t,a=[],o=[[],[]];for(let e=0;e<r.length;e+=3)i(r[e])&&i(r[e+1])&&i(r[e+2])?o[n.getX(r[e])>0?0:1].push(e):a.push(e);return{body:Jc(e,r,a),skis:o.map(t=>Jc(e,r,t))}}var tl=9.81,nl=40,rl={engine:6.5,topSpeed:30,reverse:3.5,reverseSpeed:7,brake:9,maxSpeed:40,grip:.55,steer:.6,drag:[.03,.08],air:.0016},il={engine:16,topSpeed:66,reverse:2,reverseSpeed:4,brake:6,maxSpeed:200/3.6,grip:.7,steer:.5,drag:[.025,.04],air:6e-4},al=new L,ol=new L,sl=new L,cl=new nt,ll=new L,ul=new L,dl=(e,t)=>Math.sign(e)*Math.max(0,Math.abs(e)-t),fl=class{constructor({hf:e,piste:t,forest:n,obstacles:r=[],lakes:i=[],dims:a,handling:o=rl}){this.hf=e,this.piste=t,this.forest=n,this.obstacles=r,this.lakes=i,this.dims=a,this.h=o,this.pos=new L,this.prev=new L,this.vel=new L,this.normal=new L(0,1,0),this.quat=new We,this.yaw=0,this.yawRate=0,this.steer=0,this.roll=0,this.accel=0,this.lateral=0,this.slip=0,this.events=[]}reset(e,t,n){this.pos.set(e,0,t),this.vel.set(0,0,0),this.yaw=n,this.yawRate=this.steer=this.accel=this.lateral=this.slip=0,this.#e(1)}get speed(){return this.vel.length()}forward(e=new L){return e.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}left(e=new L){return e.set(-Math.cos(this.yaw),0,Math.sin(this.yaw))}step(e,t){let{dims:n,h:r}=this;this.prev.copy(this.pos);let i=this.forward(al),a=this.left(ol),o=this.normal,s=this.vel.dot(i),c=this.vel.dot(a),l=s,u=tl*o.y*o.dot(i),d=tl*o.y*o.dot(a),f=r.grip*tl*o.y,p=this.piste.distAt(this.pos.x,this.pos.z)<19,m=0,h=0,{throttle:g,reverse:_,handbrake:v}=t;g&&!_?s<-.3?h=r.brake:m=r.engine*Math.max(0,1-s/r.topSpeed):_&&!g?s>.3?h=r.brake:m=-r.reverse*Math.max(0,1+s/r.reverseSpeed):h=g&&_||Math.abs(s)<1.5?r.brake:.6,v&&(h=Math.max(h,4)),m=I.clamp(m,-f,f),h=Math.min(h,f);let y=r.drag[+!p]*tl*o.y+r.air*s*s;s+=(u+m)*e,s=dl(s,(h+y)*e);let b=Math.abs(s),x=t.steer*r.steer/(1+b*b/180);this.steer+=(x-this.steer)*(1-Math.exp(-e*8));let S=f*(v?2.2:1.25)/Math.max(b,2),C=s*Math.tan(this.steer)/n.wheelbase;v&&(C*=1.5),this.yawRate=I.clamp(C,-S,S),this.yaw+=this.yawRate*e,c=dl(c+d*e,f*(v?.35:1.2)*e),this.slip=Math.abs(c),this.vel.copy(i).multiplyScalar(s).addScaledVector(a,c),this.vel.length()>r.maxSpeed&&this.vel.setLength(r.maxSpeed),this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e,this.#t(),this.#e(e);let w=this.vel.dot(i);this.accel+=((w-l)/e-this.accel)*(1-Math.exp(-e*10)),this.lateral+=(w*this.yawRate-this.lateral)*(1-Math.exp(-e*10)),this.roll+=w*e/n.wheelRadius}#e(e){let{hf:t,dims:n,pos:r}=this,i=this.forward(al),a=this.left(ol),o=n.wheelbase/2,s=n.track/2,c=(e,n)=>t.heightAt(r.x+i.x*o*e+a.x*s*n,r.z+i.z*o*e+a.z*s*n),l=c(1,1),u=c(1,-1),d=c(-1,1),f=c(-1,-1);r.y=(l+u+d+f)/4;let p=(l+u-d-f)/(2*n.wheelbase),m=(l+d-u-f)/(2*n.track);sl.set(0,1,0).addScaledVector(i,-p).addScaledVector(a,-m).normalize(),this.normal.lerp(sl,1-Math.exp(-e*25)).normalize(),ul.copy(i).addScaledVector(this.normal,-i.dot(this.normal)).normalize(),ll.crossVectors(this.normal,ul),this.quat.setFromRotationMatrix(cl.makeBasis(ll,this.normal,ul))}#t(){let{hf:e,pos:t,vel:n,prev:r,dims:i}=this,a=e.half-nl-i.halfLength;for(let[r,i]of[[`x`,e.center[0]],[`z`,e.center[1]]]){let e=t[r]-i;Math.abs(e)<=a||(t[r]=i+Math.sign(e)*a,n[r]*e>0&&(n[r]=0))}let o=this.forward(al),s=this.left(ol),c=i.wheelbase/2,l=i.track/2;for(let[i,a]of[[1,1],[1,-1],[-1,1],[-1,-1]])if(e.holeAt(t.x+o.x*c*i+s.x*l*a,t.z+o.z*c*i+s.z*l*a)){t.copy(r),n.set(0,0,0);break}let u=i.halfWidth,d=i.halfLength-u;for(let e of[-1,0,1]){let n=()=>t.x+o.x*d*e,r=()=>t.z+o.z*d*e;for(let e of this.obstacles){let t=Math.cos(e.yaw),i=Math.sin(e.yaw),a=n()-e.x,o=r()-e.z,s=a*t-o*i,c=a*i+o*t,l=e.hw+u-Math.abs(s),d=e.hd+u-Math.abs(c);if(l<=0||d<=0)continue;let[f,p,m]=l<d?[t*Math.sign(s),-i*Math.sign(s),l]:[i*Math.sign(c),t*Math.sign(c),d];this.#n(f,p,m,`wall`)}for(let e=0;e<3;e++){let e=this.forest.hit(n(),r(),u);if(!e)break;let t=n()-e.x,i=r()-e.z,a=Math.hypot(t,i)||1;t/=a,i/=a,this.#n(t,i,u+e.r-a+.01,`tree`)}let i=rs(this.lakes,n(),r(),u+1);i&&i.d<u&&this.#n(i.nx,i.nz,u-i.d,`wall`)}}#n(e,t,n,r){this.pos.x+=e*n,this.pos.z+=t*n;let i=this.vel.x*e+this.vel.z*t;i>=0||(this.vel.x-=e*i*1.25,this.vel.z-=t*i*1.25,this.vel.multiplyScalar(.85),i<-5&&this.events.push({type:`crash`,reason:r,speed:-i}))}},pl=`./models/jetson/jetson-one.glb`,ml=3.1,hl=[`17`,`18`,`8`,`26`,`new_0`,`new_0_0_0`,`new_0_1_0`,`new_0_2`].map(e=>`tripo_part_${e}`),gl=[`tripo_part_new_0_3`,`tripo_part_new_0_0`],_l={pads:[.141,-.157,.12],seat:[-.085,.172],feet:[.14,.15,.055],sticks:[.052,.18,.312,.05]},vl=.3,yl=class{constructor(){this.root=new G,this.root.name=`Jetson`,this.body=new G,this.root.add(this.body),this.saddle=new o,this.saddle.rotation.y=Math.PI,this.body.add(this.saddle),this.rotors=[],this.sticks=[],this.seat=null,this.dims=null,this.footprint={kind:`jetson`,x:0,z:0,yaw:0,hw:0,hd:0},this.marks=[],this.exits=[],this.t=0,this.hover=0,this.ready=new lt().loadAsync(pl).then(e=>this.#e(e))}#e(e){e.scene.updateMatrixWorld(!0);let t=new Map,n=null;e.scene.traverse(e=>{e.isMesh&&(t.set(e.name,e.geometry.clone().applyMatrix4(e.matrixWorld)),n||=e.material)});for(let e of[...hl,...gl])if(!t.has(e))throw Error(`jetson-one.glb has no ${e}`);let r=new je;for(let e of t.values())e.computeBoundingBox(),r.union(e.boundingBox);let i=ml/(r.max.x-r.min.x),a=(_l.pads[0]+_l.pads[1])/2,o=(e,t,n)=>new L(-n*i,t*i,(e-a)*i),s=e=>e.translate(-a,0,0).rotateY(-Math.PI/2).scale(i,i,i);for(let e of t.values())s(e);let c=H({map:n.map,side:n.side},{rim:1}),l=e=>{let t=new U(e,c);return t.castShadow=!0,t.receiveShadow=!0,t},u=(e,t)=>{let n=new G;return n.position.copy(t),n.add(l(e.translate(-t.x,-t.y,-t.z))),this.body.add(n),n};this.body.add(l(it([...t].filter(([e])=>!hl.includes(e)&&!gl.includes(e)).map(([,e])=>e))));let d=xl();for(let e of hl){let n=t.get(e),{tips:r,y:i}=bl(n),a=new L((r[0].x+r[1].x)/2,i,(r[0].z+r[1].z)/2),o=r[0].distanceTo(r[1])/2,s={pivot:u(n,a),hub:a,radius:o,dir:1},c=new Ce(o*1.02,40).rotateX(-Math.PI/2);c.deleteAttribute(`normal`),s.disc=new U(c,new V({map:d,transparent:!0,opacity:0,depthWrite:!1,side:2})),s.disc.position.copy(a),s.disc.renderOrder=1,this.body.add(s.disc),this.rotors.push(s)}for(let e of this.rotors){let t=this.rotors.find(t=>t!==e&&Math.hypot(t.hub.x-e.hub.x,t.hub.z-e.hub.z)<e.radius);e.dir=(!t||e.hub.y>t.hub.y?1:-1)*Math.sign(e.hub.x*e.hub.z||1)}let f=_l.sticks;this.sticks=gl.map((e,n)=>u(t.get(e),o(f[0],f[1],n?f[3]:-f[3]))),this.handles=this.sticks.map(()=>new L(0,(f[2]-f[1])*i,0));let p=_l.pads,m=this.dims={length:(r.max.x-r.min.x)*i,height:r.max.y*i,halfWidth:(r.max.z-r.min.z)*i/2,halfLength:(r.max.x-r.min.x)*i/2,wheelbase:(p[0]-p[1])*i,track:2*p[2]*i},h=([e,t,n])=>[o(e,t,-n),o(e,t,n)];this.seat={hips:o(_l.seat[0],_l.seat[1],0),feet:h(_l.feet),grips:this.sticks.map((e,t)=>this.handles[t].clone().add(e.position)),kneeOut:.05},this.footprint.hw=m.halfWidth,this.footprint.hd=m.halfLength;let g=this.rotors.reduce((e,t)=>e+t.hub.z,0)/this.rotors.length;return this.exits=[[g,m.halfWidth+.6],[g,-m.halfWidth-.6],[-m.halfLength-1,0],[m.halfLength+1,0]].map(([e,t])=>({along:e,left:t})),this}update(e,t){this.t+=e,this.root.position.copy(t.pos),this.root.quaternion.copy(t.quat),this.hover+=(+!t.landed-this.hover)*(1-Math.exp(-e*3)),this.body.position.y=Math.sin(this.t*1.7)*.03*this.hover,this.body.rotation.z=Math.sin(this.t*1.1+1)*.006*this.hover;let n=t.spool*(24+8*t.load),r=I.smoothstep(t.spool,.25,.9)*(.2+.08*t.load);for(let t of this.rotors)t.pivot.rotation.y+=n*t.dir*e,t.disc.material.opacity=r,t.disc.visible=r>.005;let i=t.stick;this.sticks[0].rotation.set(i.lift*vl,0,0),this.sticks[1].rotation.set(i.pitch*vl,0,-i.turn*vl),this.sticks.forEach((e,t)=>this.seat.grips[t].copy(this.handles[t]).applyEuler(e.rotation).add(e.position)),this.footprint.x=t.pos.x,this.footprint.z=t.pos.z,this.footprint.yaw=t.yaw}};function bl(e){let t=e.attributes.position,n=new L,r=e.boundingBox.getCenter(new L),i=e=>{let r=null,i=-1;for(let a=0;a<t.count;a++){n.fromBufferAttribute(t,a);let o=Math.hypot(n.x-e.x,n.z-e.z);o>i&&(i=o,r=n.clone())}return r},a=i(r),o=i(a);return{tips:[a,o],y:(a.y+o.y)/2}}function xl(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,7.68,64,64,64);n.addColorStop(0,`rgba(40,44,50,0)`),n.addColorStop(.25,`rgba(40,44,50,0.35)`),n.addColorStop(.8,`rgba(40,44,50,0.8)`),n.addColorStop(.95,`rgba(40,44,50,1)`),n.addColorStop(1,`rgba(40,44,50,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new ve(e);return r.colorSpace=ae,r}var Sl=40,Cl={topSpeed:50,backSpeed:12,tilt:.5,push:12,turnPush:16,yawRate:2,climb:15,sink:10,lift:[12,10],clearance:1.2,ceiling:3300,spool:.8,drag:[.04,.0035]},wl=20,Tl=12,El=new L,Dl=new L,Ol=new L,kl=new nt,Al=new L,jl=new L,Ml=new We,Nl=new Tt(0,0,0,`YXZ`),Pl=new L,Fl=new L,Il=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-r*n)),Ll=I.clamp,Rl=class{constructor({hf:e,forest:t,obstacles:n=[],dims:r,handling:i=Cl}){this.hf=e,this.forest=t,this.obstacles=n,this.dims=r,this.h=i,this.pos=new L,this.prev=new L,this.vel=new L,this.normal=new L(0,1,0),this.quat=new We,this.yaw=0,this.yawRate=0,this.pitch=0,this.bank=0,this.steer=0,this.accel=0,this.lateral=0,this.spool=0,this.load=0,this.stick={pitch:0,turn:0,lift:0},this.landed=!0,this.agl=0,this.events=[]}reset(e,t,n){this.pos.set(e,0,t),this.vel.set(0,0,0),this.yaw=n,this.yawRate=this.pitch=this.bank=this.steer=this.accel=this.lateral=0,this.landed=!0,this.#n(1),this.quat.copy(Ml)}get speed(){return Math.hypot(this.vel.x,this.vel.z)}get canExit(){return this.landed||this.agl<this.h.clearance+.4&&this.speed<2}forward(e=new L){return e.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}left(e=new L){return e.set(-Math.cos(this.yaw),0,Math.sin(this.yaw))}step(e,t){let n=this.h;this.prev.copy(this.pos),this.spool=Math.min(1,this.spool+e/n.spool);let r=t.throttle&&!t.reverse?1:t.reverse&&!t.throttle?-1:0,i=t.climb&&!t.sink?1:t.sink&&!t.climb?-1:0;if(this.stick.pitch=Il(this.stick.pitch,r,12,e),this.stick.turn=Il(this.stick.turn,t.steer,12,e),this.stick.lift=Il(this.stick.lift,i,12,e),this.steer=this.stick.turn,this.landed){this.vel.set(0,0,0),this.yawRate=this.accel=this.lateral=0,this.pitch=Il(this.pitch,0,6,e),this.bank=Il(this.bank,0,6,e),this.load=Il(this.load,0,4,e),this.#n(e),this.quat.slerp(Ml,1-Math.exp(-e*10)),i>0&&this.spool>.85&&(this.landed=!1,this.vel.y=1,this.events.push({type:`takeoff`}));return}let a=this.forward(El),o=this.left(Dl),s=this.vel.x*a.x+this.vel.z*a.z,c=this.vel.x*o.x+this.vel.z*o.z,l=s,u=Math.hypot(s,c),d=t.steer*n.yawRate/(1+u/10);this.yawRate=Il(this.yawRate,d,6,e),this.yaw+=this.yawRate*e;let f=Ll(((r>0?n.topSpeed+4:r<0?s>.5?-n.topSpeed:-n.backSpeed:0)-s)*.12,-n.tilt,n.tilt),p=Ll(-c*.15,-n.tilt,n.tilt);this.pitch=Il(this.pitch,f,6,e),this.bank=Il(this.bank,p,6,e);let m=n.drag[0]+n.drag[1]*u,h=Math.tan(n.tilt);s+=(n.push*Math.tan(this.pitch)/h-m*s)*e,c+=(n.turnPush*Math.tan(this.bank)/h-m*c)*e;let g=this.#t();this.agl=this.pos.y-g;let{x:_,z:v}=this.pos,{x:y,z:b}=this.vel,x=e=>this.hf.heightAt(_+y*e,v+b*e),S=this.pos.y-Math.max(g,x(1),x(2),x(3)),C=n.clearance+u*.3,w=i*(i>0?n.climb:n.sink);i>=0&&S<C?w=Math.max(w,Math.min(30,(C-S)*2)):i<0&&(w=Math.max(w,-Math.max(1,this.agl*1.5)));let[T,E]=n.lift;this.vel.y+=Ll(w-this.vel.y,-E*e,(w>n.climb?T*1.6:T)*e),this.vel.x=a.x*s+o.x*c,this.vel.z=a.z*s+o.z*c;let D=Math.hypot(this.vel.x,this.vel.z)/n.topSpeed;D>1&&(this.vel.x/=D,this.vel.z/=D),this.pos.addScaledVector(this.vel,e),this.pos.y>n.ceiling&&(this.pos.y=n.ceiling,this.vel.y=Math.min(0,this.vel.y)),this.#r(),this.#e(i);let O=this.vel.dot(a);this.accel=Il(this.accel,(O-l)/e,10,e),this.lateral=Il(this.lateral,O*this.yawRate,10,e),this.load=Il(this.load,Ll(Math.abs(r)*.5+Math.max(0,i)*.7+Math.abs(t.steer)*.2,0,1),4,e),Nl.set(this.pitch,this.yaw+Math.PI,-this.bank),this.quat.slerp(Ml.setFromEuler(Nl),1-Math.exp(-e*20))}#e(e){let{pos:t,vel:n}=this,r=this.#t();if(this.agl=t.y-r,this.agl>0)return;t.y=r;let i=-n.y,a=this.speed;i>4||a>9?(this.events.push({type:`crash`,reason:`ground`,speed:Math.max(i,a)}),n.y=Math.max(1.5,i*.3),n.x*=.6,n.z*=.6):e<0&&a<4?(this.landed=!0,n.set(0,0,0),this.events.push({type:`landed`})):n.y=Math.max(n.y,0)}#t(){let{hf:e,dims:t,pos:n}=this,r=this.forward(Pl),i=this.left(Fl),a=t.wheelbase/2,o=t.track/2,s=-1/0;for(let[t,c]of[[1,1],[1,-1],[-1,1],[-1,-1]])s=Math.max(s,e.heightAt(n.x+r.x*a*t+i.x*o*c,n.z+r.z*a*t+i.z*o*c));return s}#n(e){let{hf:t,dims:n,pos:r}=this,i=this.forward(Pl),a=this.left(Fl),o=n.wheelbase/2,s=n.track/2,c=(e,n)=>t.heightAt(r.x+i.x*o*e+a.x*s*n,r.z+i.z*o*e+a.z*s*n),l=c(1,1),u=c(1,-1),d=c(-1,1),f=c(-1,-1);r.y=(l+u+d+f)/4,this.agl=0;let p=(l+u-d-f)/(2*n.wheelbase),m=(l+d-u-f)/(2*n.track);Ol.set(0,1,0).addScaledVector(i,-p).addScaledVector(a,-m).normalize(),this.normal.lerp(Ol,1-Math.exp(-e*25)).normalize(),jl.copy(i).addScaledVector(this.normal,-i.dot(this.normal)).normalize(),Al.crossVectors(this.normal,jl),Ml.setFromRotationMatrix(kl.makeBasis(Al,this.normal,jl))}#r(){let{hf:e,pos:t,vel:n,prev:r,dims:i}=this,a=e.half-Sl-i.halfLength;for(let[r,i]of[[`x`,e.center[0]],[`z`,e.center[1]]]){let e=t[r]-i;Math.abs(e)<=a||(t[r]=i+Math.sign(e)*a,n[r]*e>0&&(n[r]=0))}e.holeAt(t.x,t.z)&&(t.copy(r),n.set(0,0,0));let o=i.halfWidth,s=e.heightAt(t.x,t.z);for(let e of this.obstacles){if(t.y>(e.top??s+wl))continue;let n=Math.cos(e.yaw),r=Math.sin(e.yaw),i=t.x-e.x,a=t.z-e.z,c=i*n-a*r,l=i*r+a*n,u=e.hw+o-Math.abs(c),d=e.hd+o-Math.abs(l);if(u<=0||d<=0)continue;let[f,p,m]=u<d?[n*Math.sign(c),-r*Math.sign(c),u]:[r*Math.sign(l),n*Math.sign(l),d];this.#i(f,p,m,`wall`)}if(t.y-s<Tl*1.4)for(let e=0;e<3;e++){let e=this.forest.hit(t.x,t.z,o);if(!e||t.y>(e.top??s+Tl))break;let n=t.x-e.x,r=t.z-e.z,i=Math.hypot(n,r)||1;n/=i,r/=i,this.#i(n,r,o+e.r-i+.01,`tree`)}}#i(e,t,n,r){this.pos.x+=e*n,this.pos.z+=t*n;let i=this.vel.x*e+this.vel.z*t;i>=0||(this.vel.x-=e*i*1.3,this.vel.z-=t*i*1.3,this.vel.multiplyScalar(.8),i<-4&&this.events.push({type:`crash`,reason:r,speed:-i}))}land(){this.landed=!0,this.vel.set(0,0,0),this.#n(1),this.quat.copy(Ml)}coast(e){this.spool=Math.max(0,this.spool-e/(this.h.spool*2)),this.load=Il(this.load,0,4,e),this.stick.pitch=Il(this.stick.pitch,0,8,e),this.stick.turn=Il(this.stick.turn,0,8,e),this.stick.lift=Il(this.stick.lift,0,8,e)}},zl=3.4,Bl=1.36,Vl={seat:[.12,.2],locks:[-.2,.05],feet:[-.36,.14],thwarts:[1.02,-1.18]},Hl={inboard:.6,outboard:1.62,grip:.52},Ul=1.35,Wl=.25,Gl=-.08,Kl={paint:`#f2ede2`,stripe:`#c9473d`,wood:`#b98b5a`,thwart:`#a2754a`,oar:`#dcb683`,iron:`#3a4148`};function ql(e){return{half:Bl/2*(e<.45?.72+.28*Math.sin(e/.45*Math.PI/2):Math.max(0,1-((e-.45)/.55)**2)**.75),keel:-.17+.2*Math.max(0,(e-.62)/.38)**2+.05*Math.max(0,(.2-e)/.2)**2,sheer:.36+.16*Math.max(0,(e-.45)/.55)**2+.05*Math.max(0,(.3-e)/.3)**2}}function Jl(e,t,n=0){let{half:r,keel:i,sheer:a}=ql(e),o=Math.abs(t)*Math.PI/2,s=Math.sign(t)*Math.max(0,r-n)*Math.sin(o)**.8,c=i+n+(a-i-n)*(1-Math.cos(o));return new L(s,c,(e-.5)*zl)}var Yl=e=>e/zl+.5;function Xl(e,t,n=0){let r=Yl(e),i=0;for(;i<1&&Jl(r,i,n).y<t;)i+=.01;return Jl(r,Math.min(1,i),n).x}var Zl=class{constructor(){this.root=new G,this.root.name=`Rowboat`,this.body=new G,this.root.add(this.body),this.saddle=new o,this.body.add(this.saddle),this.oars=[],this.seat=null,this.dims={length:zl,beam:Bl,halfLength:zl/2,halfWidth:Bl/2,height:.7},this.footprint={kind:`rowboat`,x:0,z:0,yaw:0,hw:Bl/2,hd:zl/2},this.marks=[],this.exits=[[-1,0],[1,0],[0,1],[0,-1]].flatMap(([e,t])=>[.9,1.8].map(n=>({along:e*(zl/2+n),left:t*(Bl/2+n)}))),this.t=0,this.#e(),this.ready=Promise.resolve(this)}#e(){let e=H({color:`#ffffff`,vertexColors:!0},{rim:1}),n=H({color:Kl.wood},{rim:1}),r=H({color:Kl.thwart},{rim:1}),o=H({color:Kl.oar},{rim:1}),s=H({color:Kl.iron}),c=(e,t,n=this.body)=>{let r=new U(e,t);return r.castShadow=!0,r.receiveShadow=!0,n.add(r),r},l=.035,u=tu(20,8,0,-1),d=tu(20,8,l,1),f=new a(Kl.stripe),p=new a(Kl.paint),m=u.attributes.position,h=new Float32Array(m.count*3);for(let e=0;e<m.count;e++)(ql(Yl(m.getZ(e))).sheer-m.getY(e)<.09?f:p).toArray(h,e*3);u.setAttribute(`color`,new qe(h,3)),c(u,e),c(d,n),c(nu(20,l),r),c(ru(8,l),H({color:Kl.paint},{rim:1}));let g=ql(.5).keel+.09;c(new W(.5,.025,2).translate(0,g,-.2),r);let[_,v]=Vl.seat;for(let[e,t,n]of[[_,v,.24],[Vl.thwarts[0],v+.03,.2],[Vl.thwarts[1],v+.02,.34]]){let i=2*Xl(e,t,l)-.01;c(new W(i,.04,n).translate(0,t-.02,e),r)}let[y,b]=Vl.locks,x=Yl(y),S=ql(x).sheer,C=ql(x).half-l/2,w=new t(.012,.012,.09,6).translate(0,.045,0),T=new i(.04,.008,5,10,Math.PI).rotateY(Math.PI/2).translate(0,.07,0);for(let e of[1,-1]){let n=new L(e*C,S+b,y),i=c(w,s);i.position.set(n.x,S,n.z),c(T,s,i);let a=new G;a.position.copy(n),this.body.add(a);let l=new G;l.rotation.y=e>0?0:Math.PI,a.add(l);let u=Hl.inboard+Hl.outboard;c(new t(.022,.022,u,7).rotateZ(Math.PI/2).translate((Hl.outboard-Hl.inboard)/2,0,0),o,l),c(new t(.03,.03,.16,7).rotateZ(Math.PI/2).translate(-Hl.inboard+.08,0,0),o,l),c(new t(.032,.032,.14,7).rotateZ(Math.PI/2).translate(.02,0,0),r,l);let d=new G;d.position.x=Ul,l.add(d),c(new W(.52,.016,.15),o,d),c(new W(.14,.018,.152).translate(.2,0,0),H({color:Kl.stripe},{rim:1}),d),this.oars.push({pivot:a,blade:d,side:e})}let E=(e,t,n)=>new L(-e,t,-n),[D,O]=Vl.feet;this.seat={hips:E(0,v,_),feet:[E(-O,g+.015,D),E(O,g+.015,D)],grips:[new L,new L],kneeOut:.3},this.oars.forEach(e=>this.#t(e,{angle:0,dip:.3,feather:1}))}update(e,t){this.t+=e,this.root.position.copy(t.pos),this.root.rotation.set(0,t.yaw+Math.PI,0),this.body.rotation.set(-t.pitch.x,Math.sin(this.t*.6)*.012,t.roll.x),this.oars.forEach((e,n)=>this.#t(e,t.oars[n])),this.footprint.x=t.pos.x,this.footprint.z=t.pos.z,this.footprint.yaw=t.yaw,this.footprint.top=t.pos.y+this.dims.height}#t(e,{angle:t,dip:n,feather:r}){let i=e.pivot.position.y-I.lerp(Wl,Gl,n),a=Math.asin(I.clamp(i/Ul,-1,1));e.pivot.rotation.set(0,-e.side*t,-e.side*a,`YZX`),e.blade.rotation.x=(1-r)*Math.PI/2;let o=this.seat.grips[+(e.side>0)];o.set(-e.side*Hl.grip,0,0).applyEuler(e.pivot.rotation).add(e.pivot.position),o.set(-o.x,o.y,-o.z)}bladeAt(e,t=new L){let n=this.oars[e];return n.pivot.updateWorldMatrix(!0,!1),n.pivot.localToWorld(t.set(n.side*Ul,0,0))}waterline(t){this.body.updateWorldMatrix(!0,!1);let n=this.body.matrixWorld,r=Ql.inset,i=(e,t,i)=>i.copy(Jl(e,t,r)).applyMatrix4(n),a=e=>i(e,0,$l).y<t,o=(n,r)=>{let a=i(n,0,$l);for(let o=1;o<=Ql.around;o++){let s=i(n,r*o/Ql.around,eu);if(s.y>=t){let n=(t-a.y)/(s.y-a.y);return new e(a.x+(s.x-a.x)*n,a.z+(s.z-a.z)*n)}a.copy(s)}return new e(a.x,a.z)},s=(t,n)=>{for(let e=0;e<12;e++){let e=(t+n)/2;a(e)?t=e:n=e}let r=i(t,0,$l);return new e(r.x,r.z)},c=Ql.stations,l=Array.from({length:c+1},(e,t)=>t?t/c:r/zl),u=l.map(a),d=u.indexOf(!0),f=u.lastIndexOf(!0);if(d<0)return[];let p=[],m=[];for(let e=d;e<=f;e++)p.push(o(l[e],1)),m.push(o(l[e],-1));let h=[...p];return f<c&&h.push(s(l[f],l[f+1])),h.push(...m.reverse()),d>0&&h.push(s(l[d],l[d-1])),h}},Ql={stations:24,around:16,inset:.015},$l=new L,eu=new L;function tu(e,t,n,r){let i=[];for(let r=0;r<=e;r++)for(let a=-t;a<=t;a++)i.push(Jl(r/e,a/t,n));let a=2*t+1,o=[];for(let n=0;n<e;n++)for(let e=0;e<2*t;e++){let t=n*a+e,s=t+a,c=s+1,l=t+1;su(i,o,[t,s,c],r),su(i,o,[t,c,l],r)}return cu(i,o)}function nu(e,t){let n=[],r=[];for(let i of[1,-1])for(let a=0;a<=e;a++){let o=n.length;if(n.push(Jl(a/e,i,0),Jl(a/e,i,t)),a===0)continue;let s=o-2,c=o-1,l=o+1,u=o;su(n,r,[s,c,l],0,[0,1,0]),su(n,r,[s,l,u],0,[0,1,0])}return cu(n,r)}function ru(e,t){let n=[],r=[];for(let[i,a]of[[0,-1],[t,1]]){let t=n.length,o=Jl(0,0,0);n.push(new L(0,(o.y+ql(0).sheer)/2,-3.4/2+i));for(let t=-e;t<=e;t++)n.push(Jl(0,t/e,0).setZ(-3.4/2+i));for(let i=0;i<2*e;i++)su(n,r,[t,t+1+i,t+2+i],0,[0,0,a]);su(n,r,[t,t+2*e+1,t+1],0,[0,0,a])}return cu(n,r)}var iu=new L,au=new L,ou=new L;function su(e,t,[n,r,i],a,o=null){let s=iu.subVectors(e[r],e[n]).cross(au.subVectors(e[i],e[n])),c;o?c=ou.fromArray(o):(c=ou.copy(e[n]).add(e[r]).add(e[i]).divideScalar(3),c.set(c.x,c.y-.25,0).multiplyScalar(-a)),t.push(...s.dot(c)>=0?[n,r,i]:[n,i,r])}function cu(e,t){let n=new z().setFromPoints(e);return n.setIndex(t),n.computeVertexNormals(),n}var lu={stroke:2.4,drive:.42,pull:.8,back:.65,turn:1.1,catch:.7,finish:.38,drag:[.05,.06],slip:[1.1,.8],spin:[1,.6],hold:1.4,breeze:.008,steer:1},uu={angle:.05,dip:.35,feather:1},du={angle:-1.25,dip:.55,feather:1},fu=new e(.92,.38).normalize(),pu=new L,mu=new L,hu=I.clamp,gu=(e,t,n)=>I.smoothstep(n,e,t),_u=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-r*n));function vu(e,t,n,r,i){e.v+=(-n*n*(e.x-t)-2*r*n*e.v)*i,e.x+=e.v*i}var yu=class{constructor({lake:e,dims:t,handling:n=lu}){this.lake=e,this.lakes=[e],this.dims=t,this.h=n,this.obstacles=[],this.pos=new L,this.vel=new L,this.yaw=0,this.yawRate=0,this.steer=0,this.accel=0,this.lateral=0,this.slip=0,this.t=0,this.crewed=!1,this.phase=1,this.rest=1,this.holding=0,this.efforts=[0,0],this.drives=[0,0],this.from=[0,0],this.sweeps=[0,0],this.oars=[{...du},{...du}],this.heave={x:0,v:0},this.pitch={x:0,v:0},this.roll={x:0,v:0},this.shore=1/0,this.events=[]}reset(e,t,n){this.pos.set(e,this.lake.level,t),this.vel.set(0,0,0),this.yaw=n,this.yawRate=this.steer=this.accel=this.lateral=this.slip=0,this.#t(0,0,0)}get speed(){return this.vel.length()}forward(e=new L){return e.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}left(e=new L){return e.set(-Math.cos(this.yaw),0,Math.sin(this.yaw))}get canExit(){return this.shore<1.2}nudge(e){this.roll.v+=e*.18,this.heave.v-=.2}step(e,t){this.crewed=!0;let[n,r]=this.#e(e,t);this.#t(e,n+r,(r-n)*this.h.turn)}coast(e){this.crewed=!1,this.#e(e,null),this.#t(e,0,0)}#e(e,t){let n=this.h,r=n.drive,i=[0,0],a=!1,o=!1;if(t){let e=t.throttle===t.reverse?0:t.throttle?1:-1;i=[hu(e-t.steer,-1,1),hu(e+t.steer,-1,1)],a=Math.abs(i[0])>.05||Math.abs(i[1])>.05,o=t.handbrake&&!a}for(let t=0;t<2;t++)this.efforts[t]=_u(this.efforts[t],i[t],5,e);this.steer=_u(this.steer,(i[1]-i[0])/2,6,e),a&&this.rest>.95&&(this.phase=.8,this.from=[...this.sweeps],this.drives=[0,0]),this.rest=_u(this.rest,+!a,a?6:2.5,e),this.holding=_u(this.holding,+!!o,5,e);let s=this.phase;this.rest<.98&&(this.phase+=e/n.stroke),this.phase>=1&&(--this.phase,this.drives=[...this.efforts],this.rest<.5&&this.events.push({type:`catch`,oars:this.drives.map(e=>Math.abs(e)>.1)})),s<r&&this.phase>=r&&(this.from=[...this.sweeps],this.rest<.5&&this.events.push({type:`release`,oars:this.drives.map(e=>Math.abs(e)>.1)}));let c=[0,0],l=this.crewed?uu:du;for(let e=0;e<2;e++){let t,i;if(this.phase<r){let a=this.phase/r,o=Math.sign(this.drives[e]),s=o*Math.max(0,this.efforts[e]*o);t=-s*Math.cos(Math.PI*a),i=Math.abs(this.drives[e])>.05?gu(0,.1,a)*(1-gu(.9,1,a)):0,c[e]=s*(s<0?n.back:1)*n.pull*Math.sin(Math.PI*a)*i*(1-this.rest)}else{let n=(this.phase-r)/(1-r);t=I.lerp(this.from[e],-this.efforts[e],gu(0,1,n)),i=0}this.sweeps[e]=t;let a=this.oars[e],o=t<0?-t*n.catch:-t*n.finish;a.angle=I.lerp(I.lerp(o,l.angle,this.rest),0,this.holding),a.dip=I.lerp(I.lerp(i,l.dip,this.rest),1,this.holding),a.feather=I.lerp(I.lerp(1-i,l.feather,this.rest),0,this.holding)}return c}#t(e,t,n){let r=this.h;this.t+=e;let i=this.forward(pu),a=this.left(mu),o=this.vel.dot(i),s=this.vel.dot(a),c=o;o+=t*e,this.crewed&&(o+=(fu.x*i.x+fu.y*i.z)*r.breeze*e,s+=(fu.x*a.x+fu.y*a.z)*r.breeze*e);let l=this.holding*r.hold;o-=(r.drag[0]*o+r.drag[1]*o*Math.abs(o)+l*o)*e,s-=(r.slip[0]*s+r.slip[1]*s*Math.abs(s)+l*s)*e,this.slip=Math.abs(s);let u=this.yawRate+n*e;u-=(r.spin[0]*u+r.spin[1]*u*Math.abs(u)+l*u)*e,this.yawRate=u,this.yaw+=u*e,this.vel.copy(i).multiplyScalar(o).addScaledVector(a,s),this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e,this.#n();let{length:d,beam:f}=this.dims,p=this.forward(pu),m=this.left(mu),{x:h,z:g}=this.pos,_=this.t,v=(e,t)=>qo(h+p.x*e+m.x*t,g+p.z*e+m.z*t,_),y=v(d*.38,0),b=v(-d*.38,0),x=v(0,f*.45),S=v(0,-f*.45),C=(this.sweeps[0]+this.sweeps[1])/2*(1-this.rest);if(e>0){vu(this.heave,(y+b+x+S)/4-(this.crewed?.035:0),4.2,.3,e),vu(this.pitch,(y-b)/(d*.76)-C*.014+this.accel*.004,3.4,.18,e),vu(this.roll,(x-S)/(f*.9)+this.lateral*.01,2.9,.14,e);let t=this.vel.dot(i);this.accel=_u(this.accel,(t-c)/e,10,e),this.lateral=_u(this.lateral,t*this.yawRate,10,e)}this.pos.y=this.lake.level+this.heave.x}#n(){let{length:e,beam:t}=this.dims,n=this.forward(pu),r=this.left(mu),i=(e*e+t*t)/12,a=1/0;for(let[o,s]of bu){let c=o*e/2,l=s*t/2,u=n.x*c+r.x*l,d=n.z*c+r.z*l,f=rs(this.lakes,this.pos.x+u,this.pos.z+d,6);if(!f)continue;a=Math.min(a,-f.d);let p=f.d+.1;if(p<=0)continue;let{nx:m,nz:h}=f;this.pos.x-=m*p,this.pos.z-=h*p;let g=(this.vel.x+this.yawRate*d)*m+(this.vel.z-this.yawRate*u)*h;if(g<=0)continue;let _=d*m-u*h,v=-1.15*g/(1+_*_/i);this.vel.x+=v*m,this.vel.z+=v*h,this.yawRate+=v*_/i,g>1.2&&this.events.push({type:`crash`,reason:`ground`,speed:g})}this.shore=a}},bu=[[.98,0],[.55,.62],[.55,-.62],[0,1],[0,-1],[-.6,.9],[-.6,-.9],[-1,.62],[-1,-.62]],xu=Ts.treeline,Su=`云霄峰道`;async function Cu({original:e=!1}={}){let[t,n]=await Promise.all([Ea({edits:!e}),Cs()]),{meta:r}=t,i=new Oa(r.runs,t.detail.size,4,60,t.detail.center),a=Qa(t.detail,r.runs,i,$a(r.lifts)),o=ao(a,r.lifts),s=$o(a,r.lakes);return{...t,piste:i,ground:a,lakes:s,summitFrame:o,treeModels:n}}function wu(e,t){let n=t;for(let t=0;t<e.length-1;t++){let r=e[t],i=e[t+1],a=Math.hypot(i[0]-r[0],i[1]-r[1]);if(n<=a){let e=n/a;return{x:r[0]+(i[0]-r[0])*e,z:r[1]+(i[1]-r[1])*e,dx:(i[0]-r[0])/a,dz:(i[1]-r[1])/a}}n-=a}let r=e[e.length-2],i=e[e.length-1],a=Math.hypot(i[0]-r[0],i[1]-r[1]);return{x:i[0],z:i[1],dx:(i[0]-r[0])/a,dz:(i[1]-r[1])/a}}function Tu(e,t){let n=(e,t,n)=>{let r=Math.cos(e.yaw),i=Math.sin(e.yaw);return e.hw*Math.abs(r*t-i*n)+e.hd*Math.abs(i*t+r*n)};return[e.yaw,t.yaw].every(r=>{let i=Math.cos(r),a=Math.sin(r);return[[i,-a],[a,i]].every(([r,i])=>Math.abs((t.x-e.x)*r+(t.z-e.z)*i)<n(e,r,i)+n(t,r,i))})}function Eu(e,{terrain:t={},forest:n={},toy:r=null,labels:i=!1}={}){let{ground:a,piste:o,meta:s,lakes:c,edits:l,treeModels:u}=e,d=new G,f=Wa(a,o,xu,t),p=ka.map(e=>pc(a,e,{scale:r?.lodge})),m=ac(a,s.lifts,r?{scale:r.lift,stationScale:r.station,spacing:r.carSpacing,speed:r.liftSpeed}:{}),h=[...m.footprints,...p.map(e=>e.userData.footprint)],g=e=>!r||!e.some(e=>h.some(t=>Tu(e,t))),_=Ec(a,Aa),v=g(_.footprints),y=Vo(a,{labels:i,keep:e=>g([e])}),b=wu(s.runs.find(e=>e.name===Su).points,26),x=mc(a,new L(b.x,0,b.z),new L(-b.dx,0,-b.dz),[`云霄峰道 · START`,`Yunxiaofeng · Gondola No.6`],`#f0c24a`),S=[...v?_.footprints:[],...y.footprints],C=Is(a,o,s.lifts,l?.trees),w=Rs(a,r?Ls(C,a,o,s.lifts,{scale:r.tree,cell:r.treeCell,per:r.treePer,keepOff:[...h,...S]}):C,{models:u,...n}),T=os(c),E=dc(a,s.runs);d.add(f,...p,w.group,m.group,y.group,T.group,E),v&&d.add(_.group),g([x.userData.footprint])&&d.add(x);let D=[...h,...S],O=e=>{let{x:t,z:n,yaw:r}=za(`vehicle:${e}`);return{x:t,z:n,dx:Math.sin(r),dz:Math.cos(r)}},k=c.find(e=>e.name===`云湖`)??c[0]??null;return{group:d,terrain:f,lodges:p,lifts:m,forest:w,onsen:_,summit:y,banner:x,water:T,markers:E,vehicles:[{name:`pickup`,Model:Kc,handling:rl,park:O(`pickup`)},{name:`snowmobile`,Model:$c,handling:il,park:O(`snowmobile`)},{name:`jetson`,Model:yl,handling:Cl,flies:!0,park:O(`jetson`)},...k?[{name:`rowboat`,Model:Zl,handling:lu,floats:!0,lake:k,park:is(k,s.runs)}]:[]].filter(e=>g([{x:e.park.x,z:e.park.z,yaw:0,hw:1,hd:1}])).map(({Model:e,...t})=>({...t,model:new e})),obstacles:D,parkVehicle:e=>{let t=new(e.flies?Rl:e.floats?yu:fl)({hf:e.flies?ts(a,c):a,piste:o,forest:w,lakes:c,lake:e.lake,dims:e.model.dims,handling:e.handling,obstacles:[...D]});return t.reset(e.park.x,e.park.z,Math.atan2(-e.park.dx,-e.park.dz)),e.model.update(0,t),t},fits:g}}var Du={zenith:new a(`#6dbbb8`),horizon:new a(`#bfe2da`),cloudLight:new a(`#e8f5ef`),cloudDark:new a(`#58a7a8`)};function Ou(){let e=new A({side:1,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:Du.zenith.clone()},uHorizon:{value:Du.horizon.clone()},uCloudLight:{value:Du.cloudLight.clone()},uCloudDark:{value:Du.cloudDark.clone()},uTime:{value:0},uFloat:{value:0},uSunDir:{value:new L(.62,.55,.56).normalize()},uSunColor:{value:new a(`#fffbea`)},uSun:{value:0},uGlow:{value:Du.horizon.clone()},uGlowAmount:{value:0},uCover:{value:0},uMoonDir:{value:new L(0,1,0)},uNight:{value:0},uAurora:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,fragmentShader:`
      uniform vec3 uZenith, uHorizon, uCloudLight, uCloudDark;
      uniform float uTime;
      uniform float uFloat;
      uniform vec3 uSunDir, uSunColor, uGlow, uMoonDir;
      uniform float uSun, uGlowAmount, uCover, uNight, uAurora;
      varying vec3 vDir;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
      }
      float fbm(vec2 p) {
        float s = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
        return s;
      }
      // A flat disc with a crisp edge, as the toon tones are.
      float disc(vec3 d, vec3 c, float r) {
        float a = acos(clamp(dot(d, c), -1.0, 1.0));
        return 1.0 - smoothstep(r - 0.0015, r + 0.0015, a);
      }
      // The aurora: curtains hung east to west across the northern sky, three
      // of them one behind the next. Each is a folded sheet; a ray meets it
      // where it crosses the sheet's line, and how high it crosses says where
      // in the curtain it is: a crisp bright hem along its wavering foot, and
      // above it soft rays fading out, green to violet. Returns how much of the
      // green and of the violet shows.
      vec2 aurora(vec3 d) {
        vec2 a = vec2(0.0);
        if (d.z > -0.02) return a;
        for (int i = 0; i < 3; i++) {
          float fi = float(i);
          float z0 = 0.9 + fi * 0.8; // how far north, in units of the curtains' height
          float t = z0 / -d.z;
          float x = t * d.x;
          // Fold the sheet back and forth, slowly, and cross again where it's moved to.
          float fold = (fbm(vec2(x * 0.3 + fi * 7.3, uTime * 0.015 + fi)) - 0.5) * 2.2;
          t = (z0 + fold) / -d.z;
          x = t * d.x;
          float foot = 0.42 + (fbm(vec2(x * 0.45 + fi * 2.1, uTime * 0.02)) - 0.5) * 0.6;
          float v = t * d.y - foot; // above the curtain's foot, in its heights
          if (v < 0.0 || v > 1.2) continue;
          float rays = noise(vec2(x * 24.0 + fi * 13.0, uTime * 0.2)) * 0.6 + noise(vec2(x * 6.0 - fi * 5.0, uTime * 0.1)) * 0.4;
          rays = smoothstep(0.25, 0.85, rays);
          float hem = smoothstep(0.0, 0.012, v) * (1.0 - smoothstep(0.1, 0.16, v));
          float above = smoothstep(0.0, 0.012, v) * exp(-v / 0.35) * mix(0.3, 1.0, rays);
          // Brighter in stretches along it, gone in others and toward east and west.
          float strength = smoothstep(0.3, 0.55, fbm(vec2(x * 0.2 - uTime * 0.02, fi * 3.7)));
          strength *= (1.0 - smoothstep(2.0, 4.5, abs(x) / z0)) * (1.0 - fi * 0.3);
          float g = clamp(hem * 0.9 + above * 1.1, 0.0, 1.0) * strength;
          float top = smoothstep(0.12, 0.5, v);
          a.x = max(a.x, g * (1.0 - top));
          a.y = max(a.y, g * top * 0.9);
        }
        return a;
      }
      void main() {
        vec3 d = normalize(vDir);
        d.y = mix(d.y, abs(d.y), uFloat);
        float h = max(d.y, 0.0);
        vec3 col = mix(uHorizon, uZenith, pow(h, 0.55));
        col = mix(col, uZenith, uFloat * 0.35);

        // The horizon warms toward the sun: strongest just above it, and round
        // the sky from the sun's side, fading out up toward the zenith.
        vec3 sd = normalize(uSunDir);
        vec2 az = normalize(d.xz + 1e-5), saz = normalize(sd.xz + 1e-5);
        float toward = dot(az, saz) * 0.5 + 0.5;
        float low = 1.0 - smoothstep(0.0, 0.5, h);
        float glow = pow(toward, 2.5) * low * low + pow(max(dot(d, sd), 0.0), 24.0) * 0.6;
        col = mix(col, uGlow, clamp(glow, 0.0, 1.0) * uGlowAmount);

        if (d.y > 0.0) {
          // Stars: one at most to a cell, twinkling, under the clouds.
          if (uNight > 0.0) {
            vec2 suv = d.xz / (d.y + 1.0) * 90.0;
            vec2 cell = floor(suv);
            float s = hash(cell);
            vec2 at = cell + 0.25 + 0.5 * vec2(hash(cell + 3.1), hash(cell + 7.7));
            float r = 0.06 + 0.1 * fract(s * 37.0);
            float star = (1.0 - smoothstep(r * 0.6, r, length(suv - at))) * step(0.93, s);
            star *= 0.6 + 0.4 * sin(uTime * (1.0 + 3.0 * fract(s * 91.0)) + s * 40.0);
            col = mix(col, vec3(1.0, 0.98, 0.9), star * uNight * smoothstep(0.03, 0.2, d.y));
            // The moon, flat and pale, with a soft ring.
            vec3 md = normalize(uMoonDir);
            float halo = pow(max(dot(d, md), 0.0), 300.0);
            col = mix(col, vec3(0.75, 0.8, 0.95), halo * 0.35 * uNight);
            col = mix(col, vec3(0.97, 0.96, 0.88), disc(d, md, 0.026) * uNight);
          }
          // The aurora, over the stars and under the clouds, with a faint
          // green glow along the northern horizon below it.
          if (uAurora > 0.0) {
            float north = smoothstep(0.0, 0.9, -d.z) * (1.0 - smoothstep(0.0, 0.3, h));
            col = mix(col, vec3(0.2, 0.62, 0.48), north * 0.15 * uAurora);
            vec2 a = aurora(d) * uAurora;
            col = mix(col, vec3(0.56, 0.36, 0.78), a.y);
            col = mix(col, vec3(0.42, 1.0, 0.66), a.x * 0.9);
          }
          // The sun, with a ring of halo a step paler than the sky round it.
          float ring = disc(d, sd, 0.075) * 0.22 + disc(d, sd, 0.045) * 0.25;
          col = mix(col, mix(uGlow, uSunColor, 0.5), ring * uSun);
          col = mix(col, uSunColor, disc(d, sd, 0.03) * uSun);

          vec2 uv = d.xz / (d.y + 0.18);
          uv = vec2(uv.x * 0.55, uv.y * 1.3) + vec2(uTime * 0.004, 0.0);
          // Domain warp gives the swirled, brushed look.
          vec2 warp = vec2(fbm(uv * 0.9 + 3.1), fbm(uv * 0.9 + 8.4));
          float n = fbm(uv * 1.1 + warp * 1.2);
          float fade = smoothstep(0.0, 0.25, d.y);
          // More cover lowers the thresholds, until the shapes run together.
          float lt = 0.56 - uCover * 0.2, dt = 0.6 - uCover * 0.22;
          float light = smoothstep(lt, lt + 0.015, n) * fade;
          float dark = smoothstep(dt, dt + 0.015, fbm(uv * 1.6 + warp * 1.6 + 5.0)) * (1.0 - light) * fade;
          // The clouds on the sun's side catch its color.
          vec3 cLight = mix(uCloudLight, uGlow, pow(toward, 3.0) * uGlowAmount * 0.55);
          col = mix(col, uCloudDark, dark * 0.55);
          col = mix(col, cLight, light * 0.85);
          // Overcast: one even layer over all of it.
          col = mix(col, mix(uCloudLight, uHorizon, 0.5), smoothstep(0.6, 1.0, uCover) * 0.7 * fade);
        }
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`}),t=new U(new j(1e3,32,16),e);return t.frustumCulled=!1,t.renderOrder=-1,t}var ku=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Au=`
#include <packing>
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform vec2 uRes;
uniform float uNear;
uniform float uFar;
uniform float uPixelRatio;
uniform float uDepthScale;
uniform float uLineWidth;
uniform float uLineOpacity;
uniform vec3 uInk;
uniform vec3 uFogInk;
uniform vec2 uFogRange;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float viewDepth(vec2 uv) {
  float z = texture2D(tDepth, uv).x;
  return -perspectiveDepthToViewZ(z, uNear, uFar) * uDepthScale;
}
vec3 nrm(vec2 uv) {
  vec3 n = texture2D(tNormal, uv).xyz * 2.0 - 1.0;
  return n / max(length(n), 0.001);
}
float crease(vec3 centre, vec2 uv, float dc) {
  // A different depth surface belongs to the silhouette pass. Comparing its
  // normal as well paints a second, displaced contour (especially on hair).
  float dz = abs(viewDepth(uv) - dc) / max(dc, 0.001);
  float sameSurface = 1.0 - smoothstep(0.008, 0.025, dz);
  float covered = step(0.5, texture2D(tNormal, vUv).a) * step(0.5, texture2D(tNormal, uv).a);
  return (1.0 - clamp(dot(centre, nrm(uv)), -1.0, 1.0)) * sameSurface * covered;
}

void main() {
  vec2 px = 1.0 / uRes;
  float dc = viewDepth(vUv);
  // Radius in CSS pixels, independent of DPR. Keep sampling fixed in time:
  // moving it at 6 Hz used to make even a stationary model's outline jump.
  float near = 1.0 - smoothstep(4.0, 260.0, dc);
  float w = mix(0.65, 0.95, near) * uLineWidth * uPixelRatio;
  vec2 o = vec2(w) * px;

  float dl = viewDepth(vUv - vec2(o.x, 0.0));
  float dr = viewDepth(vUv + vec2(o.x, 0.0));
  float dd = viewDepth(vUv - vec2(0.0, o.y));
  float du = viewDepth(vUv + vec2(0.0, o.y));
  // Keep the near-surface half of the Laplacian: abs() marked both sides,
  // doubling the band and leaving a halo outside the actual model.
  float lap = max(0.0, dl + dr + dd + du - 4.0 * dc) / max(dc, 0.001);
  float depthEdge = smoothstep(0.035, 0.09, lap);

  vec3 nc = nrm(vUv);
  float ndiff = 0.0;
  ndiff += crease(nc, vUv - vec2(o.x, 0.0), dc);
  ndiff += crease(nc, vUv + vec2(o.x, 0.0), dc);
  ndiff += crease(nc, vUv - vec2(0.0, o.y), dc);
  ndiff += crease(nc, vUv + vec2(0.0, o.y), dc);
  float normalEdge = smoothstep(0.55, 0.95, ndiff) * (1.0 - smoothstep(150.0, 600.0, dc));

  float edge = max(depthEdge, normalEdge * 0.55);
  // Break long lines up a touch, like a dry pen.
  edge *= 0.75 + 0.25 * noise(vUv * uRes / uPixelRatio * 0.12);

  vec3 col = texture2D(tColor, vUv).rgb;
  // Distant lines fade toward the haze color instead of staying black.
  float far = smoothstep(uFogRange.x, uFogRange.y, dc);
  vec3 ink = mix(uInk, uFogInk, far);
  col = mix(col, ink, edge * uLineOpacity * mix(1.0, 0.6, far));

  // Paper grain + soft vignette.
  vec2 sc = gl_FragCoord.xy / uPixelRatio;
  float grain = hash(floor(sc * 0.5)) - 0.5;
  col *= 1.0 + grain * 0.05;
  float vig = smoothstep(1.25, 0.45, length(vUv - 0.5) * 1.6);
  col *= mix(0.9, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`,ju=class{constructor(t,{depthScale:n=1,lineWidth:r=1,lineOpacity:i=.72}={}){this.renderer=t;let o={type:C};this.colorRT=new at(1,1,{...o,samples:4}),this.colorRT.depthTexture=new b(1,1,ue),this.normalRT=new at(1,1,{...o,samples:4}),this.normalMat=new _t({side:2}),this.material=new A({vertexShader:ku,fragmentShader:Au,uniforms:{tColor:{value:this.colorRT.texture},tDepth:{value:this.colorRT.depthTexture},tNormal:{value:this.normalRT.texture},uRes:{value:new e(1,1)},uNear:{value:.1},uFar:{value:1e3},uPixelRatio:{value:1},uDepthScale:{value:n},uLineWidth:{value:r},uLineOpacity:{value:i},uInk:{value:new a(`#1f2a33`)},uFogInk:{value:new a(`#5d8f97`)},uFogRange:{value:new e(800,14e3)}},depthTest:!1,depthWrite:!1}),this.quad=new U(new l(2,2),this.material),this.quad.frustumCulled=!1,this.quadScene=new c,this.quadScene.add(this.quad),this.quadCam=new yt(-1,1,1,-1,0,1)}setSize(e,t,n){let r=Math.floor(e*n),i=Math.floor(t*n);this.colorRT.setSize(r,i),this.normalRT.setSize(r,i),this.material.uniforms.uRes.value.set(r,i),this.material.uniforms.uPixelRatio.value=n}render(e,t,n,r=[]){let i=this.renderer;i.setRenderTarget(this.colorRT),i.render(e,t);let o=e.background,s=e.fog;e.background=null,e.fog=null,e.overrideMaterial=this.normalMat;let c=new Map(r.map(e=>[e,e.visible]));e.traverse(e=>{(e.isSprite||e.isLine||e.isPoints||e.isMesh&&!e.geometry.attributes.normal)&&(c.has(e)||c.set(e,e.visible))});for(let e of c.keys())e.visible=!1;let l=i.getClearColor(new a),u=i.getClearAlpha();i.setClearColor(0,0),i.setRenderTarget(this.normalRT),i.clear();let d=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1,i.render(e,t),i.shadowMap.autoUpdate=d;for(let[e,t]of c)e.visible=t;i.setClearColor(l,u),e.overrideMaterial=null,e.background=o,e.fog=s;let f=this.material.uniforms;f.uNear.value=t.near,f.uFar.value=t.far,i.setRenderTarget(null),i.render(this.quadScene,this.quadCam)}},Mu=14;function Nu(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`),e,t);let i=new ve(r);return i.colorSpace=ae,i.anisotropy=8,i}function Pu(){let e=[[0,`#5d6264`],[.16,`#6f7472`],[.3,`#7d6a5a`],[.44,`#8f7a63`],[.56,`#a48a6c`],[.68,`#8c735d`],[.8,`#a79680`],[.9,`#7f6a58`]],t=Nu(512,1024,(t,n,r)=>{e.forEach(([i,a],o)=>{let s=o+1<e.length?e[o+1][0]:1.01;t.fillStyle=a,t.beginPath();for(let e=0;e<=n;e+=8){let a=Math.sin(e/n*Math.PI*2*(2+o))*.012+Math.sin(e/n*Math.PI*2*5+o)*.006;t[e?`lineTo`:`moveTo`](e,r-(i+(o?a:-.1))*r)}for(let e=n;e>=0;e-=8){let i=Math.sin(e/n*Math.PI*2*(3+o))*.012+Math.sin(e/n*Math.PI*2*4+o)*.006;t.lineTo(e,r-(s+i)*r)}t.fill()});let i=7,a=()=>(i=i*16807%2147483647)/2147483647;for(let e=0;e<260;e++){let e=a()*n,i=a()*r;t.fillStyle=a()>.5?`rgba(40,46,52,0.35)`:`rgba(250,245,235,0.25)`,t.beginPath(),t.ellipse(e,i,2+a()*6,1.5+a()*3,a()*3,0,Math.PI*2),t.fill()}});return t.wrapS=Ct,t}function Fu(){let e=Nu(1024,128,(e,t,n)=>{e.fillStyle=`#7a5640`,e.fillRect(0,0,t,n);for(let r=0;r<46;r++){let i=r/46*n;e.strokeStyle=r%3?`rgba(60,38,26,0.25)`:`rgba(150,110,80,0.25)`,e.lineWidth=1+r%4,e.beginPath();for(let n=0;n<=t;n+=16)e[n?`lineTo`:`moveTo`](n,i+Math.sin(n*.006+r)*4+Math.sin(n*.031+r*2)*1.5);e.stroke()}});return e.wrapS=e.wrapT=Ct,e}function Iu(e,t){return Nu(2048,160,(n,r,i)=>{let a=n.createLinearGradient(0,0,0,i);a.addColorStop(0,`#e7c873`),a.addColorStop(1,`#c9a24f`),n.fillStyle=a,n.fillRect(0,0,r,i),n.strokeStyle=`#6d5124`,n.lineWidth=6,n.strokeRect(10,10,r-20,i-20),n.fillStyle=`#3b2c14`,n.textAlign=`center`,n.textBaseline=`middle`,n.font=`700 70px "Patrick Hand SC", "PingFang SC", sans-serif`,n.fillText(e,r/2,62),n.font=`38px "Patrick Hand SC", "PingFang SC", sans-serif`,n.fillText(t,r/2,118)})}function Lu(){return Nu(256,256,e=>{e.fillStyle=`#d8b863`,e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill(),e.strokeStyle=`#6d5124`,e.lineWidth=6,e.beginPath(),e.arc(128,128,112,0,Math.PI*2),e.stroke(),e.fillStyle=`#3b2c14`,e.beginPath(),e.moveTo(128,34),e.lineTo(156,140),e.lineTo(128,124),e.lineTo(100,140),e.closePath(),e.fill(),e.font=`700 54px "Patrick Hand SC", sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`N`,128,186)})}function Ru(e,t,n,r,i,a){let o=[],s=[],c=[],{verts:l,size:u,cells:d,x0:f,z0:p}=e,m=0,h=null;t.forEach((t,n)=>{let g=f+t%l/d*u,_=p+Math.floor(t/l)/d*u;h&&(m+=Math.hypot(g-h[0],_-h[1])),h=[g,_];let v=r(e.h[t]),y=i(e.h[t]);if(o.push(g,v,_,g,y,_),s.push(m/1600,a(v),m/1600,a(y)),n){let e=n*2;c.push(e-2,e-1,e,e,e-1,e+1)}});let g=new z;if(g.setAttribute(`position`,new F(o,3)),g.setAttribute(`uv`,new F(s,2)),g.setIndex(c),g.computeVertexNormals(),new L().fromBufferAttribute(g.attributes.normal,0).dot(n)<0){let e=g.index.array;for(let t=0;t<e.length;t+=3)[e[t+1],e[t+2]]=[e[t+2],e[t+1]];g.computeVertexNormals()}return g}function zu(e,{baseY:t,top:n,title:r,subtitle:i}){let a=new G,o=e.verts,s=[{ks:[...Array(o).keys()],out:new L(0,0,-1)},{ks:[...Array(o).keys()].map(e=>(o-1)*o+e),out:new L(0,0,1)},{ks:[...Array(o).keys()].map(e=>e*o),out:new L(-1,0,0)},{ks:[...Array(o).keys()].map(e=>e*o+o-1),out:new L(1,0,0)}],c=H({map:Pu()},{hatch:1}),u=H({color:`#f4f6f1`},{hatch:1}),d=e=>(e-t)/(n-t);for(let n of s){let r=new U(Ru(e,n.ks,n.out,e=>e+.5,e=>e-Mu,d),u),i=new U(Ru(e,n.ks,n.out,e=>e-Mu,()=>t,d),c);i.receiveShadow=r.receiveShadow=!0,a.add(r,i)}let f=Fu(),p=H({map:f,color:`#b89a86`},{hatch:1}),m=e.size,[h,g]=e.center,_=[{w:m+260,h:170,y:t},{w:m+520,h:120,y:t-170}];for(let e of _){let t=new U(new W(e.w,e.h,e.w),p);t.position.set(h,e.y-e.h/2,g),t.receiveShadow=!0,t.castShadow=!0,a.add(t)}let v=new U(new l(2400,150),H({map:Iu(r,i)},{hatch:0}));v.position.set(h,t-85,g+(m+260)/2+1.5),a.add(v);let y=new U(new Ce(95,40),H({map:Lu()},{hatch:0}));y.rotation.x=-Math.PI/2,y.position.set(h+m/2+65,t+1.5,g+m/2+65),y.scale.setScalar(.55),a.add(y);let b=Nu(256,256,e=>{let t=e.createRadialGradient(128,128,30,128,128,128);t.addColorStop(0,`rgba(20,50,55,0.38)`),t.addColorStop(.55,`rgba(20,50,55,0.18)`),t.addColorStop(1,`rgba(20,50,55,0)`),e.fillStyle=t,e.fillRect(0,0,256,256)}),x=new U(new l(m*2.1,m*2.1),new V({map:b,transparent:!0,depthWrite:!1}));return x.rotation.x=-Math.PI/2,x.position.set(h,t-290-2,g),x.renderOrder=-1,a.add(x),{group:a,shadow:x,floorY:t-290}}var Bu=3.1,Vu=2.4,Hu=1.5,Uu=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)},Wu=(e,t,n)=>e+(t-e)*n,Gu={bank:0,pitch:0,spin:0,hip:[.67,-.13,.02],pelvis:0,tilt:.62,side:0,turn:.3,chin:-.46,look:.35,armL:[-.5,1.15,-.35],armR:[-.9,.75,-1],handL:[0,0,0],handR:[0,0,0]},Ku={armL:[-1.1,.35,-1.7],armR:[-1.1,.35,-1.7]},qu={armL:[.75,.5,-.15],armR:[.75,.5,-.15]},Ju={bank:-1.4,pitch:0,hip:[.42,.55,.02],pelvis:.7,tilt:1.5,side:0,turn:.05,chin:.6,look:.05,armL:[-.6,.25,-1.5],armR:[-.6,.25,-1.5],handL:[1,.3,.98],handR:[1,-.26,.98]},Yu={bank:.95,pitch:0,hip:[.13,-.62,.02],pelvis:-1.1,tilt:-1.45,side:0,turn:.05,chin:-.55,look:.15,armL:[.1,1.35,-.25],armR:[.1,1.35,-.25],handL:[0,0,0],handR:[0,0,0]},Xu={chest:[[Hu,Ju],[1.8,{tilt:1.05,hip:[.5,.55,.02],pelvis:.45,chin:.2,handL:[.6,.3,.98],handR:[.6,-.26,.98]}],[2.1,{tilt:.3,hip:[.6,.52,.02],pelvis:.1,handL:[0,.3,.98],handR:[0,-.26,.98],chin:-.2,armL:[-.7,.6,-.8],armR:[-.7,.6,-.8]}],[2.6,{bank:-.55,tilt:.75,hip:[.55,.25,.02],pelvis:.2,chin:-.4,armL:[-.6,1,-.5],armR:[-.8,.8,-.8]}],[Bu,{...Gu,bank:-.1,hip:[.67,-.08,.02]}]],back:[[Hu,Yu],[1.85,{tilt:-1.05,pelvis:-.7,bank:.45,hip:[.15,-.52,.02],turn:.15,chin:-.5,armL:[.6,.4,-.2],armR:[-.9,.5,-.6],handL:[1,.3,-.92]}],[2.3,{tilt:.3,pelvis:-.2,bank:.25,hip:[.24,-.38,.02],turn:.3,chin:-.5,handL:[.4,.3,-.9],armR:[-1.2,.5,-.5]}],[2.75,{tilt:.85,pelvis:.05,bank:.1,hip:[.52,-.2,.02],handL:[0,.3,-.9],armL:[-.3,.9,-.4]}],[Bu,{...Gu,bank:.06}]]},Zu={toe:{label:`Toe edge: onto the knees and chest`,rest:`chest`,keys:[[.12,{bank:-.3,hip:[.6,.02,.02],tilt:.95,chin:-.2,armL:[-1.25,.45,-.4],armR:[-1.25,.45,-.4]}],[.32,{bank:-1.05,hip:[.45,.42,.02],pelvis:.4,tilt:.85,chin:.1,armL:[-1.5,.35,-.2],armR:[-1.5,.35,-.2]}],[.55,{...Ju,tilt:1.58,chin:.45,hip:[.4,.58,.02]}],[.8,Ju]]},heel:{label:`Heel edge: onto the seat and back`,rest:`back`,keys:[[.1,{bank:.25,hip:[.58,-.25,.02],tilt:.3,chin:-.2,armL:[-2,.6,-.4],armR:[-2,.6,-.4]}],[.3,{bank:.7,hip:[.18,-.45,.02],pelvis:-.6,tilt:-.35,chin:-.65,...qu}],[.5,{...Yu,chin:-.85}],[.7,{...Yu,chin:-.4,tilt:-1.38}],[.9,Yu]]},nose:{label:`Nose catch: onto the front shoulder, then the back`,rest:`back`,keys:[[.12,{pitch:-.3,hip:[.55,-.05,.15],tilt:.8,side:.35,chin:-.3,...Ku}],[.35,{pitch:-.4,hip:[.28,-.05,.45],pelvis:.2,tilt:.4,side:1.35,chin:-.2,look:.6}],[.6,{pitch:-.15,bank:.6,hip:[.2,-.4,.25],pelvis:-.6,tilt:-.8,side:.6,chin:-.7}],[.9,{...Yu,pitch:0}]]},tail:{label:`Riding backward: onto the back shoulder, then the back`,rest:`back`,keys:[[.12,{pitch:.3,hip:[.55,-.15,-.15],tilt:.4,side:-.35,chin:-.5,...qu}],[.35,{pitch:.4,hip:[.28,-.2,-.45],pelvis:-.2,tilt:0,side:-1.35,chin:-.6,look:0}],[.6,{pitch:.15,bank:.65,hip:[.2,-.45,-.25],pelvis:-.8,tilt:-1,side:-.6,chin:-.8}],[.9,Yu]]},roll:{label:`Fast: a tumble, landing on the back`,rest:`back`,keys:[[.12,{spin:-.35,hip:[.45,-.05,.02],pelvis:.5,tilt:1.15,chin:-.6,...Ku}],[.35,{spin:-1.7}],[.6,{spin:-3.7}],[.85,{spin:-5.6,pelvis:.2,tilt:.6}],[1,{spin:-Math.PI*2,bank:.5,hip:[.25,-.4,.02],pelvis:-.6,tilt:-.8,chin:-.7,...qu}],[1.25,Yu]]},slam:{label:`Hard landing: down on the seat`,rest:`back`,keys:[[.08,{hip:[.36,-.18,.02],tilt:1,chin:-.6,bank:.08}],[.25,{hip:[.15,-.45,.02],pelvis:-.5,tilt:-.25,bank:.4,chin:-.5,...qu}],[.5,{tilt:-1.15,bank:.7,chin:-.85,hip:[.13,-.55,.02],pelvis:-.9,armL:[.2,1.2,-.25],armR:[.2,1.2,-.25]}],[.8,Yu]]}};function Qu({side:e=0,forward:t=1,speed:n=0,reason:r=``}={}){return e>0?`toe`:e<0?`heel`:r===`hard landing`?`slam`:t<0?`tail`:n>19?`roll`:`nose`}var $u=Object.fromEntries(Object.entries(Zu).map(([e,t])=>{let n=Gu;return[e,[[0,Gu],...t.keys,...Xu[t.rest]].map(([e,t])=>{let r={...n,...t};return r.spin=n.spin+Math.atan2(Math.sin(r.spin-n.spin),Math.cos(r.spin-n.spin)),[e,n=r]})]})),ed=(e,t,n)=>Array.isArray(e)?e.map((e,r)=>Wu(e,t[r],n)):Wu(e,t,n);function td(e,t={}){let n=t.kind||Qu(t),r=$u[n],i=0;for(;i<r.length-2&&e>=r[i+1][0];)i++;let[a,o]=r[i],[s,c]=r[i+1],l=Uu(e,a,s),u={};for(let e of Object.keys(o))u[e]=ed(o[e],c[e],l);return u.kind=n,u.rest=Zu[n].rest,u.phase=e<.28?`impact`:e<1.05?`slide`:e<1.5?`settle`:`get-up`,u.hands=[u.handL,u.handR],u.plant=Math.max(u.handL[0],u.handR[0]),u}var nd=.2,rd=.72,id=.55,ad=new We,od=new We,sd=new We().setFromAxisAngle(new L(0,1,0),Math.PI/2),cd=new Tt,ld=new L,ud=new L,dd=new L,fd=new We,pd=new L(1,0,0);function md(e,t,n){return t.setFromEuler(cd.set(e.pitch,0,e.bank)),ld.set(-Math.sign(e.bank)*nd*Math.min(1,Math.abs(e.bank)/.25),0,Math.sign(e.pitch)*rd*Math.min(1,Math.abs(e.pitch)/.25)),n.copy(ld).sub(dd.copy(ld).applyQuaternion(t))}function hd(e,t){md(t,ad,ud),od.setFromAxisAngle(pd,t.spin),e.quaternion.copy(od).multiply(ad),ld.set(0,id,0),e.position.copy(ud).sub(ld).applyQuaternion(od).add(ld)}function gd(e,t){md(t,ad,ud);let n=fd.copy(sd).invert().multiply(ad.clone().invert()),r=dd.set(t.hip[2],t.hip[0],t.hip[1]).applyQuaternion(sd).sub(ud).applyQuaternion(n);e.hips.position.copy(r);let i=new We().setFromEuler(cd.set(t.pelvis,t.turn,-t.side*.6));e.hips.quaternion.copy(n).multiply(sd).multiply(i);let a=new We().setFromEuler(cd.set(t.tilt,t.turn*1.5,-t.side));e.torso.quaternion.copy(i).invert().multiply(a),e.head.rotation.set(t.chin,t.look,t.side*.3);for(let[n,[r,i,a],o]of[[e.armL,t.armL,1],[e.armR,t.armR,-1]])n.sh.rotation.set(r,0,o*i),n.el.rotation.set(a,0,o*.1)}function _d(e,t,n,r=new L){return e.localToWorld(r.set(t[2],0,-t[1])),r.y=n.heightAt(r.x,r.z)+.06,r}function vd(e){let t=Math.max(0,e),n=Uu(t,0,.12)*(1-Uu(t,.7,1)),r=Uu(t,.75,.9)*(1-Uu(t,1.35,1.5)),i=Uu(t,1.4,1.55)*(1-Uu(t,2.15,Vu));return{head:Math.sin(t*Math.PI*2*3.2)*.55*n,nod:Math.sin(t*Math.PI*2*6.4)*.08*n,shoulder:Math.sin(t*23)*.09*n,sleeve:r,sleeveStroke:Math.sin((t-.75)*Math.PI*2*2.6),thighs:i,thighStroke:Math.sin((t-1.4)*Math.PI*2*2.4)}}function yd(e,t){let n=vd(t);e.head.rotation.y+=n.head,e.head.rotation.x+=n.nod,e.head.rotation.z+=n.shoulder*.5,e.torso.rotation.z+=n.shoulder;let r=(e,t,n,r)=>{e.sh.rotation.set(Wu(e.sh.rotation.x,t[0],r),Wu(e.sh.rotation.y,t[1],r),Wu(e.sh.rotation.z,t[2],r)),e.el.rotation.set(Wu(e.el.rotation.x,n[0],r),Wu(e.el.rotation.y,n[1],r),Wu(e.el.rotation.z,n[2],r))};if(n.sleeve>0){let t=n.sleeveStroke;r(e.armR,[-.85+t*.35,0,.55+t*.15],[-1.55-t*.25,0,0],n.sleeve),r(e.armL,[-.35,0,.55],[-.3,0,.1],n.sleeve),e.head.rotation.x+=-.25*n.sleeve,e.head.rotation.y+=-.3*n.sleeve}if(n.thighs>0){let t=n.thighStroke;e.torso.rotation.x+=.35*n.thighs,e.head.rotation.x+=-.2*n.thighs,r(e.armL,[-.45+t*.3,0,.12],[-.35-t*.2,0,0],n.thighs),r(e.armR,[-.45-t*.3,0,-.12],[-.35+t*.2,0,0],n.thighs)}}var bd=new L,xd=new L;function Sd(e,t,n){e.rotation.x=t,Math.abs(t%(Math.PI*2))<1e-6?e.position.set(0,0,0):(xd.set(0,n,0).applyQuaternion(e.quaternion),e.position.set(-xd.x,n-xd.y,-xd.z))}function Cd(e,t,n=!1){e.updateMatrixWorld(!0),e.traverseVisible(e=>{e.isSkinnedMesh&&e.skeleton.update()});let r=-1/0;return e.traverseVisible(e=>{if(e.isMesh&&e.geometry.attributes.position)for(let n=0;n<e.geometry.attributes.position.count;n++)e.getVertexPosition(n,bd).applyMatrix4(e.matrixWorld),r=Math.max(r,t.heightAt(bd.x,bd.z)+.025-bd.y)}),r=Number.isFinite(r)?n?r:Math.max(0,r):0,e.position.y+=r,e.updateMatrixWorld(!0),r}var wd={length:1.4,waist:.11,tip:.13,thick:.02,sole:.035},Td={length:.82},Ed=.125,Dd=Object.fromEntries(Object.entries({top:`#3d6fa6`,stripe:`#b9d4ee`,accent:`#f2a7b9`,navy:`#1f2a44`,binding:`#efe9dc`,steel:`#a9b2b8`}).map(([e,t])=>[e,H({color:t},{rim:1,hatch:0})]));function Od(e,t,n,r=0,i=0,a=0){let o=new U(e,t);return o.position.set(r,i,a),o.castShadow=!0,n.add(o),o}function kd(e=1,t=wd.thick){let n=wd.length,r=n/2,i=.1,a=new W(1,t,n,4,1,56).translate(0,t/2,0),o=a.attributes.position;for(let t=0;t<o.count;t++){let n=o.getZ(t),a=Math.abs(n)/r,s=Math.max(0,Math.abs(n)-(r-i))/i,c=(wd.waist+(wd.tip-wd.waist)*a*a)*Math.sqrt(Math.max(.05,1-s**4))*e;o.setX(t,o.getX(t)*c);let l=Math.max(0,Math.abs(n)-(r-.2));o.setY(t,o.getY(t)+l*l*(n>0?1.9:1.6))}return a.computeVertexNormals(),a}function Ad(){let e=new G;e.name=`Ski`;let t=new G;t.position.y=-wd.sole,e.add(t),Od(kd(),Dd.top,t).receiveShadow=!0,Od(kd(1.04,.007),Dd.navy,t,0,-.002,0).castShadow=!1;let n=wd.length-.42;Od(new W(.026,.003,n),Dd.stripe,t,0,wd.thick+.001,0);for(let e of[-1,1])Od(new W(.06,.003,.05),Dd.accent,t,0,wd.thick+.002,e*(n/2-.08));let r=new G;r.position.y=wd.thick,t.add(r),Od(new W(.075,.015,.44),Dd.binding,r,0,.0075,0),Od(new W(.09,.045,.07),Dd.binding,r,0,.036,.205),Od(new W(.06,.012,.05),Dd.navy,r,0,.064,.21),Od(new W(.095,.06,.085),Dd.binding,r,0,.044,-.2),Od(new W(.05,.016,.085),Dd.navy,r,0,.08,-.215).rotation.x=-.25;for(let e of[-1,1])Od(new W(.012,.03,.07),Dd.navy,r,e*.052,.03,-.15);return e}function jd(){let e=new G;e.name=`Pole`;let n=Td.length;return Od(new t(.011,.009,n-.06,7).translate(0,-(n+.06)/2,0),Dd.steel,e),Od(new t(.024,.02,.15,9),Dd.navy,e,0,0,0),Od(new j(.026,9,6),Dd.navy,e,0,.075,0),Od(new t(.017,.017,.015,9),Dd.accent,e,0,-.082,0),Od(new i(.035,.007,5,12),Dd.binding,e,0,.06,.028).rotation.x=1.2,Od(new t(.055,.055,.012,14),Dd.navy,e,0,-n+.09,0),Od(new i(.055,.006,5,16),Dd.binding,e,0,-n+.09,0).rotation.x=Math.PI/2,Od(new P(.009,.05,6).rotateX(Math.PI),Dd.steel,e,0,-n+.025,0),e}var Md={p:[21,.88],t:[17,.78],h:[15,.7],hand:[24,.62],pole:[38,.9],foot:[23,1],knee:[23,1],roll:[12,1]},Nd={px:`p`,py:`p`,pz:`p`,pPitch:`p`,pYaw:`p`,pRoll:`p`,tPitch:`t`,tYaw:`t`,tRoll:`t`,hPitch:`h`,hYaw:`h`,hRoll:`h`,hlx:`hand`,hly:`hand`,hlz:`hand`,hrx:`hand`,hry:`hand`,hrz:`hand`,kneeOut:`knee`,kneeShift:`knee`,lx:`foot`,ly:`foot`,lz:`foot`,lYaw:`foot`,lPitch:`foot`,lRoll:`foot`,rx:`foot`,ry:`foot`,rz:`foot`,rYaw:`foot`,rPitch:`foot`,rRoll:`foot`,plx:`pole`,ply:`pole`,plz:`pole`,prx:`pole`,pry:`pole`,prz:`pole`,roll:`roll`},Pd=Object.keys(Nd),Fd=I,Id=class{constructor(){this.x={},this.v={},this.tgt={};for(let e of Pd)this.x[e]=this.v[e]=this.tgt[e]=0;this.snap=!0,this.ground=1,this.plantT=9,this.plantSide=1,this.turnSide=0}update(e,t,n){this.ground+=(+!t.air-this.ground)*(1-Math.exp(-e*10)),this.#n(e,t,n);let{x:r,v:i,tgt:a}=this;if(this.snap){for(let e of Pd)r[e]=a[e],i[e]=0;return this.snap=!1,r}let o=Math.max(1,Math.ceil(e*38/.25)),s=e/o;for(let e of Pd){let[t,n]=Md[Nd[e]],c=r[e],l=i[e];for(let r=0;r<o;r++)l+=(t*t*(a[e]-c)-2*n*t*l)*s,c+=l*s;r[e]=c,i[e]=l}return r}#e(e,t,n,r,i,a,o){if(o<=0)return;let s=this.tgt;s.hlx+=(e-s.hlx)*o,s.hly+=(t-s.hly)*o,s.hlz+=(n-s.hlz)*o,s.hrx+=(r-s.hrx)*o,s.hry+=(i-s.hry)*o,s.hrz+=(a-s.hrz)*o}#t(e,t,n,r,i,a,o){if(o<=0)return;let s=this.tgt;s.plx+=(e-s.plx)*o,s.ply+=(t-s.ply)*o,s.plz+=(n-s.plz)*o,s.prx+=(r-s.prx)*o,s.pry+=(i-s.pry)*o,s.prz+=(a-s.prz)*o}#n(e,t,n){let r=this.tgt,i=this.ground,a=1-i,o=Fd.clamp(t.lean/.7,-1,1)*i,s=+!!t.brake*i,c=Math.max(+!!t.tuck,.5*Fd.smoothstep(t.speed,16,28))*i*(1-s),l=(t.charge||0)*i,u=i*(1-Fd.smoothstep(t.speed,.3,1.2))*(1-s),d=.75*t.lean*i;r.roll=d,r.px=.06*o,r.py=.69-.07*Math.abs(o),r.pz=-.04,r.pPitch=.12,r.pYaw=-.15*o,r.pRoll=.15*d,r.tPitch=.18,r.tYaw=-.05*o,r.tRoll=.35*d,r.hPitch=-.28,r.hYaw=.35*o,r.hRoll=.3*d,r.hlx=.3,r.hly=.1,r.hlz=.3+.06*o,r.hrx=-.3,r.hry=.1,r.hrz=.3-.06*o,r.plx=.45,r.ply=.05,r.plz=-.55,r.prx=-.45,r.pry=.05,r.prz=-.55,r.kneeOut=.06,r.kneeShift=.5*o,r.lx=Ed,r.ly=0,r.lz=.06*Math.max(0,o),r.rx=-.125,r.ry=0,r.rz=.06*Math.max(0,-o),r.lYaw=r.rYaw=r.lPitch=r.rPitch=0,r.lRoll=r.rRoll=-.15*o;let f=Math.abs(o)>.18?Math.sign(o):0;if(f&&f!==this.turnSide&&i>.9&&!s&&t.speed>2.5&&this.plantT>.55&&(this.plantT=0,this.plantSide=f),f&&(this.turnSide=f),this.plantT=Math.min(this.plantT+e,9),this.plantT<.5){let e=Math.sin(Math.PI*this.plantT/.5)*i;this.plantSide>0?(r.hlx+=(.3-r.hlx)*e,r.hly+=(-.02-r.hly)*e,r.hlz+=(.44-r.hlz)*e,r.plx+=(.34-r.plx)*e,r.ply+=(0-r.ply)*e,r.plz+=(.62-r.plz)*e):(r.hrx+=(-.3-r.hrx)*e,r.hry+=(-.02-r.hry)*e,r.hrz+=(.44-r.hrz)*e,r.prx+=(-.34-r.prx)*e,r.pry+=(0-r.pry)*e,r.prz+=(.62-r.prz)*e)}if(c>0&&(r.py-=.2*c,r.pz-=.07*c,r.pPitch+=.45*c,r.tPitch+=.55*c,r.hPitch-=.75*c,this.#e(.08,.11,.7,-.08,.11,.7,c),this.#t(.42,.85,-.9,-.42,.85,-.9,c)),l>.001&&(r.py-=.06*l,r.tPitch+=.08*l,this.#e(.24,.02,.38,-.24,.02,.38,.6*l),this.#t(.4,.25,-.9,-.4,.25,-.9,.6*l)),s>0&&(r.lYaw-=.22*s,r.rYaw+=.22*s,r.lx+=.11*s,r.rx-=.11*s,r.lRoll+=.15*s,r.rRoll-=.15*s,r.kneeOut-=.45*s,r.py-=.05*s,r.pz-=.03*s,this.#e(.34,.08,.2,-.34,.08,.2,s),this.#t(.64,.02,-.1,-.64,.02,-.1,s)),a>.001){let e=.07*Math.sin(5.2*n);r.ly+=.08*a,r.ry+=.08*a,r.lPitch-=(.1+e)*a,r.rPitch-=(.1-e)*a,r.py-=.04*a,r.tPitch+=.1*a;let t=n*6.5,i=.08;this.#e(.42+Math.sin(t)*i,.26+Math.cos(t)*i,.12,-.42-Math.sin(t+2.1)*i,.26+Math.cos(t+2.1)*i,.1,.55*a),this.#t(.46,.1,-.75,-.46,.1,-.75,a)}t.landing>0&&(r.py-=.12*Math.min(1,t.landing*2)*i,r.tPitch+=.1*i);let p=Fd.smoothstep(t.slip||0,1.5,5)*i;p>.001&&(r.py-=.03*p-(.6*Math.sin(21*n)+.4*Math.sin(33*n+2))*.012*p,r.hlx+=.08*p,r.hrx-=.08*p,r.hly+=.1*p,r.hry+=.1*p),u>.001&&(r.py+=.02*u,r.tPitch-=.08*u,r.hYaw+=(.5*Math.sin(.55*n)+.14*Math.sin(1.31*n))*u,r.px+=.02*Math.sin(.37*n)*u,this.#e(.26,.02,.2,-.26,.02,.2,.7*u),this.#t(.42,0,.12,-.42,0,.12,u))}},Ld=`modulepreload`,Rd=function(e,t){return new URL(e,t).href},zd={},Bd=function(e){return e.pathname.endsWith(`.css`)},Vd=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Hd=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Rd(t,n);let r=s(t),i=Bd(r);return Vd(zd,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ld,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ud={cream:`#efe9dc`,navy:`#1e2536`,black:`#1c1d21`,skin:`#f6dcc6`,hair:`#5b3b28`,hairDark:`#452d1f`,lens:`#3d4a5c`,lensGlint:`#d9553a`,yellow:`#f2c83a`,orange:`#ff5a1f`,board:`#ee4f2c`,boardBase:`#c63b22`,piping:`#f7f5ee`,patch:`#b9b4aa`},X=Object.fromEntries(Object.entries(Ud).map(([e,t])=>[e,H({color:t},{rim:1,hatch:0})]));function Wd(){let e=document.createElement(`canvas`);e.width=512,e.height=256;let t=e.getContext(`2d`);t.fillStyle=Ud.skin,t.fillRect(0,0,512,256),t.fillStyle=`rgba(240,150,140,0.55)`;for(let e of[-40,40])t.beginPath(),t.ellipse(128+e,150,13,7,0,0,Math.PI*2),t.fill();t.fillStyle=`#16171a`;for(let e of[-25,25])t.beginPath(),t.ellipse(128+e,132,6.5,10,0,0,Math.PI*2),t.fill();t.strokeStyle=`#5a3a2a`,t.lineWidth=3,t.lineCap=`round`;for(let e of[-25,25])t.beginPath(),t.moveTo(128+e-8,112),t.lineTo(128+e+8,110),t.stroke();t.strokeStyle=`#7a3e34`,t.lineWidth=2.5,t.beginPath(),t.arc(128,152,7,.25*Math.PI,.75*Math.PI),t.stroke();let n=new ve(e);return n.colorSpace=ae,n.anisotropy=4,n}function Gd(){let e=document.createElement(`canvas`);e.width=128,e.height=256;let t=e.getContext(`2d`);t.fillStyle=Ud.black,t.fillRect(0,0,128,256),t.save(),t.translate(78,128),t.rotate(-Math.PI/2),t.fillStyle=`#e9e6de`,t.font=`600 30px "Patrick Hand SC", sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`SALONION`,0,0),t.restore();let n=new ve(e);return n.colorSpace=ae,n}var Kd=new L(0,1,0),qd=new L(0,-1,0),Jd=new L,Yd=new L,Xd=.22,Zd=.25,Qd={seat:.15,pivot:.04,shoulder:[.26,.43],reach:.47,leg:.6,ankle:.15,hip:[.12,0]};function $d(e,t,n){let[r,i]=e.shoulder,a=t.y+e.pivot;for(let o=.15;o<1.2;o+=.02)if(Math.hypot(Math.abs(n.x)-r,n.y-(a+i*Math.cos(o)),n.z-(t.z+i*Math.sin(o)))<e.reach*.95)return o;return 1.2}function Z(e,t,n,r=0,i=0,a=0){let o=new U(e,t);return o.position.set(r,i,a),o.castShadow=!0,n.add(o),o}var ef=class{constructor(e,n,r,i,{top:a,pipe:o}={}){this.mesh=Z(new t(r,n,1,8).translate(0,.5,0),i,e),a&&Z(new t(r*1.07,r*1.04,a.len,10,1,!1,-1.9,3.8).translate(0,1-a.len/2,0),a.mat,this.mesh),o&&Z(new W(.018,.9,.02).translate(0,.5,0),o.mat,this.mesh,o.side*r*1.02,0,0)}set(e,t){let n=new L().subVectors(t,e),r=n.length();this.mesh.position.copy(e),this.mesh.quaternion.setFromUnitVectors(Kd,n.divideScalar(r||1)),this.mesh.scale.set(1,r,1)}};function tf(){let e=1.56,t=.52,n=new W(.27,.025,e,6,1,40),r=n.attributes.position;for(let n=0;n<r.count;n++){let i=r.getZ(n),a=Math.max(0,Math.abs(i)-t),o=a/(e/2-t),s=(1-.06*Math.cos(i/e*Math.PI)**2)*Math.sqrt(Math.max(.05,1-o**4));r.setX(n,r.getX(n)*s),r.setY(n,r.getY(n)+a*a*1.1)}return n.computeVertexNormals(),n}var nf=class{constructor({model:e=!1}={}){this.root=new G,this.edge=new G,this.root.add(this.edge),this.proceduralBoard=new G,this.edge.add(this.proceduralBoard),this.board=Z(tf(),X.board,this.proceduralBoard,0,0,0),this.board.receiveShadow=!0;let t=Z(new W(.24,.006,1),X.boardBase,this.proceduralBoard,0,-.002,0);t.castShadow=!1,this.body=new G,this.body.rotation.y=Math.PI/2,this.edge.add(this.body),this.classic=new G,this.body.add(this.classic),this.bindings=[],this.boots=[],this.#r(),this.stance=this.feet.map(e=>e.position.clone()),this.gear=`board`,this.skiPose=new Id,this.skis=this.feet.map(e=>{let t=Ad();return t.position.z=.02,e.add(t),t}),this.poles=[jd(),jd()],this.body.add(...this.poles);for(let e of[...this.skis,...this.poles])e.visible=!1;this.kneeShift=0,this.skiHand=[new L,new L],this.skiHands=null,this.seat=null,this.reach=null,this.reachW=0,this.reachAt=new L,this.reachLeft=!1,this.throwT=null,this.pose={crouch:.4,lean:0,twist:0,armSwing:0,air:0,tumble:0},this.t=0,this.model=null,this.base=null,this.outfit=null,this.modelId=`classic`,this.locomotion=`ride`,this.act=null,this.models=new Map,this.outfits=new Map,this.selection=0,e&&this.selectModel(e===!0?`male`:e).catch(e=>console.warn(`Rider model unavailable.`,e))}async selectModel(e){let t=++this.selection,n=null;if(e!==`classic`&&(this.models.has(e)||this.models.set(e,Hd(async()=>{let{RIDER_MODELS:e,loadRiderModel:t,RiderModel:n}=await import(`./rider-model-COApJUaE.js`);return{RIDER_MODELS:e,loadRiderModel:t,RiderModel:n}},__vite__mapDeps([0,1,2]),import.meta.url).then(async({RIDER_MODELS:t,loadRiderModel:n,RiderModel:r})=>{let i=t[e].walkFrom,[a,o]=await Promise.all([n(e),i&&n(i)]);return new r(a,e,{borrow:o})}).catch(t=>{throw this.models.delete(e),t})),n=await this.models.get(e),e===`female`&&!this.boardAssembly&&(this.boardLoading||=Hd(async()=>{let{loadBoardAssembly:e}=await import(`./rider-board-DJUE_772.js`);return{loadBoardAssembly:e}},__vite__mapDeps([3,1]),import.meta.url).then(({loadBoardAssembly:e})=>e(this)).catch(e=>{throw this.boardLoading=null,e}),this.boardAssembly=await this.boardLoading)),t!==this.selection)return!1;this.locomotion!==`sit`&&this.setLocomotion(`ride`),this.model&&this.body.remove(this.model.root),this.model=this.base=n,this.outfit=null,this.modelId=e,n&&this.body.add(n.root),this.classic.visible=!n;for(let e of this.boots)e.visible=!n;return this.#n(),!0}get build(){return this.model?.build??Qd}get canWalk(){return!!this.base?.canWalk}preloadOutfit(e){e&&this.base&&this.#e(e)}outfitModel(e){return this.base&&this.outfits.get(`${this.modelId}:${e}`)?.model||null}async loadOutfit(e){let t=this.modelId,n=e?this.base&&await this.#e(e).promise:this.base;return!!n&&t===this.modelId&&n!==this.model}wear(e){let t=e?this.base&&this.#e(e).model:this.base;return!t||t===this.model?!1:(this.body.remove(this.model.root),this.model=t,this.outfit=e,this.body.add(t.root),t.snapTo(this.locomotion,this.locomotion===`act`?this.act.clip:null),t.update(0,this,this.locomotion,0),!0)}#e(e){let t=this.modelId,n=this.base,r=`${t}:${e}`,i=this.outfits.get(r);return i||(i={model:null},i.promise=Hd(async()=>{let{RIDER_MODELS:e,loadRiderModel:t,RiderModel:n}=await import(`./rider-model-COApJUaE.js`);return{RIDER_MODELS:e,loadRiderModel:t,RiderModel:n}},__vite__mapDeps([0,1,2]),import.meta.url).then(async({RIDER_MODELS:r,loadRiderModel:a,RiderModel:o})=>r[t].outfits?.[e]?(i.model=new o(await a(t,e),t,{outfit:e,fit:n}),i.model):null).catch(n=>(console.warn(`No ${e} outfit for the ${t} rider; keeping their own clothes.`,n),null)),this.outfits.set(r,i)),i}setLocomotion(e,t=this.seat){return e===`walk`&&!this.canWalk||e===`sit`&&!t||e===`act`&&!(this.model&&this.act)?!1:(this.seat=t,e!==`sit`&&this.#t(),this.locomotion=e,this.skiPose.snap=!0,this.#n(),!0)}play(e,t){return this.act={clip:e,time:t},this.locomotion===`act`||this.setLocomotion(`act`)}setGear(e){this.gear=e===`ski`?`ski`:`board`,this.skiPose.snap=!0,this.locomotion!==`sit`&&this.#t(),this.#n()}get skiing(){return this.gear===`ski`&&this.locomotion===`ride`}#t(){this.feet.forEach((e,t)=>{e.position.copy(this.stance[t]),e.rotation.set(0,0,0)})}#n(){let e=this.locomotion===`ride`,t=e&&this.gear!==`ski`;this.proceduralBoard.visible=t&&this.modelId!==`female`,this.boardAssembly&&(this.boardAssembly.visible=t&&this.modelId===`female`);for(let e of this.bindings)e.visible=t&&this.modelId!==`female`;for(let t of[...this.skis,...this.poles])t.visible=e&&this.gear===`ski`;for(let e of this.boots)e.visible=!this.model&&this.locomotion!==`walk`}#r(){let e=this.body;this.feet=[.26,-.26].map(t=>{let n=new G;return n.position.set(t,.025,0),e.add(n),this.boots.push(Z(new W(.17,.16,.33),X.black,n,0,.09,.02),Z(new W(.19,.05,.12),X.orange,n,0,.15,.05),Z(new W(.19,.04,.07),X.orange,n,0,.12,.15)),this.bindings.push(Z(new W(.18,.035,.35),X.orange,n,0,.015,.02)),this.bindings.push(Z(new W(.18,.26,.05),X.orange,n,0,.17,-.16)),n});let n=this.classic;this.thighs=[1,-1].map(e=>new ef(n,.135,.15,X.navy,{top:{len:.55,mat:X.cream},pipe:{side:e,mat:X.piping}})),this.shins=[1,-1].map(e=>new ef(n,.135,.14,X.navy,{pipe:{side:e,mat:X.piping}})),this.cuffs=[0,1].map(()=>Z(new t(.145,.14,.08,9),X.black,n)),this.knees=[0,1].map(()=>Z(new j(.14,9,7),X.navy,n)),this.hips=new G,n.add(this.hips),Z(new j(.2,10,8).scale(1.25,.75,.95),X.navy,this.hips),Z(new j(.205,12,8,Math.PI/2-1.2,2.4,.5,1.6).scale(1.25,.75,.95),X.cream,this.hips),this.torso=new G,this.torso.position.y=.04,this.hips.add(this.torso);let r=this.torso;Z(new t(.245,.26,.2,12),X.navy,r,0,.1,0),Z(new ht(.225,.08,4,12),X.cream,r,0,.3,0).scale.set(1.08,1,.95),Z(new W(.014,.19,.02),X.piping,r,0,.1,.258),Z(new W(.012,.3,.02),X.navy,r,0,.36,.215),Z(new t(.13,.17,.11,12),X.cream,r,0,.55,0),Z(new j(.15,10,8).scale(1.2,.75,.8),X.cream,r,0,.55,-.11);for(let e of[-.13,.13]){let t=Z(new W(.032,.24,.02),X.black,r,e,.42,.2);t.rotation.x=-.35}Z(new W(.28,.025,.02),X.black,r,0,.37,.222),Z(new t(.04,.04,.02,14),X.yellow,r,-.12,.44,.22).rotation.x=Math.PI/2,Z(new W(.09,.13,.05),X.black,r,.12,.31,.235),Z(new W(.02,.07,.01),X.orange,r,.12,.31,.262),Z(new W(.38,.46,.17),X.black,r,0,.31,-.27),Z(new W(.4,.1,.19),X.black,r,0,.53,-.27);for(let e of[-.195,.195])Z(new W(.02,.07,.03),X.orange,r,e,.42,-.22),Z(new W(.02,.06,.03),X.orange,r,e,.18,-.22);let a=new U(new l(.17,.34),new V({map:Gd()}));a.position.set(0,.29,-.357),a.rotation.y=Math.PI,r.add(a),this.head=new G,this.head.position.y=.56,r.add(this.head);let o=this.head;Z(new j(.19,24,16),H({map:Wd()},{rim:1,hatch:0}),o,0,.19,0).scale.set(1.04,1,.98);for(let e of[-1,1])Z(new j(.042,8,6),X.skin,o,e*.19,.17,0);Z(new j(.203,18,12,Math.PI/2+.95,Math.PI*2-1.9,0,Math.PI*.64),X.hair,o,0,.195,-.004).scale.set(1.06,1.02,1.04);let s=(e,t,n,r,i,a,s=X.hair)=>{Z(new P(.045*a,.13*a,5).rotateX(Math.PI),s,o,e,t,n).rotation.set(r,0,i)};for(let e=-3;e<=3;e++){let t=e*.21;s(Math.sin(t)*.18,.265-Math.abs(e)*.008,Math.cos(t)*.18,-.55,-t*.6,1-Math.abs(e)*.06,e%2?X.hairDark:X.hair)}for(let e of[-1,1])s(e*.2,.21,.06,.1,e*.9,1.1),s(e*.21,.16,-.04,-.1,e*1.4,1,X.hairDark),s(e*.15,.09,-.14,.7,e*1.1,1.1);s(0,.07,-.18,1.1,0,1.2),Z(new j(.222,20,12,0,Math.PI*2,0,Math.PI*.47),X.cream,o,0,.22,-.012).scale.set(1.05,1.3,1.08),Z(new j(.15,12,9),X.cream,o,0,.42000000000000004,-.07).scale.set(1.2,.85,1.2);let c=Z(new i(.228,.012,5,28),X.black,o,0,.29000000000000004,-.01);c.rotation.x=Math.PI/2+.18,c.scale.set(1.04,1.07,1);for(let e of[-1,1]){let t=Z(new i(.024,.006,5,12),X.piping,o,e*.24,.28500000000000003,-.03);t.rotation.y=Math.PI/2}let u=new G;u.position.set(0,.32,-.01),u.rotation.x=-.18,o.add(u),Z(new t(.236,.236,.125,18,1,!0,-.82,1.64),X.black,u),Z(new t(.243,.243,.095,18,1,!0,-.74,1.48),X.lens,u),Z(new W(.12,.01,.012),X.lensGlint,u,.07,.02,.233).rotation.z=-.12,Z(new W(.07,.008,.012),X.lensGlint,u,-.09,-.015,.226).rotation.z=-.12;let d=e=>{let n=new G;n.position.set(.26*e,.43,0),r.add(n),Z(new j(.105,9,7),X.cream,n),Z(new t(.095,.1,.22,9).translate(0,-.11,0),X.cream,n);let i=new G;return i.position.y=-.22,n.add(i),Z(new j(.098,9,7),X.navy,i),Z(new t(.105,.1,.2,9).translate(0,-.1,0),X.navy,i),Z(new j(.085,9,7).scale(.95,1.15,.85),X.black,i,0,-.25,.01),{sh:n,el:i}};this.armL=d(1),this.armR=d(-1),Z(new W(.01,.07,.08),X.patch,this.armL.sh,.1,-.08,0)}update(e,t){this.t+=e;let n=this.pose,r=1-Math.exp(-e*10);n.crouch+=(t.crouch-n.crouch)*r,n.lean+=(t.lean-n.lean)*(1-Math.exp(-e*8)),n.twist+=(t.twist-n.twist)*r,n.air+=(+!!t.air-n.air)*(1-Math.exp(-e*6));let i=this.locomotion===`sit`,a=this.skiing;i?this.#l(n):a?this.#a(e,t):this.#i(n);let o=t.protective||0;this.torso.rotation.x+=o*.2,this.head.rotation.x+=o*.25;for(let e of[this.armL,this.armR])e.sh.rotation.z*=1-o*.7,e.el.rotation.x+=(-1.6-e.el.rotation.x)*o;this.fall=t.fall?td(t.fall.time,t.fall.motion):null,this.fall?gd(this,this.fall):t.shakeTime!=null&&yd(this,t.shakeTime);let s=new L(0,0,1);this.kneeOut=i?this.seat.kneeOut??.45:a?this.skiPose.x.kneeOut:.12,this.kneeShift=a?this.skiPose.x.kneeShift:0;for(let e=0;e<2;e++){let t=e===0?1:-1,n=new L(.12*t,0,0).applyEuler(this.hips.rotation).add(this.hips.position),r=this.feet[e].position.clone().add(new L(0,.15,0)),i=.3,a=n.clone().sub(r),o=Math.min(a.length(),2*i-.001),c=r.clone().addScaledVector(a.normalize(),o/2),l=s.clone().addScaledVector(a,-s.dot(a)).normalize();l.x+=t*this.kneeOut+this.kneeShift,l.normalize();let u=c.addScaledVector(l,Math.sqrt(i*i-(o/2)**2));this.thighs[e].set(u,n),this.shins[e].set(r,u),this.knees[e].position.copy(u),this.cuffs[e].position.copy(r).add(new L(0,.02,0))}i&&(this.#f(this.armL,this.seat.grips[0],1),this.#f(this.armR,this.seat.grips[1],-1)),this.reach&&this.reachAt.copy(this.reach),this.reachW+=((this.reach&&!i?1:0)-this.reachW)*(1-Math.exp(-e*6)),this.reachW<.001&&(this.reachW=0),this.throwT!==null&&(this.throwT+=e,(this.throwT>=kt.length||i)&&(this.throwT=null)),this.throwT!==null&&this.locomotion===`ride`?this.#u(this.throwT):this.reachW>0&&this.locomotion===`ride`&&this.#d(),this.body.rotation.x=0,this.fall?hd(this.edge,this.fall):Sd(this.edge,t.roll??n.tumble,.65);let c=this.locomotion===`walk`||this.locomotion===`act`,l=c||i||a&&!this.fall?Math.PI:Math.PI/2;this.body.rotation.y+=(l-this.body.rotation.y)*Math.min(1,e/.08),(c||i)&&(this.edge.rotation.set(0,0,0),this.edge.position.set(0,0,0)),this.skiHands=a&&!this.fall?[this.#s(this.armL,this.skiHand[0]),this.#s(this.armR,this.skiHand[1])]:null,this.model?.update(e,this,this.locomotion,t.speed||0),a&&this.#o()}clearGround(e,t=!1){let n=Cd(this.root,e,t),r=this.fall?.hands;return r&&this.model&&(r[0][0]>0||r[1][0]>0)&&(r.forEach((t,n)=>{t[0]>0&&this.model.plantHand(_d(this.root,t,e),t[0],n?`Right`:`Left`)}),Cd(this.root,e)),n}#i(e){this.#t(),this.edge.rotation.z=e.lean;let t=Math.min(1,e.crouch+e.air*.35),n=.76-t*.24;this.hips.position.set(.02,n,-.1-t*.08),this.hips.rotation.set(0,.3+e.twist*.3,0),this.torso.rotation.set(.45+t*.45,.25+e.twist*.25,0),this.head.rotation.set(-.3-t*.35,.55-e.twist*.3,0);let r=Math.sin(this.t*2.1)*.05,i=e.air,a=this.armL,o=this.armR;a.sh.rotation.set(-.5-e.lean*.6-i*.6,0,1.15-i*.5+r),a.el.rotation.set(-.35,0,.1),o.sh.rotation.set(-.9+e.lean*.5-i*.4,0,-.75+i*.2-r),o.el.rotation.set(-1-i*.4,0,-.2)}#a(e,t){let n=this.skiPose.update(e,{lean:t.lean||0,speed:t.speed||0,air:!!t.air,brake:!!t.brake,tuck:!!t.tuck,charge:t.charge||0,slip:t.slip||0,landing:t.landing||0},this.t);this.edge.rotation.z=n.roll,this.hips.position.set(n.px,n.py,n.pz),this.hips.rotation.set(n.pPitch,n.pYaw,n.pRoll),this.torso.rotation.set(n.tPitch,n.tYaw,n.tRoll),this.head.rotation.set(n.hPitch,n.hYaw,n.hRoll);let r=Math.tan(n.roll);for(let[e,t]of[[this.feet[0],`l`],[this.feet[1],`r`]]){let i=n[t+`x`];e.position.set(i,wd.sole+n[t+`y`]+i*r,n[t+`z`]),e.rotation.set(n[t+`Pitch`],n[t+`Yaw`],n[t+`Roll`],`YXZ`)}let i=this.hips.position;this.#f(this.armL,Jd.set(n.hlx,n.hly,n.hlz).add(i),1),this.#f(this.armR,Jd.set(n.hrx,n.hry,n.hrz).add(i),-1)}#o(){let e=this.skiPose.x,t=this.fall?0:Math.tan(e.roll);this.body.updateMatrixWorld(!0);for(let[n,r,i]of[[0,`Left`,`pl`],[1,`Right`,`pr`]]){let a=this.poles[n],o=this.body.worldToLocal(this.#c(r,Jd)),s=Yd.set(e[i+`x`],e[i+`y`],e[i+`z`]).sub(o).normalize(),c=Td.length,l=(o.x+s.x*c)*t;if(o.y+s.y*c<l){let e=Math.hypot(s.x,s.z)||1,t=Math.max(-1,(l-o.y)/c),n=Math.sqrt(1-t*t)/e;s.set(s.x*n,t,s.z*n)}a.position.copy(o),a.quaternion.setFromUnitVectors(qd,s)}}#s(e,t){return e.el.updateWorldMatrix(!0,!1),this.body.worldToLocal(e.el.localToWorld(t.set(0,-.25,.01)))}#c(e,t){if(this.model)return this.model.palmAt(e,t);let n=(e===`Left`?this.armL:this.armR).el;return n.updateWorldMatrix(!0,!1),n.localToWorld(t.set(0,-.25,.01))}#l(e){let t=this.seat,{build:n}=this;this.hips.position.copy(t.hips),this.hips.position.y+=n.seat;let r=t.tilt,i=t.look;this.hips.rotation.set(r?.x??0,r?.y??0,r?.z??0);let a=t.fold??$d(n,this.hips.position,t.grips[0]);this.torso.rotation.set(a,e.twist*.12,-e.lean),this.head.rotation.set(-a*.85+(i?.x??0),-e.twist*.15+(i?.y??0),e.lean*.6+(i?.z??0)),this.feet.forEach((e,n)=>{e.position.copy(t.feet[n]),e.rotation.set(0,t.toes?.[n]??0,0)})}startThrow(){return this.locomotion!==`ride`&&this.locomotion!==`walk`?!1:(this.throwT=0,!0)}hand(e=new L){return this.model?this.model.handAt(e):(this.armR.el.updateWorldMatrix(!0,!1),this.armR.el.localToWorld(e.set(0,-.25,.01)))}#u(e){let t=Ot(At,e),n=Dt(e),{sh:r,el:i}=this.armR;this.torso.rotation.y+=t.turn*n,this.head.rotation.y-=t.turn*n*.7;let a=r.quaternion.clone(),o=i.quaternion.clone();this.root.updateMatrixWorld(!0),this.body.updateMatrixWorld(!0);let s=this.body.worldToLocal(r.getWorldPosition(Jd)).add(new L().fromArray(t.rh));this.#f(this.armR,s,-1),r.quaternion.slerpQuaternions(a,r.quaternion.clone(),n),i.quaternion.slerpQuaternions(o,i.quaternion.clone(),n)}#d(){let e=this.reachW,{sh:t,el:n}=this.armR;this.torso.rotation.x+=.25*e;let r=t.quaternion.clone(),i=n.quaternion.clone();this.root.updateMatrixWorld(!0),this.#f(this.armR,this.body.worldToLocal(Jd.copy(this.reachAt)),-1),t.quaternion.slerpQuaternions(r,t.quaternion.clone(),e),n.quaternion.slerpQuaternions(i,n.quaternion.clone(),e)}#f(e,t,n){this.body.updateMatrixWorld(!0);let r=this.body.worldToLocal(e.sh.getWorldPosition(new L)),i=t.clone().sub(r),a=Math.min(i.length(),.4699);i.normalize();let o=(Xd**2-Zd**2+a**2)/(2*a),s=Math.sqrt(Math.max(0,Xd**2-o**2)),c=new L(n*.8,-1,-.4);c.addScaledVector(i,-c.dot(i)).normalize();let l=r.clone().addScaledVector(i,o).addScaledVector(c,s),u=r.clone().addScaledVector(i,a),d=this.hips.quaternion.clone().multiply(this.torso.quaternion).invert();e.sh.quaternion.setFromUnitVectors(qd,l.clone().sub(r).normalize().applyQuaternion(d)),d.premultiply(e.sh.quaternion.clone().invert()),e.el.quaternion.setFromUnitVectors(qd,u.sub(l).normalize().applyQuaternion(d))}},rf=9.81,af={easy:10,novice:10,intermediate:14,advanced:18,expert:21,freeride:21},of=[`#d9604c`,`#4f8fd6`,`#f0c24a`,`#6fae78`,`#b678c9`,`#efe9dc`,`#ff8a3d`,`#2f8f9d`],sf=[`#ee4f2c`,`#23303a`,`#4f8fd6`,`#f0c24a`,`#efe9dc`],cf=new a(`#efe9dc`).getHex(),lf=new a(`#ee4f2c`).getHex(),uf=6;function df(e,t,n){let r=t.points;e.heightAt(r[0][0],r[0][1])<e.heightAt(r[r.length-1][0],r[r.length-1][1])&&(r=[...r].reverse());let i=[],a=[];for(let e=0;e<r.length-1;e++){let t=Math.hypot(r[e+1][0]-r[e][0],r[e+1][1]-r[e][1]);for(let n=0;n<t;n+=uf)i.push(r[e][0]+(r[e+1][0]-r[e][0])*n/t),a.push(r[e][1]+(r[e+1][1]-r[e][1])*n/t)}let o=r[r.length-1];i.push(o[0]),a.push(o[1]);let s=[0];for(let e=1;e<i.length;e++)s.push(s[e-1]+Math.hypot(i[e]-i[e-1],a[e]-a[e-1]));let c=s[s.length-1],l=Math.max(2,Math.round(c/uf)+1),u=new Float32Array(l),d=new Float32Array(l),f=0;for(let e=0;e<l;e++){let t=e/(l-1)*c;for(;f<s.length-2&&s[f+1]<t;)f++;let n=(t-s[f])/(s[f+1]-s[f]||1);u[e]=i[f]+(i[f+1]-i[f])*n,d[e]=a[f]+(a[f+1]-a[f])*n}let p=e.heightAt(u[0],d[0]),m=e.heightAt(u[l-1],d[l-1]);return{index:n,run:t,X:u,Z:d,n:l,step:c/(l-1),length:c,drop:p-m,next:[]}}function ff(e){let t=new te(new ht(.26,.45,3,8).translate(0,.78,0),H({color:`#ffffff`},{rim:1,hatch:0}),e),n=new te(new j(.24,10,8).translate(0,1.36,0),H({color:`#f6dcc6`},{rim:1,hatch:0}),e),r=new te(new W(.3,.06,1.56).translate(0,.03,0),H({color:`#ffffff`},{hatch:0}),e);for(let e of[t,n,r])e.frustumCulled=!1,e.castShadow=!0;return{body:t,head:n,board:r}}var pf=class{constructor(e,t,{count:n=40,scale:r=7,lodDistance:i=2600}={}){this.hf=e,this.scale=r,this.lodDistance=i,this.group=new G,this.full=new G,this.group.add(this.full),this.paths=t.map((t,n)=>df(e,t,n)).filter(e=>e.length>180&&e.drop>30);for(let e of this.paths){let t=e.X[e.n-1],n=e.Z[e.n-1];for(let r of this.paths)r!==e&&Math.hypot(r.X[0]-t,r.Z[0]-n)<90&&e.next.push(r)}this.totalLength=this.paths.reduce((e,t)=>e+t.length,0),this.proxy=ff(n),this.group.add(this.proxy.body,this.proxy.head,this.proxy.board);let o=of.map(e=>H({color:e},{rim:1,hatch:0})),s=sf.map(e=>H({color:e},{rim:1,hatch:0}));this.skiers=[];for(let e=0;e<n;e++){let t=e%of.length,n=e*3%sf.length;this.proxy.body.setColorAt(e,new a(of[t])),this.proxy.board.setColorAt(e,new a(sf[n]));let r={i:e,rider:null,jacketMat:o[t],boardMat:s[n],pos:new L,quat:new We,yaw:0,yawRate:0,lean:0,pop:1,path:null,s:0,phase:0,amp:0,wave:0,speed:0};this.#t(r,this.#e(),!0),this.skiers.push(r)}}#e(){let e=Math.random()*this.totalLength;for(let t of this.paths)if((e-=t.length)<=0)return t;return this.paths[0]}#t(e,t,n=!1,r=!1){e.path=t,e.s=n?Math.random()*t.length*.9:0,r||(e.phase=Math.random()*Math.PI*2,e.pop=+!!n),e.amp=6+Math.random()*6,e.wave=70+Math.random()*60,e.speed=(af[t.run.difficulty]||14)*(.8+Math.random()*.4),e.yaw=NaN}#n(e,t,n){let r=Math.min(Math.max(t/e.step,0),e.n-1.001),i=Math.floor(r),a=r-i;n.x=e.X[i]+(e.X[i+1]-e.X[i])*a,n.z=e.Z[i]+(e.Z[i+1]-e.Z[i])*a;let o=Math.hypot(e.X[i+1]-e.X[i],e.Z[i+1]-e.Z[i])||1;return n.tx=(e.X[i+1]-e.X[i])/o,n.tz=(e.Z[i+1]-e.Z[i])/o,n}update(e,t){let n={},r=this.hf,i=new nt,a=new L,o=new L,s=new L,c=new L,l=new L;for(let u of this.skiers){let d=u.path;u.s+=u.speed*e,u.phase+=u.speed*e/u.wave*Math.PI*2;let f=Math.min(1,u.s/40,(d.length-u.s)/40);if(u.s>=d.length){d.next.length&&Math.random()<.75?this.#t(u,d.next[Math.floor(Math.random()*d.next.length)],!1,!0):this.#t(u,this.#e());continue}u.pop=Math.min(1,u.pop+e*2.5);let p=d.next.length?1:Math.min(1,(d.length-u.s)/25);this.#n(d,u.s,n);let m=Math.PI*2/u.wave,h=u.amp*f*Math.sin(u.phase),g=u.amp*f*m*Math.cos(u.phase),_=-n.tz,v=n.tx;u.pos.set(n.x+_*h,0,n.z+v*h),u.pos.y=r.heightAt(u.pos.x,u.pos.z);let y=n.tx+_*g,b=n.tz+v*g,x=Math.atan2(-y,-b);if(!Number.isNaN(u.yaw)){let t=x-u.yaw;t=Math.atan2(Math.sin(t),Math.cos(t)),u.yawRate+=(t/Math.max(e,1e-4)-u.yawRate)*(1-Math.exp(-e*6))}u.yaw=x,u.lean=I.clamp(Math.atan2(u.speed*u.yawRate,rf),-.9,.9),r.normalAt(u.pos.x,u.pos.z,o),s.set(y,0,b).normalize(),s.addScaledVector(o,-s.dot(o)).normalize(),c.crossVectors(s,o),i.makeBasis(c,o,l.copy(s).negate()),u.quat.setFromRotationMatrix(i);let S=this.scale*u.pop*p,C=t.position.distanceTo(u.pos)<this.lodDistance;C&&!u.rider&&this.#r(u),!C&&u.rider&&this.#i(u),u.rider?(u.rider.root.position.copy(u.pos),u.rider.root.quaternion.copy(u.quat),u.rider.root.scale.setScalar(Math.max(S,.001)),u.rider.update(e,{crouch:.35+Math.abs(u.lean)*.4,lean:u.lean,twist:Math.sin(u.phase)*.3,air:!1}),a.setScalar(0)):a.setScalar(S),i.compose(u.pos,u.quat,a),this.proxy.body.setMatrixAt(u.i,i),this.proxy.head.setMatrixAt(u.i,i),this.proxy.board.setMatrixAt(u.i,i)}for(let e of Object.values(this.proxy))e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}#r(e){let t=(this.pool||=[]).pop()||new nf;t.root.traverse(t=>{if(!t.isMesh)return;t.userData.baseMat||=t.material;let n=t.userData.baseMat.color?.getHex();t.material=n===cf?e.jacketMat:n===lf?e.boardMat:t.userData.baseMat}),e.rider=t,this.full.add(t.root)}#i(e){this.full.remove(e.rider.root),this.pool.push(e.rider),e.rider=null}get nearCount(){return this.full.children.length}},mf={丁香道:[`Dingxiang`,`Lilac`],不冻泉道:[`Budongquan`,`Unfrozen Spring`],也麦盖特道:[`Yemaigaite`],云杉道:[`Yunshan`,`Spruce`],云湖道:[`Yunhu`,`Cloud Lake`],云霄峰道:[`Yunxiaofeng`,`Sky-High Peak`],五彩滩道:[`Wucaitan`,`Five-Colour Shoal`],五指泉道:[`Wuzhiquan`,`Five-Finger Spring`],伊雷木湖道:[`Yileimuhu`,`Yileimu Lake`],冷杉道:[`Lengshan`,`Fir`],卧龙湾道:[`Wolongwan`,`Sleeping Dragon Bay`],友谊峰道:[`Youyifeng`,`Friendship Peak`],双湖道:[`Shuanghu`,`Twin Lakes`],可可托海道:[`Keketuohai`,`Koktokay`],吉克普林道:[`Jikepulin`],响泉道:[`Xiangquan`,`Echoing Spring`],喀纳斯道:[`Kanasi`,`Kanas`],圣泉道:[`Shengquan`,`Holy Spring`],将军山道:[`Jiangjunshan`,`General's Mountain`],山楂道:[`Shanzha`,`Hawthorn`],巴丹莉道:[`Badanli`],干湖道:[`Ganhu`,`Dry Lake`],月亮湾道:[`Yueliangwan`,`Moon Bay`],望泉道:[`Wangquan`,`Spring View`],柳兰道:[`Liulan`,`Fireweed`],泰加林道:[`Taijialin`,`Taiga`],清泉道:[`Qingquan`,`Clear Spring`],滴水泉道:[`Dishuiquan`,`Dripping Spring`],狼山道:[`Langshan`,`Wolf Mountain`],白哈巴道:[`Baihaba`],白杨道:[`Baiyang`,`Poplar`],白桦道:[`Baihua`,`Birch`],白沙湖道:[`Baishahu`,`White Sand Lake`],白湖道:[`Baihu`,`White Lake`],盘古道:[`Pangu`],石泉道:[`Shiquan`,`Stone Spring`],神仙湾道:[`Shenxianwan`,`Immortals' Bay`],神石城道:[`Shenshicheng`,`Stone City`],禾木道:[`Hemu`],红柳道:[`Hongliu`,`Red Willow`],美丽峰道:[`Meilifeng`,`Beautiful Peak`],芍药道:[`Shaoyao`,`Peony`],花楸道:[`Huaqiu`,`Rowan`],蔷薇道:[`Qiangwei`,`Wild Rose`],蝴蝶泉道:[`Hudiequan`,`Butterfly Spring`],谷帘泉道:[`Gulianquan`,`Curtain Spring`],贾登峪道:[`Jiadengyu`],连接道:[`Lianjie`,`Connector`],野卡峡道:[`Yekaxia`,`Yeka Gorge`],金莲花道:[`Jinlianhua`,`Globeflower`],青格里道:[`Qinggeli`],静泉谷:[`Jingquangu`,`Quiet Spring Valley`],驼颈湾道:[`Tuojingwan`,`Camel's Neck Bay`],鸭泽湖道:[`Yazehu`,`Duck Marsh Lake`],黑湖道:[`Heihu`,`Black Lake`]},hf={easy:{label:`Easy`,color:`#4f8fd6`,rank:0},novice:{label:`Novice`,color:`#4f8fd6`,rank:0},intermediate:{label:`Intermediate`,color:`#d9534a`,rank:1},advanced:{label:`Advanced`,color:`#23303a`,rank:2},expert:{label:`Expert`,color:`#23303a`,rank:3},freeride:{label:`Freeride`,color:`#f08a24`,rank:3}},gf={gondola:`Gondola`,chair_lift:`Chairlift`,magic_carpet:`Magic carpet`,drag_lift:`Drag lift`,"t-bar":`T-bar`};function _f(e){let t=gf[e.type]||`Lift`,n=e.name&&e.name.match(/(\d+)号/);return{zh:e.name||`魔毯`,en:n?`${t} No. ${n[1]}`:t}}var vf=3;function yf(e,t,n,r){let i=[];for(let e=0;e<t.length-1;e++){let[n,r]=t[e],[a,o]=t[e+1],s=Math.hypot(a-n,o-r);for(let e=0;e<s;e+=8)i.push([n+(a-n)*e/s,r+(o-r)*e/s])}i.push(t[t.length-1]);let a=[],o=[],s=[],c=new L;i.forEach(([t,l],u)=>{let d=i[Math.max(0,u-1)],f=i[Math.min(i.length-1,u+1)],p=Math.hypot(f[0]-d[0],f[1]-d[1])||1,m=-(f[1]-d[1])/p,h=(f[0]-d[0])/p;for(let i of[-1,1]){let s=t+m*n*i,u=l+h*n*i;a.push(s,e.heightAt(s,u)+r,u),e.normalAt(s,u,c),o.push(c.x,c.y,c.z)}if(u){let e=u*2;s.push(e-2,e,e-1,e-1,e,e+1)}});let l=new z;return l.setAttribute(`position`,new F(a,3)),l.setAttribute(`normal`,new F(o,3)),l.setIndex(s),l}function bf(e,t,n){return H({color:e,transparent:t<1,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2-n,polygonOffsetUnits:-4-n*2,side:2},{hatch:0})}function xf(e,t,n,r=48){return Array.from({length:r+1},(i,a)=>[e+Math.cos(a/r*Math.PI*2)*n,t+Math.sin(a/r*Math.PI*2)*n])}function Sf(e,t,n,r){let i=r[0]-n[0],a=r[1]-n[1],o=((e-n[0])*i+(t-n[1])*a)/(i*i+a*a||1);return o=Math.max(0,Math.min(1,o)),Math.hypot(n[0]+i*o-e,n[1]+a*o-t)}var Cf=class{constructor(e,t,n,{lineHalf:r=7,liftCable:i}){this.hf=e,this.group=new G,this.hoverGroup=new G,this.pickGroup=new G,this.group.add(this.hoverGroup,this.pickGroup);let a=new Map;t.forEach((e,t)=>{let n=e.name||`#${t}`;a.has(n)||a.set(n,{key:n,kind:`run`,name:e.name,runs:[],difficulty:e.difficulty});let r=a.get(n);r.runs.push(e),(hf[e.difficulty]?.rank??1)>(hf[r.difficulty]?.rank??1)&&(r.difficulty=e.difficulty)}),this.groups=[...a.values()];for(let t of this.groups){let n=0,r=-1/0,i=1/0,a=new Set;for(let o of t.runs)a.add(o.difficulty),o.points.forEach((t,a)=>{a&&(n+=Math.hypot(t[0]-o.points[a-1][0],t[1]-o.points[a-1][1]));let s=e.heightAt(t[0],t[1]);r=Math.max(r,s),i=Math.min(i,s)});Object.assign(t,{length:n,top:r,bottom:i,difficulties:[...a]})}let o=this.lineMats={};for(let[e,t]of Object.entries(hf))o[e]=bf(t.color,.9,0);for(let t of this.groups)for(let n of t.runs){let t=new U(yf(e,n.points,r,vf),o[n.difficulty]||o.intermediate);t.renderOrder=1,this.group.add(t)}o.lift=bf(`#f0c24a`,.9,0);for(let t of n){let n=new U(yf(e,[t.points[0],t.points[t.points.length-1]],r*.6,vf),o.lift);n.renderOrder=1,this.group.add(n)}this.lifts=n.map(t=>{let n=t.points[0],r=t.points[t.points.length-1],a=e.heightAt(n[0],n[1]),o=e.heightAt(r[0],r[1]),s=i(t);return{kind:`lift`,lift:t,..._f(t),A:new L(n[0],a+s,n[1]),B:new L(r[0],o+s,r[1]),length:Math.hypot(r[0]-n[0],r[1]-n[1],o-a),rise:Math.abs(o-a),bottomY:Math.min(a,o),topY:Math.max(a,o)}}),this.hot=null,this.picked=null,this.hiMats={casing:bf(`#f0c24a`,1,1),line:Object.fromEntries(Object.entries(hf).map(([e,t])=>[e,bf(t.color,1,2)])),lift:bf(`#23303a`,1,2)}}setLineOpacity(e){for(let t of Object.values(this.lineMats))t.opacity=e}pickGround(e,t){let n=t,r=new L;if(n.containsPoint(e.origin))r.copy(e.origin);else if(!e.intersectBox(n,r))return null;let i=this.hf,a=e.direction,o=0,s=0,c=r.clone();for(;o<3e4;){if(r.copy(c).addScaledVector(a,o),!i.inside(r.x,r.z)){if(o>0)return null}else if(r.y<i.heightAt(r.x,r.z)){let e=s,t=o;for(let n=0;n<8;n++){let n=(e+t)/2;r.copy(c).addScaledVector(a,n),r.y<i.heightAt(r.x,r.z)?t=n:e=n}return r.copy(c).addScaledVector(a,t)}if(r.y<n.min.y)return null;s=o,o+=12}return null}nearestRun(e,t,n){let r=null,i=n;for(let n of this.groups)for(let a of n.runs)for(let o=0;o<a.points.length-1;o++){let s=Sf(e,t,a.points[o],a.points[o+1]);s<i&&(i=s,r=n)}return r}nearestLift(e,t,n,r,i){let a=new L,o=new L,s=null,c=i;for(let i of this.lifts){if(a.copy(i.A).project(t),o.copy(i.B).project(t),a.z>1||o.z>1)continue;let l=(a.x+1)*n/2,u=(1-a.y)*r/2,d=(o.x+1)*n/2,f=(1-o.y)*r/2,p=Sf(e.x,e.y,[l,u],[d,f]);p<c&&(c=p,s=i)}return s}setHot(e){this.#e(`hot`,e)}setPicked(e){this.#e(`picked`,e)}#e(e,t){if(t===this[e])return;this[e]=t;let n=e===`hot`?this.hoverGroup:this.pickGroup;for(let e of[...n.children])e.geometry.dispose(),n.remove(e);if(!t)return;let r=(e,t,r,i)=>{let a=new U(yf(this.hf,e,t,4),this.hiMats.casing),o=new U(yf(this.hf,e,r,5),i);a.renderOrder=2,o.renderOrder=3,n.add(a,o)};if(t.kind===`run`){for(let e of t.runs)r(e.points,30,13,this.hiMats.line[e.difficulty]||this.hiMats.line.intermediate);return}let i=t.kind===`station`?t.lift.lift:t.kind===`lift`?t.lift:null;i&&r([i.points[0],i.points[i.points.length-1]],22,11,this.hiMats.lift),t.ring&&r(xf(t.x,t.z,t.ring),12,5,this.hiMats.lift)}describe(e){if(e.kind===`station`){let t=e.lift;return{badge:`lift`,zh:`${t.zh} · ${e.end===`bottom`?`下站`:`上站`}`,en:`${t.en} · ${e.end} station`,rows:[[`${Math.round(e.y).toLocaleString()} m`,``],[e.end===`bottom`?`up to ${Math.round(t.topY).toLocaleString()} m`:`from ${Math.round(t.bottomY).toLocaleString()} m`,``]]}}if(e.kind===`lift`)return{badge:`lift`,zh:e.zh,en:e.en,rows:[[`${Math.round(e.length).toLocaleString()} m`,`long`],[`${Math.round(e.rise).toLocaleString()} m`,`rise`],[`${Math.round(e.bottomY).toLocaleString()} → ${Math.round(e.topY).toLocaleString()} m`,``]]};let t=e.name&&mf[e.name],n=hf[e.difficulty]||hf.intermediate,r=e.difficulties.map(e=>hf[e]||hf.intermediate).sort((e,t)=>t.rank-e.rank).map(e=>e.label);return{badge:e.difficulty,zh:e.name||`Unnamed run`,en:t?t[1]?`${t[0]} · ${t[1]}`:t[0]:e.name?``:`No name in OpenStreetMap`,rows:[[[...new Set(r)].join(` / `)||n.label,``],[`${Math.round(e.length).toLocaleString()} m`,`long`],[`${Math.round(e.top-e.bottom).toLocaleString()} m`,`drop`]]}}},wf=new Set([`bottom`,`top`,`ride`]);function Tf(e){let[t,n,r]=String(e??``).split(`:`);return n?t===`run`||t===`lodge`?{kind:t,id:n}:t===`lift`?{kind:t,id:n,end:wf.has(r)?r:`bottom`}:null:null}function Ef(e,t,n){let r=t.find(e=>String(e.id)===String(n));if(!r)return null;let i=r.name?t.filter(e=>e.name===r.name):[r],a=null;for(let t of i)for(let n of[0,t.points.length-1]){let[r,i]=t.points[n],o=e.heightAt(r,i);(!a||o>a.y)&&(a={run:t,x:r,y:o,z:i,points:n?[...t.points].reverse():t.points})}return a}var Df=`hemu-ski.you`,Of=6e5;function kf(e){let[t,n,r,i]=String(e??``).split(`,`);return[t,n].every(e=>e!==``&&Number.isFinite(+e))?{x:+t,z:+n,bearing:+r||0,lift:i||null}:null}function Af(e){let t=(e,t)=>{try{let{at:n,t:r}=JSON.parse(e);return Date.now()-r<t?kf(n):null}catch{return null}};window.addEventListener(`storage`,n=>{n.key===Df&&e(n.newValue?t(n.newValue,1/0):null)});try{return t(localStorage.getItem(Df),Of)}catch{return null}}var jf=`hemu-ski.arriving`;function Mf(e){try{sessionStorage.setItem(jf,e)}catch{}}function Nf(){try{let e=sessionStorage.getItem(jf);return sessionStorage.removeItem(jf),e}catch{return null}}var Pf={run:`Run`,lift:`Lift`,station:`Lift station`,lodge:`Service centre`,you:`You`},Ff=e=>`${Math.round(e).toLocaleString()} m`,If=class{constructor({hf:e,runs:t,runMap:n,lodges:r,stations:i,you:a,describe:o,onSelect:s,onLook:c,onGo:l,onBack:u}){Object.assign(this,{hf:e,runs:t,runMap:n,lodges:r,stations:i,you:a,describe:o,onSelect:s,onLook:c,onGo:l,onBack:u}),this.selected=null,this.actions=[],this.el=document.getElementById(`pick`),this.acts=this.el.querySelector(`.acts`),this.el.querySelector(`.x`).addEventListener(`click`,()=>this.select(null)),this.acts.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&this.#n(this.actions[+t.dataset.i])}),window.addEventListener(`keydown`,e=>{!this.selected||e.metaKey||e.ctrlKey||e.altKey||(e.code===`Escape`?this.select(null):e.code===`Enter`&&!e.target.closest?.(`button, a`)&&(e.preventDefault(),this.#n(this.actions[0])))})}select(e){e!==this.selected&&(this.selected=e,this.runMap.setPicked(e),this.#r(),this.el.classList.toggle(`hidden`,!e),document.body.classList.toggle(`picking`,!!e),this.onSelect?.(e),e&&this.#e(e))}refresh(){this.selected&&(this.runMap.setPicked(null),this.runMap.setPicked(this.selected),this.#e(this.selected))}#e(e){let t=this.describe(e),{what:n,acts:r}=this.#t(e);this.actions=r;let i=e=>this.el.querySelector(e);i(`.tab`).textContent=Pf[e.kind],i(`.badge`).className=`badge ${t.badge}`,i(`.zh`).textContent=t.zh,i(`.en`).textContent=t.en,i(`.en`).classList.toggle(`hidden`,!t.en),i(`.rows`).innerHTML=t.rows.map(([e,t])=>`<span><b>${e}</b>${t?` ${t}`:``}</span>`).join(``),i(`.what`).textContent=n,this.acts.innerHTML=r.map((e,t)=>`<button type="button" data-i="${t}" class="${t===0?`go`:e.look?`look`:``}">${e.label}${e.key||e.back?` ▸`:``}</button>`).join(``)}#t(e){let t={label:`Look closer`,look:!0},n=e.kind===`station`?e.lift.lift.id:e.lift?.id;switch(e.kind){case`run`:{let n=Ef(this.hf,this.runs,e.runs[0].id);return{what:`You drop in at the top, ${Ff(n.y)} up, and ride it down.`,acts:[{label:`Ride it from the top`,key:`run:${n.run.id}`},t]}}case`you`:return{what:e.outside?`You’re past the edge of the table, out this way.`:`Where you are in the game.`,acts:[...this.onBack?[{label:`Back to riding`,back:!0}]:[],t]};case`lodge`:return{what:`Tickets, food and rentals. Board ${e.lift} at its station out front, or ride off from the door.`,acts:[{label:`Go to the hall`,key:`lodge:${e.id}`},t]};case`station`:return e.end===`bottom`?{what:`Board here for the ride up to ${Ff(e.lift.topY)}, or ride off from the station.`,acts:[{label:`Go to the station`,key:`lift:${n}:bottom`},{label:`Board and ride up`,key:`lift:${n}:ride`},t]}:{what:`Step off at ${Ff(e.y)} and take any run down from here.`,acts:[{label:`Go to the top station`,key:`lift:${n}:top`},t]};default:{let r=e.lift.type===`magic_carpet`;return{what:r?`A beginners’ belt on the nursery slope.`:`Runs from ${Ff(e.bottomY)} up to ${Ff(e.topY)}.`,acts:[{label:r?`Go to the bottom`:`Bottom station`,key:`lift:${n}:bottom`},{label:r?`Go to the top`:`Top station`,key:`lift:${n}:top`},t]}}}}#n(e){e&&(e.look?this.onLook(this.selected):e.back?this.onBack(this.selected):this.onGo(e.key,this.itemOf(e.key)??this.selected))}keyOf(e){return e.kind===`you`?`you`:e.kind===`run`?`run:${Ef(this.hf,this.runs,e.runs[0].id).run.id}`:e.kind===`lodge`?`lodge:${e.id}`:e.kind===`station`?`lift:${e.lift.lift.id}:${e.end}`:`lift:${e.lift.id}`}itemOf(e){if(e===`you`)return this.you();let t=Tf(e);if(!t)return null;if(t.kind===`run`)return this.runMap.groups.find(e=>e.runs.some(e=>String(e.id)===t.id))??null;if(t.kind===`lodge`)return this.lodges.find(e=>e.id===t.id)??null;if(e.split(`:`)[2]){let e=t.end===`ride`?`bottom`:t.end,n=this.stations.find(n=>String(n.lift.lift.id)===t.id&&n.end===e);if(n)return n}return this.runMap.lifts.find(e=>String(e.lift.id)===t.id)??null}focus(t,{dive:n=!1}={}){let r=new L,i=(e,t)=>r.set(e,this.hf.heightAt(e,t),t);switch(t.kind){case`run`:{if(n){let e=Ef(this.hf,this.runs,t.runs[0].id);return{point:i(e.x,e.z),size:400}}let r=new Oe;for(let n of t.runs)for(let[t,i]of n.points)r.expandByPoint(new e(t,i));let a=r.getCenter(new e),o=r.getSize(new e);return{point:i(a.x,a.y),size:Math.max(o.x,o.y)}}case`lift`:{if(n)return{point:i(t.lift.points[0][0],t.lift.points[0][1]),size:400};let e=t.lift.points[0],r=t.lift.points[t.lift.points.length-1];return{point:i((e[0]+r[0])/2,(e[1]+r[1])/2),size:t.length}}default:return{point:i(t.x,t.z),size:t.ring*6}}}#r(){let e=new URL(location.href);this.selected?e.searchParams.set(`at`,this.keyOf(this.selected)):e.searchParams.delete(`at`),e.search=e.searchParams.toString().replaceAll(`%3A`,`:`).replaceAll(`%2C`,`,`),history.replaceState(history.state,``,e)}},Lf=60,Rf=16,zf=2500,Bf=.35,Vf=40,Hf=class{constructor(t,r,i){Object.assign(this,{hf:t,tag:r}),this.group=new G,this.group.visible=!1,this.item={kind:`you`,x:0,y:0,z:0,ring:42,top:new L,bearing:0,lift:null,outside:!1},this.reach=Rf,this.normal=new L(0,1,0);let a=H({color:`#f0c24a`},{hatch:0}),o=(e,t)=>H({color:e,polygonOffset:!0,polygonOffsetFactor:-2-t,polygonOffsetUnits:-4-t*2},{hatch:0}),s=new V({color:`#23303a`,side:1}),l=e=>new P(e,Lf,24,1,!0).rotateX(Math.PI).translate(0,Lf/2,0);this.pin=new G;let u=new U(l(Rf*.7),a),d=new U(l(13.44).translate(0,-2.24*1.5,0),s);this.head=new G,this.head.position.y=Lf;let f=new U(new Ce(Rf*.42,24),H({color:`#fbfaf5`},{hatch:0}));f.position.z=Rf*1.01,this.head.add(new U(new j(Rf,32,16),a),new U(new j(18.240000000000002,32,16),s),f),this.pin.add(u,d,this.head),this.pin.visible=!1;let p=new w(`#ffffff`,be.uSunIntensity.value);p.position.copy(i),this.overlay=new c,this.overlay.add(this.pin,p,p.target);let m=new Ue([[0,11],[7,-8],[0,-4],[-7,-8]].map(([t,n])=>new e(t,n))),h=new n(m).scale(Rf*.22,Rf*.22,1).rotateX(-Math.PI/2);this.arrow=new G;let g=new U(h,o(`#23303a`,0));g.scale.setScalar(1.3);let _=new U(h,o(`#f0c24a`,1));_.position.y=.5,this.heading=new G,this.heading.add(g,_),this.arrow.add(this.heading),this.group.add(this.arrow)}get shown(){return this.group.visible}set(e){if(this.group.visible=this.pin.visible=!!e,this.tag.classList.toggle(`hidden`,!e),!e)return;let{hf:t,item:n}=this,[r,i]=t.center,a=t.half-Vf;n.outside=!t.inside(e.x,e.z,Vf),n.x=I.clamp(e.x,r-a,r+a),n.z=I.clamp(e.z,i-a,i+a),n.y=t.heightAt(n.x,n.z),n.bearing=e.bearing,n.lift=e.lift,this.group.position.set(n.x,n.y,n.z),t.normalAt(n.x,n.z,this.normal),this.arrow.quaternion.setFromUnitVectors(o.DEFAULT_UP,this.normal),this.heading.rotation.y=-I.degToRad(e.bearing)}update(e,t,n,r){if(!this.group.visible)return;let i=Math.max(Bf,e.position.distanceTo(this.group.position)/zf),a=(Math.sin(t*2.4)*.5+.5)*6;this.pin.scale.setScalar(i),this.pin.position.copy(this.group.position),this.pin.position.y+=a*i,this.arrow.scale.setScalar(i),this.arrow.position.copy(this.normal).multiplyScalar(2*i),this.head.quaternion.copy(e.quaternion),this.item.top.set(this.item.x,this.item.y+(Lf/2+a)*i,this.item.z),this.reach=46*i;let o=this.item.top.clone().setY(this.item.y+(Lf+a+Rf*1.3)*i).project(e),s=o.z<1&&Math.abs(o.x)<1.2&&Math.abs(o.y)<1.2;this.tag.classList.toggle(`hidden`,!s),s&&(this.tag.style.transform=`translate(${(o.x+1)*n/2}px, ${(1-o.y)*r/2}px) translate(-50%, -100%)`)}drawOver(e,t){this.pin.visible&&(e.autoClear=!1,e.clearDepth(),e.render(this.overlay,t),e.autoClear=!0)}};Object.fromEntries(Object.entries({cream:`#f7f2e4`,slot:`#4d6467`,top:`#efe9d8`,left:`#ddd5c1`,right:`#bfb6a1`,bottom:`#a39a87`,back:`#8f877a`}).map(([e,t])=>[e,new a(t)]));function Uf(e){let t=[];for(let n=0;n<9;n++){let r=document.createElement(`i`);e.appendChild(r),t.push({el:r,a:n/9*Math.PI*2+Math.sin(n*7.1)*.4,r:.55+n*37%10/30,s:.75+n*53%10/25})}return n=>{if(e.style.visibility=n>0?`visible`:`hidden`,n<=0)return;let r=Math.max(window.innerWidth,window.innerHeight);for(let e of t){let t=(1-n)*e.r*r;e.el.style.transform=`translate(${Math.cos(e.a)*t}px, ${Math.sin(e.a)*t}px) scale(${e.s*(.5+n*1.1)})`}e.style.opacity=Math.min(1,n*2.5),e.style.backgroundColor=`rgba(251, 250, 245, ${I.smoothstep(n,.7,1)})`}}var Wf=`./models/polyfork/`,Gf={"alpine-chalet-47d59e":7.42,"alpine-hay-barn-3965e5":4.28,"mountain-refuge-hut-32ab1e":4.41,"piste-patrol-hut-17a90a":4.66,"race-start-hut-c6d405":3.46,"ski-lift-base-station-924491":8.07,"lift-top-station-46d313":11.06,"lift-pylon-4e4385":9.68,"gondola-cabin-c05230":4.55,"chairlift-chair-2beb2b":3.95,"snow-laden-spruce-36716e":6.06,"windblown-larch-abb99c":7,"bare-mountain-rowan-10e72e":5.03,"dwarf-pine-mat-faee77":1.29,"boulder-field-cluster-08e364":1.45,"rock-outcrop-158ac3":2.05,"scree-heap-42cce5":.52,"stone-cairn-a9bf48":1.37,"piste-marker-pole-7480c3":2.2,"slalom-gate-7f4875":1.97,"snow-cannon-cc3ea5":4.2,"safety-net-run-ecf381":1.35,"snow-fence-run-55a09a":1.67,"avalanche-barrier-run-02a615":3.02,"piste-floodlight-mast-a31cf2":6.09,"snowmobile-e0fef3":1,"piste-basher-snowcat-92fe8b":2.62,"alpine-bench-32fa62":1.02,"timber-ski-rack-8239d1":1.59,"snowboard-rack-ecad90":2.42,"ski-and-pole-stack-9d4d53":1.79,"snow-capped-log-pile-8719e7":1.17,"cleared-fire-pit-399cda":1.15,"alpine-fingerpost-d47349":2.46,"wayfinder-post-961fcd":2.67,"summit-cross-181eba":3.56,"weather-station-mast-f84278":5,"groomer-fuel-drum-9d56e6":1.1,"wooden-toboggan-940bbc":.32,"akja-rescue-sledge-a3727f":.39,"skier-e7ad44":1.87,"piste-patroller-cef4c2":1.76,"alpine-ibex-2a288a":1.45,"mountain-hare-d9c64c":.53,"frozen-waterfall-5d1fc6":3.99,"avalanche-gas-exploder-78b46f":2.96},Kf=Object.keys(Gf);function qf(e,t){let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)}var Jf=new a(`#fbfaf4`),Yf=new a(`#F4F8FC`),Xf=(e,t,n)=>.2126*e+.7152*t+.0722*n,Zf=Xf(Yf.r,Yf.g,Yf.b);function Qf(e){e.traverse(e=>{if(!e.isMesh||!e.geometry?.attributes?.color)return;let t=e.geometry.attributes.color;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=t.getZ(e),a=Xf(n,r,i);if(Math.min(n,r,i)<.5||a<.55||i-n<.03)continue;let o=a/Zf;t.setXYZ(e,Math.min(1,Jf.r*o),Math.min(1,Jf.g*o),Math.min(1,Jf.b*o))}t.needsUpdate=!0})}async function $f(e){let{ground:t,piste:n,meta:r,edits:i}=e,a=new lt,o={};await Promise.all(Kf.map(async e=>{try{let t=await a.loadAsync(Wf+e+`.glb`);Qf(t.scene),o[e]=t.scene}catch{}}));let s=new G;s.name=`polyfork-dressing`;let c={},l=(e,t=1)=>{c[e]=(c[e]||0)+t},u=(e,n,r=7)=>{let i=t.heightAt(e+r,n)-t.heightAt(e-r,n),a=t.heightAt(e,n+r)-t.heightAt(e,n-r);return Math.hypot(i,a)/(2*r)},d=(e,t)=>{let n=1/0;for(let i of r.lifts){let[r,a]=i.points,o=a[0]-r[0],s=a[1]-r[1],c=Math.max(0,Math.min(1,((e-r[0])*o+(t-r[1])*s)/(o*o+s*s||1)));n=Math.min(n,Math.hypot(r[0]+o*c-e,r[1]+s*c-t))}return n};function f(e,n,r,{scale:i=3,yaw:a=0,sink:c=.4}={}){let u=o[e];if(!u||!t.inside(n,r,30))return null;let d=u.clone(!0);return d.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1)}),d.scale.setScalar(i),d.rotation.y=a,d.position.set(n,t.heightAt(n,r)-c,r),s.add(d),l(e),d}let p=new nt,m=new We,h=new L,g=new L,_=new L(0,1,0);new nt;let v=new nt;function y(e,n){let r=o[e];if(!r||!n.length)return;r.updateMatrixWorld(!0);let i=[];r.traverse(e=>{e.isMesh&&i.push({geo:e.geometry,mat:e.material,rel:e.matrixWorld.clone()})});for(let e of i){let r=new te(e.geo,e.mat,n.length);r.castShadow=!0,r.frustumCulled=!1,n.forEach((n,i)=>{m.setFromAxisAngle(_,n.yaw||0),v.compose(h.set(n.x,t.heightAt(n.x,n.z)-(n.sink??.4),n.z),m,g.setScalar(n.scale)),r.setMatrixAt(i,p.multiplyMatrices(v,e.rel))}),r.instanceMatrix.needsUpdate=!0,s.add(r)}l(e,n.length)}let b=[];function x(e,r,i,{rMin:a=40,rMax:o=190,minPiste:s=27,maxSlope:c=.5,minLift:l=34,gap:f=26,minEle:p=0}={}){let m=[];for(let h=0;h<i*30&&m.length<i;h++){let i=qf(e+h*1.37,r-h*.71)*Math.PI*2,g=a+qf(r+h*2.11,e+h*.53)*(o-a),_=e+Math.cos(i)*g,v=r+Math.sin(i)*g;t.inside(_,v,60)&&(t.heightAt(_,v)<p||u(_,v)>c||n.distAt(_,v)<s||d(_,v)<l||b.some(e=>Math.hypot(e[0]-_,e[1]-v)<f)||(b.push([_,v]),m.push({x:_,z:v,yaw:qf(_,v)*Math.PI*2})))}return m}let S=Ls(Is(t,n,r.lifts,i?.trees),t,n,r.lifts,{scale:2.8,cell:46,per:12,keepOff:[]}),C={"snow-laden-spruce-36716e":[],"windblown-larch-abb99c":[],"bare-mountain-rowan-10e72e":[]};for(let e of S){let t=qf(e.x*.37,e.z*1.13),n=t<.74?`snow-laden-spruce-36716e`:t<.9?`windblown-larch-abb99c`:`bare-mountain-rowan-10e72e`;C[n].push({x:e.x,z:e.z,yaw:e.rot,scale:11*e.sy/Gf[n],sink:.5})}for(let[e,t]of Object.entries(C))y(e,t);let w=[[`alpine-bench-32fa62`,5,4.5],[`timber-ski-rack-8239d1`,4,4.5],[`snowboard-rack-ecad90`,3,4],[`ski-and-pole-stack-9d4d53`,4,4.5],[`snow-capped-log-pile-8719e7`,4,4],[`groomer-fuel-drum-9d56e6`,4,4],[`wooden-toboggan-940bbc`,2,6],[`mountain-hare-d9c64c`,1,8]];for(let[e,t]of ka.entries()){b.push([t.x,t.z]);let n=x(t.x,t.z,e===0?5:4,{rMin:85,rMax:230,gap:52,maxSlope:.42});for(let e of n)f(`alpine-chalet-47d59e`,e.x,e.z,{scale:3.3,yaw:Math.atan2(t.x-e.x,t.z-e.z)});let r=x(t.x,t.z,1,{rMin:95,rMax:240,gap:55,maxSlope:.42});for(let e of r)f(`alpine-hay-barn-3965e5`,e.x,e.z,{scale:3.4,yaw:e.yaw});for(let[e,n,r]of w)for(let i of x(t.x,t.z,n,{rMin:48,rMax:150,gap:15,maxSlope:.6}))f(e,i.x,i.z,{scale:r,yaw:i.yaw});for(let e of x(t.x,t.z,2,{rMin:55,rMax:130,gap:18,maxSlope:.6}))f(`alpine-fingerpost-d47349`,e.x,e.z,{scale:4.5,yaw:e.yaw});let i=x(t.x,t.z,1,{rMin:60,rMax:120,gap:20,maxSlope:.5});for(let e of i)f(`cleared-fire-pit-399cda`,e.x,e.z,{scale:4.5,yaw:e.yaw});let a=x(t.x,t.z,1,{rMin:58,rMax:110,gap:24,maxSlope:.45});for(let e of a)f(`piste-basher-snowcat-92fe8b`,e.x,e.z,{scale:3.6,yaw:e.yaw});for(let e of x(t.x,t.z,2,{rMin:55,rMax:105,gap:16,maxSlope:.5}))f(`snowmobile-e0fef3`,e.x,e.z,{scale:4.2,yaw:e.yaw})}let T=ka[0],E=x(610,4280,1,{rMin:78,rMax:120,gap:30,maxSlope:.45,minLift:55});for(let e of E)f(`ski-lift-base-station-924491`,e.x,e.z,{scale:3.1,yaw:Math.atan2(610-e.x,4280-e.z)});for(let e=0;e<3;e++)f(`gondola-cabin-c05230`,T.x-78+e*30,T.z+96,{scale:3,yaw:.3});for(let e=0;e<3;e++)f(`chairlift-chair-2beb2b`,T.x+62+e*24,T.z+104,{scale:3,yaw:-.2});let D={x:349.8,z:-403.45};f(`summit-cross-181eba`,D.x-26,D.z-64,{scale:5.5,yaw:.4}),f(`weather-station-mast-f84278`,D.x+58,D.z-30,{scale:4.2,yaw:0}),f(`lift-top-station-46d313`,D.x+92,D.z+66,{scale:3.1,yaw:-.7}),f(`mountain-refuge-hut-32ab1e`,D.x-96,D.z+42,{scale:3.4,yaw:1.1}),f(`stone-cairn-a9bf48`,D.x-60,D.z-20,{scale:5,yaw:0}),f(`avalanche-gas-exploder-78b46f`,D.x+130,D.z-90,{scale:4,yaw:2.4}),f(`alpine-fingerpost-d47349`,D.x+8,D.z+18,{scale:4.5,yaw:.8});for(let e of x(D.x,D.z,3,{rMin:120,rMax:330,gap:40,maxSlope:1.6,minPiste:36}))f(`alpine-ibex-2a288a`,e.x,e.z,{scale:8,yaw:e.yaw});let O=r.runs.find(e=>e.name===`云霄峰道`)??r.runs[0],k=e=>e.points.reduce((t,n,r)=>r?t+Math.hypot(n[0]-e.points[r-1][0],n[1]-e.points[r-1][1]):t,0),A=wu(O.points,30);f(`race-start-hut-c6d405`,A.x-A.dz*34,A.z+A.dx*34,{scale:4.2,yaw:Math.atan2(-A.dx,-A.dz)});let ee=[],j=[];for(let e of r.runs){if(!e.name)continue;let t=k(e);for(let n=90;n<t-60;n+=170){let t=wu(e.points,n),r=Math.floor(n/170)%2?1:-1;ee.push({x:t.x-t.dz*23*r,z:t.z+t.dx*23*r,yaw:qf(t.x,t.z)*3,scale:6,sink:.5})}}let M=k(O);for(let e=130;e<M-100;e+=110){let t=wu(O.points,e);j.push({x:t.x,z:t.z,yaw:Math.atan2(t.dx,t.dz),scale:6.5,sink:.3})}y(`piste-marker-pole-7480c3`,ee),y(`slalom-gate-7f4875`,j);for(let e=420;e<M-200;e+=640){let t=wu(O.points,e);f(`snow-cannon-cc3ea5`,t.x-t.dz*30,t.z+t.dx*30,{scale:3,yaw:Math.atan2(-t.dz,-t.dx)}),f(`piste-floodlight-mast-a31cf2`,t.x+t.dz*32,t.z-t.dx*32,{scale:4.2,yaw:0})}let N=wu(O.points,M*.45);f(`piste-patrol-hut-17a90a`,N.x-N.dz*40,N.z+N.dx*40,{scale:3.6,yaw:Math.atan2(N.dx,N.dz)}),f(`piste-patroller-cef4c2`,N.x-N.dz*30,N.z+N.dx*30,{scale:8,yaw:1.2}),f(`akja-rescue-sledge-a3727f`,N.x-N.dz*26,N.z+N.dx*24,{scale:7,yaw:.6});for(let e=260;e<M-160;e+=430){let t=wu(O.points,e),n=(qf(e,7)-.5)*14;f(`skier-e7ad44`,t.x-t.dz*n,t.z+t.dx*n,{scale:8,yaw:Math.atan2(t.dx,t.dz),sink:.15})}let ne=(e,t,n,r,i,a)=>{let o=wu(O.points,t);for(let t=0;t<r;t++)f(e,o.x+o.dx*t*a-o.dz*n,o.z+o.dz*t*a+o.dx*n,{scale:i,yaw:Math.atan2(o.dx,o.dz)})};ne(`avalanche-barrier-run-02a615`,M*.22,-46,5,5,10.5),ne(`snow-fence-run-55a09a`,M*.6,-40,6,5,10.5),ne(`safety-net-run-ecf381`,M*.78,26,6,5.5,11.5);let re=x(T.x,T.z,1,{rMin:150,rMax:210,gap:30,maxSlope:.5,minLift:90});for(let e of re)f(`lift-pylon-4e4385`,e.x,e.z,{scale:4.6,yaw:e.yaw});let ie=[`boulder-field-cluster-08e364`,`rock-outcrop-158ac3`,`scree-heap-42cce5`,`dwarf-pine-mat-faee77`],P=0;for(let e=0;e<2600&&P<90;e++){let r=t.x0+qf(e*3.1,11)*t.size,i=t.z0+qf(7,e*1.7)*t.size;if(!t.inside(r,i,80)||t.heightAt(r,i)<2050||n.distAt(r,i)<34||d(r,i)<30)continue;let a=ie[Math.floor(qf(r,i*3)*ie.length)];f(a,r,i,{scale:4+qf(i,r)*3.5,yaw:qf(r*2,i)*Math.PI*2,sink:.25}),P++}for(let e of x(D.x,D.z,2,{rMin:200,rMax:520,gap:90,maxSlope:2.2,minPiste:40}))f(`frozen-waterfall-5d1fc6`,e.x,e.z,{scale:5.5,yaw:e.yaw,sink:.2});return{group:s,counts:c,treeCount:S.length,loaded:Object.keys(o).length,wanted:Kf.length}}var ep={lift:5,station:3.2,lodge:1.8,tree:2.8,treeCell:34,treePer:12,carSpacing:2.4,liftSpeed:14},tp=8,np=56,rp=document.getElementById(`game`),ip=new Ji({canvas:rp,antialias:!1,powerPreference:`high-performance`});ip.shadowMap.enabled=!0,ip.shadowMap.type=1,ip.outputColorSpace=ae;var ap=new ju(ip,{depthScale:.03}),op=new c;op.background=Du.horizon;var Q=new oe(30,1,20,8e4),sp=Nf();sp&&(document.querySelector(`#loading > :last-child`).textContent=sp);var cp=await Cu({original:new URLSearchParams(location.search).has(`original`)});await document.fonts.load(`40px "Patrick Hand SC"`).catch(()=>{});var{ground:lp,meta:up}=cp,[dp,fp]=lp.center,pp=1/0,mp=-1/0;for(let e of lp.h)e<pp&&(pp=e),e>mp&&(mp=e);var hp=pp-160,gp=new L(.62,.55,.56).normalize(),_p=new w(`#ffffff`,be.uSunIntensity.value);_p.castShadow=!0,_p.shadow.mapSize.set(4096,4096);var vp=lp.half*1.45;Object.assign(_p.shadow.camera,{left:-vp,right:vp,top:vp,bottom:-vp,near:100,far:22e3}),_p.shadow.bias=-4e-4,_p.shadow.normalBias=4,_p.target.position.set(dp,(mp+hp)/2,fp),_p.position.copy(_p.target.position).addScaledVector(gp,1e4),op.add(_p,_p.target);var yp=Eu(cp,{terrain:{skirt:!1,castShadow:!0,tiles:9,lodDistance:7e3,nearDistance:500},forest:{chunk:800,lodDistance:2600},toy:ep}),{terrain:bp,lifts:xp,forest:Sp,water:Cp}=yp;op.add(yp.group),Sp.group.visible=!1,op.add(new me(`#cfe4ff`,`#54626e`,1.1));var wp=await $f(cp);op.add(wp.group),window.__polyfork=wp;var Tp=zu(lp,{baseY:hp,top:mp,title:`HEMU · 禾木  —  JIKEPULIN SKI RESORT`,subtitle:`Altay, Xinjiang · ${Math.round(pp).toLocaleString()}–${Math.round(mp).toLocaleString()} m · ${up.runs.length} runs · ${up.lifts.length} lifts`});op.add(Tp.group);var Ep=[];for(let e of yp.vehicles)e.model.ready.then(()=>{yp.parkVehicle(e),yp.fits([e.model.footprint])&&(op.add(e.model.root),e.floats&&Ep.push(e.model.waterline(e.lake.level)))}).catch(()=>{});var Dp=ka.map((e,t)=>{let n=yp.lodges[t];return{kind:`lodge`,...e,group:n,ring:64*ep.lodge,top:new L(e.x,n.position.y+20*ep.lodge,e.z)}}),Op=new Cf(lp,up.runs,up.lifts,{lineHalf:10,liftCable:e=>e.type===`magic_carpet`?3:(e.type===`gondola`?13:9)*ep.lift});op.add(Op.group);var kp=xp.lines.flatMap(e=>{let t=Op.lifts.find(t=>t.lift.id===e.id),n=e.a.y<=e.b.y;return[[n?e.a:e.b,`bottom`],[n?e.b:e.a,`top`]].map(([e,n])=>({kind:`station`,lift:t,end:n,x:e.x,y:e.y,z:e.z,ring:13*ep.station,top:new L(e.x,e.y+6*ep.station,e.z)}))}),Ap=new pf(lp,up.runs,{count:np,scale:tp});op.add(Ap.group);var jp=Ou();op.add(jp);var Mp=new Hf(lp,document.getElementById(`you-tag`),gp);op.add(Mp.group);var Np=Af(e=>{Mp.set(e),Nm()});Mp.set(kf(new URLSearchParams(location.search).get(`you`))??Np),document.getElementById(`stats`).textContent=`${Op.groups.filter(e=>e.name).length} named runs · ${up.lifts.length} lifts · ${np} riders · Polyfork kit: ${wp.loaded}/${wp.wanted} parts, ${wp.treeCount} trees, ${Object.values(wp.counts).reduce((e,t)=>e+t,0)} placements`;var Pp=900,$=new aa(Q,rp);$.enableDamping=!0,$.dampingFactor=.08,$.rotateSpeed=.6,$.zoomToCursor=!0,$.screenSpacePanning=!1,$.minDistance=Pp,$.maxDistance=24e3,$.minPolarAngle=.12,$.maxPolarAngle=1.42,$.autoRotateSpeed=.35;var Fp=new L(dp,(mp+hp)/2+150,fp+250);$.target.copy(Fp);var Ip=new je(new L(lp.x0,hp,lp.z0),new L(lp.x0+lp.size,mp,lp.z0+lp.size));function Lp(){let e=I.degToRad(Q.fov),t=2*Math.atan(Math.tan(e/2)*Q.aspect),n=Q.aspect<1?1.6+(1-Q.aspect)*1:1.3;return lp.size*n/(2*Math.tan(Math.min(e,t)/2))}function Rp(){let e=window.innerWidth,t=window.innerHeight,n=Math.min(window.devicePixelRatio,1.5);ip.setPixelRatio(n),ip.setSize(e,t,!1),ap.setSize(e,t,n),be.uPixelRatio.value=n,Q.aspect=e/t,Q.updateProjectionMatrix()}window.addEventListener(`resize`,Rp),Rp(),Q.position.copy(Fp).add(new L(.45,.52,.72).normalize().multiplyScalar(Lp()));var zp=document.getElementById(`spin`),Bp=!0,Vp=0;$.autoRotate=Bp;var Hp=e=>{Bp=e,zp.setAttribute(`aria-pressed`,String(e)),$.autoRotate=e};zp.addEventListener(`click`,()=>Hp(!Bp));var Up=()=>{$.autoRotate=!1,clearTimeout(Vp)},Wp=()=>{clearTimeout(Vp),Vp=setTimeout(()=>$.autoRotate=Bp&&!Qp.size&&!Mm.selected,6e3)};$.addEventListener(`start`,Up),$.addEventListener(`end`,Wp);var Gp=null,Kp=e=>1-(1-e)**3;function qp(e,t,{dur:n=1.4,ease:r=Kp}={}){Gp={t:0,dur:n,ease:r,from:Q.position.clone(),fromT:$.target.clone(),to:e,toT:t}}document.getElementById(`home`).addEventListener(`click`,()=>{qp(Fp.clone().add(new L(.45,.52,.72).normalize().multiplyScalar(Lp())),Fp)});var Jp=new m;function Yp(e,t,n=[.55,1.1]){return Jp.setFromVector3(Q.position.clone().sub($.target)),Jp.phi=I.clamp(Jp.phi,n[0],n[1]),Jp.radius=t,e.clone().add(new L().setFromSpherical(Jp))}function Xp(e){let t=e*1.4/(2*Math.tan(I.degToRad(Q.fov)/2));return I.clamp(t,Pp*1.3,Lp())}var Zp={KeyW:[0,0,1],KeyS:[0,0,-1],KeyA:[-1,0,0],KeyD:[1,0,0],KeyE:[0,1,0],KeyQ:[0,-1,0]},Qp=new Set,$p=!1,em=new L,tm=new L,nm=new L,rm=new L,im=new L,am=new B,om=Q.near*2;function sm(e){let t=0,n=1/0;for(let r of[`x`,`y`,`z`]){let i=(Ip.min[r]-e.origin[r])/e.direction[r],a=(Ip.max[r]-e.origin[r])/e.direction[r];t=Math.max(t,Math.min(i,a)),n=Math.min(n,Math.max(i,a))}return t<=n?[t,n]:null}window.addEventListener(`keydown`,e=>{$p=e.shiftKey,!(!Zp[e.code]||e.metaKey||e.ctrlKey||e.altKey)&&(e.target.closest?.(`input, textarea, select`)||(e.preventDefault(),Qp.add(e.code),Gp=null,Up()))}),window.addEventListener(`keyup`,e=>{$p=e.shiftKey;let t=Qp.size;e.key===`Meta`?Qp.clear():Qp.delete(e.code),t&&!Qp.size&&Wp()});var cm=()=>{Qp.clear(),$p=!1};window.addEventListener(`blur`,cm),document.addEventListener(`visibilitychange`,cm);function lm(e){let t=Q.position,n=$.target;tm.set(0,0,0),Q.getWorldDirection(nm),rm.crossVectors(nm,Q.up).normalize();for(let e of Qp){let[t,n,r]=Zp[e];tm.addScaledVector(rm,t).addScaledVector(Q.up,n).addScaledVector(nm,r)}if(tm.lengthSq()>0){let e=Math.max(t.distanceTo(n),Pp)*($p?.8:.25);tm.normalize().multiplyScalar(e)}if(em.lerp(tm,1-Math.exp(-e*8)),!Qp.size&&em.lengthSq()<1)return em.set(0,0,0);im.copy(t),t.addScaledVector(em,e);let r=(lp.inside(t.x,t.z)?lp.heightAt(t.x,t.z):hp)+80;t.y<r&&(t.y=r),n.add(im.subVectors(t,im)),am.set(t,nm);let i=Op.pickGround(am,Ip),a=sm(am);i&&i.distanceTo(t)>om?n.copy(i):a&&a[1]>om?am.at(I.clamp(t.distanceTo(n),Math.max(a[0],om),a[1]),n):(im.copy(n),Ip.clampPoint(n,n),t.add(im.subVectors(n,im))),$.minDistance=Math.min(Pp,t.distanceTo(n)),vm=!0}var um=document.getElementById(`tip`),dm=new e,fm=new e,pm=new Pe,mm=new je(new L(lp.x0,hp,lp.z0),new L(lp.x0+lp.size,mp+400,lp.z0+lp.size)),hm=!1,gm=!1,_m=null,vm=!1,ym=null;rp.addEventListener(`pointermove`,e=>{dm.set(e.clientX,e.clientY),hm=!0,vm=!0}),rp.addEventListener(`pointerleave`,()=>{hm=!1,vm=!0}),rp.addEventListener(`pointerdown`,e=>{gm=!0,_m=[e.clientX,e.clientY],vm=!0}),window.addEventListener(`pointerup`,e=>{if(gm=!1,_m&&Math.hypot(e.clientX-_m[0],e.clientY-_m[1])<6){let t=e.pointerType!==`mouse`,n=performance.now();dm.set(e.clientX,e.clientY),hm=!0,t&&ym&&n-ym.t<320&&Math.hypot(e.clientX-ym.x,e.clientY-ym.y)<30?(ym=null,Fm||Sm()):(e.button===0&&!Fm&&Mm.select(bm(t)),ym=t?{t:n,x:e.clientX,y:e.clientY}:null)}e.pointerType!==`mouse`&&(hm=!1),_m=null,vm=!0});function bm(e=!1){if(!hm||gm)return null;let t=window.innerWidth,n=window.innerHeight,r=e?2:1,i=Mp.shown&&wm([Mp.item],Mp.reach,t,n,12*r)||wm(Dp,55*ep.lodge,t,n,12*r)||wm(kp,16*ep.station,t,n,12*r);if(i)return i;let a=Op.nearestLift(dm,Q,t,n,9*r);if(a)return a;let o=xm(dm.x,dm.y);if(!o)return null;let s=Q.position.distanceTo(o)*2*Math.tan(I.degToRad(Q.fov)/2)/n;return Op.nearestRun(o.x,o.z,Math.max(20,s*10*r))}function xm(e,t){return fm.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),pm.setFromCamera(fm,Q),Op.pickGround(pm.ray,mm)}function Sm(){let e=xm(dm.x,dm.y);e&&(Up(),qp(Yp(e,Math.max(Pp,Q.position.distanceTo(e)*.45)),e),Wp())}var Cm=new L;function wm(e,t,n,r,i=12){let a=r/(2*Math.tan(I.degToRad(Q.fov)/2)),o=null,s=1;for(let c of e){if(Cm.copy(c.top).project(Q),Cm.z>1)continue;let e=Math.max(i,t*a/Q.position.distanceTo(c.top)),l=Math.hypot((Cm.x+1)*n/2-dm.x,(1-Cm.y)*r/2-dm.y)/e;l<s&&(s=l,o=c)}return o}var Tm=e=>({badge:`lodge`,zh:e.zh,en:e.en,rows:[[`${e.ele.toLocaleString()} m`,``],[`Tickets · food · rental · first aid`,``]]});function Em(e){let t=e.lift&&Op.lifts.find(t=>String(t.lift.id)===e.lift),n=!t&&!e.outside&&Op.nearestRun(e.x,e.z,22),r=t?`${t.zh} ↑`:n?n.name||`Unnamed run`:e.outside?`Off the table`:`Off-piste`,i=e=>`${Math.round(e).toLocaleString()} m`;return{badge:`you`,zh:`你在这里`,en:`You are here`,rows:[[r,``],[t?`up to ${i(t.topY)}`:i(e.y),``]]}}var Dm=e=>e.kind===`lodge`?Tm(e):e.kind===`you`?Em(e):Op.describe(e);function Om(e){if(Op.setHot(e),rp.style.cursor=e?`pointer`:gm?`grabbing`:`grab`,!e){um.classList.add(`hidden`);return}let t=Dm(e);um.querySelector(`.badge`).className=`badge ${t.badge}`,um.querySelector(`.zh`).textContent=t.zh,um.querySelector(`.en`).textContent=t.en,um.querySelector(`.en`).classList.toggle(`hidden`,!t.en),um.querySelector(`.rows`).innerHTML=t.rows.map(([e,t])=>`<span><b>${e}</b>${t?` ${t}`:``}</span>`).join(``),um.classList.remove(`hidden`)}function km(){if(um.classList.contains(`hidden`))return;let e=um.getBoundingClientRect(),t=dm.x+18,n=dm.y+20;t+e.width>window.innerWidth-12&&(t=dm.x-e.width-14),n+e.height>window.innerHeight-12&&(n=dm.y-e.height-14),um.style.transform=`translate(${Math.max(12,t)}px, ${Math.max(12,n)}px)`}var Am=new URL(`./`,location.href).pathname,jm=(()=>{try{let e=new URL(document.referrer);return history.length>1&&e.origin===location.origin&&[Am,`${Am}index.html`].includes(e.pathname)}catch{return!1}})(),Mm=new If({hf:lp,runs:up.runs,runMap:Op,lodges:Dp,stations:kp,describe:Dm,you:()=>Mp.shown?Mp.item:null,onSelect:e=>e?Up():Wp(),onLook:e=>{let t=Mm.focus(e);qp(Yp(t.point,Xp(t.size)),t.point)},onGo:(e,t)=>Im(t,()=>location.assign(`./?at=${e}`),`Off to ${Dm(t).zh}`),onBack:jm?e=>Im(e,()=>history.back(),`Back to riding`):null});function Nm(){Mm.selected===Mp.item&&(Mp.shown?Mm.refresh():Mm.select(null)),Op.setHot(null),vm=!0}var Pm=Uf(document.getElementById(`cloud`)),Fm=null;function Im(e,t,n){if(Fm)return;let r=Mm.focus(e,{dive:!0});qp(Yp(r.point,160,[.7,1]),r.point,{dur:1.3,ease:e=>e*e*(3-2*e)}),Up(),n&&Mf(n),Fm={t:0,dur:1.3,cloud:e=>I.smoothstep(e,.35,1),done:t}}function Lm(e){let t=Mm.focus(e);$.target.copy(t.point),Q.position.copy(Yp(t.point,160,[.7,1])),qp(Yp(t.point,Xp(t.size)),t.point,{dur:2.2}),Pm(1),Fm={t:0,dur:2.2,cloud:e=>1-I.smoothstep(e,.05,.55)}}var Rm=Mm.itemOf(new URLSearchParams(location.search).get(`at`));Rm&&(Mm.select(Rm),Lm(Rm));var zm=`hemu-diorama.touch-guide`,Bm=document.getElementById(`guide`);function Vm(e){if(document.body.classList.toggle(`touch`,e),!e)return;let t=!0;try{t=!!localStorage.getItem(zm)}catch{}!t&&!Rm&&Bm.classList.remove(`hidden`)}function Hm(){Bm.classList.add(`hidden`);try{localStorage.setItem(zm,`1`)}catch{}}Bm.querySelector(`.ok`).addEventListener(`click`,Hm),Bm.addEventListener(`click`,e=>{e.target===Bm&&Hm()}),window.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&!document.body.classList.contains(`touch`)?Vm(!0):e.pointerType===`mouse`&&document.body.classList.remove(`touch`)},!0),window.addEventListener(`keydown`,()=>document.body.classList.remove(`touch`),!0),Vm(matchMedia(`(pointer: coarse)`).matches),window.addEventListener(`pageshow`,e=>{e.persisted&&Mm.selected&&Lm(Mm.selected)});var Um=new re,Wm=0,Gm=[jp,Op.group,Tp.shadow];document.getElementById(`loading`).classList.add(`done`);function Km(){let e=Math.min(Um.getDelta(),.05);if(Wm+=e,Gp){Gp.t=Math.min(1,Gp.t+e/Gp.dur);let t=Gp.ease(Gp.t);Q.position.lerpVectors(Gp.from,Gp.to,t),$.target.lerpVectors(Gp.fromT,Gp.toT,t),$.minDistance=Math.min(Pp,Q.position.distanceTo($.target)),Gp.t>=1&&(Gp=null)}if(Fm&&(Fm.t=Math.min(1,Fm.t+e/Fm.dur),Pm(Fm.cloud(Fm.t)),Fm.t>=1)){let e=Fm;Fm=null,e.done?.()}lm(e),$.update(e);let t=$.target;Ip.clampPoint(t,t),$.minDistance=Math.min(Pp,Q.position.distanceTo(t)),Op.setLineOpacity(I.clamp((Q.position.distanceTo(t)-1500)/5e3,.18,.9)),xp.update(e),Ap.update(e,Q),Mp.update(Q,Wm,window.innerWidth,window.innerHeight),Sp.update(Q.position),bp.update(Q.position),jp.position.copy(Q.position),jp.material.uniforms.uTime.value=Wm,Cp.update(Wm,Ep),(vm||$.autoRotate)&&(vm=!1,Om(bm())),km(),ap.render(op,Q,Wm,Gm),Mp.drawOver(ip,Q),requestAnimationFrame(Km)}window.__diorama={scene:op,camera:Q,controls:$,skiers:Ap,runMap:Op,lifts:xp,forest:Sp,renderer:ip,nav:Mm,stations:kp,lodges:Dp,you:Mp},requestAnimationFrame(Km);